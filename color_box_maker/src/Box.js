import React from "react";
import "./Box.css";

function Box({id, width=5, height=5, backgroundColor="red", handleRemove}) {
    return (
        <div className="Box">
                <div style={{
                    width: `${width}em`,
                    height: `${height}em`,
                    backgroundColor}}>
                </div>
                <button onClick={()=>handleRemove(id)}>X</button>
        </div>
    )
}

export default Box;