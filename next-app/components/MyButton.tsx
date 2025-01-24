import { useState } from "react";

export default function MyButton({size}) {
    const [width, setWidth] = useState(null);
    const [height, setHeight] = useState(null);

    return(
        <button
            className="bg-lime-200"
            style={{
                width: width ? `${width}px` : "auto",
                height: height ? `${height}px` : "auto",
            }}
            onClick={() => {
                setWidth(size);
                setHeight(size);
            }}
        >ボタン</button>
    );
}