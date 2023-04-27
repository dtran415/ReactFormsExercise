import { fireEvent, render } from '@testing-library/react';
import BoxList from './BoxList';

it("renders without crashing", function() {
  render(<BoxList />);
});

it("matches snapshot", function() {
  const {asFragment} = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

function setInput(component, label, value) {
  const input = component.getByLabelText(label);
  fireEvent.change(input, {target: {value: value}});
}

function addBox(component, height, width, color) {
  setInput(component, "Height", height);
  setInput(component, "Width", width);
  setInput(component, "Background Color", color);
  const button = component.getByText("Add a Box");
  fireEvent.click(button);
}

it("adds a new box", function() {
  const boxList = render(<BoxList />);

  // expect no boxes
  expect(boxList.queryByText("X")).not.toBeInTheDocument();

  // add a box with no values set so should be default
  addBox(boxList);
  let boxes = boxList.queryAllByText("X");
  expect(boxes.length).toBe(1);


  // expect to see box with default styles
  let box = boxes[0];
  expect(box.previousSibling).toHaveStyle(`
    height: 5em;
    width: 5em;
    background-color: red
  `);

  // add another box with values set
  addBox(boxList, 3, 4, "blue");
  boxes = boxList.queryAllByText("X");
  expect(boxes.length).toBe(2);

  // expect to see second box with given styles
  box = boxes[1];
  expect(box.previousSibling).toHaveStyle(`
    height: 3em;
    width: 4em;
    background-color: blue
  `);

  // expect all inputs to be empty after clicking add
  expect(boxList.getAllByDisplayValue("")).toHaveLength(3);
})

it("removes a box", function() {
  const boxList = render(<BoxList />);
  addBox(boxList);

  const removeButton = boxList.getByText("X");
  fireEvent.click(removeButton);
  expect(removeButton).not.toBeInTheDocument();
})