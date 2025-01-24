'use client';
import { useState } from "react";

export default function ErrorButton() {
    const [color, setColor] = useState(false);

    return(
        <>
            <button
                className={`${color ? "bg-red-500" : "bg-sky-300"}`}
                onClick={() => {
                    setColor(true)
                }}
            >ボタンちゃん</button>
        </>
    )
}