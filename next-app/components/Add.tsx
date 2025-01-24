import { Tasks } from "@/app/top/page";
import { useState } from "react";

interface Props {
    setTasks: React.Dispatch<React.SetStateAction<Tasks>>;
}

export default function Add(props: Props) {
    const [name, setName] = useState("");
    const [content, setContent] = useState("");

    return(
        <form className="mt-10">
            <div>
                <label htmlFor="name">タスク名</label>
                <input 
                    className="border" 
                    type="text" 
                    id="name" 
                    value={name} 
                    onChange={(e) => {setName(e.target.value);}}
                />
            </div>
            <div>
                <label htmlFor="content">内容</label>
                <input 
                    className="border" 
                    type="text" 
                    id="content"
                    value={content}
                    onChange={(e) => {setContent(e.target.value);}}
                />
            </div>
            <div>
                <button
                className="border"
                    type="button"
                    onClick={() => {props.setTasks((tasks) => [...tasks, {name, content}]);}}
                >追加</button>
            </div>
        </form>
    );
}