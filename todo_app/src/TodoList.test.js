import { render, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

it("renders without crashing", function() {
  render(<TodoList />);
});

it("matches snapshot", function() {
  const {asFragment} = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

function setInput(component, label, value) {
  const input = component.getByLabelText(label);
  fireEvent.change(input, {target: {value: value}});
}

function addTodo(component, todo) {
  setInput(component, "To Do", todo);
  const button = component.getByText("Add To Do");
  fireEvent.click(button);
}

it("adds a new todo", function() {
  const todoList = render(<TodoList />);

  // expect no todos
  expect(todoList.queryByText("X")).not.toBeInTheDocument();

  // add a todo
  addTodo(todoList, "Pay Bill");
  let todos = todoList.queryAllByText("X");
  expect(todos.length).toBe(1);

  // expect to see todo with given text
  expect(todoList.queryByText("Pay Bill")).toBeInTheDocument();

  // add another todo
  addTodo(todoList, "Do Laundry");
  todos = todoList.queryAllByText("X");
  expect(todos.length).toBe(2);

  expect(todoList.queryByText("Do Laundry")).toBeInTheDocument();

  // expect all inputs to be empty after clicking add
  expect(todoList.getAllByDisplayValue("")).toHaveLength(1);
})

it("removes a todo", function() {
  const todoList = render(<TodoList />);
  addTodo(todoList, "Pay Bill");

  const removeButton = todoList.getByText("X");
  fireEvent.click(removeButton);
  expect(removeButton).not.toBeInTheDocument();
})