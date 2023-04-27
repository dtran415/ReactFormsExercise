import React, {useState} from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

function BoxList({}) {
    const [boxes, setBoxes] = useState([]);

    const addBox = box => {
        setBoxes(boxes => [...boxes, box]);
    }

    const removeBox = id => {
        setBoxes(boxes => boxes.filter(box => box.id !== id));
    }

    const boxComponents = boxes.map(box => (
        <Box 
            key={box.id}
            id={box.id}
            height={box.height || undefined}
            width={box.width || undefined}
            backgroundColor={box.backgroundColor || undefined}
            handleRemove={removeBox}
        />
    ))

    return (
        <div>
            <NewBoxForm addBox={addBox} />
            {boxComponents}
        </div>
    )
}

export default BoxList;