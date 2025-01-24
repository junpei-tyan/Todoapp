'use client';

import { useState } from "react"

export default function MyInput() {
    const [value, setValue] = useState(0);

    return(
        <>
            <label htmlFor="Myinput">inputちゃん</label>
            <input 
                type="text" 
                className={`border ${value <= 5 && "text-red-600"}`}
                id="MyInput"
                onChange={(e) => setValue(e.target.value.length)}
            />
        </>
    );
}