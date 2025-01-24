"use client";

import { Tasks } from "@/app/top/page";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {
    params: Promise<{index: string}>;
}

export default function Edit({params}: Props) {
    const [name, setName] = useState("");
    const [content, setContent] = useState("");
    const [index, setIndex] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        params.then((params) => {
            setIndex(params.index);
        });
    }, [params]);

    useEffect(() => {
        if (index !== null) {
            const storedTasks = localStorage.getItem("tasks");

            if (storedTasks) {
                const tasks = JSON.parse(storedTasks);
                const task = tasks[index];

                if (task) {
                    setName(task.name);
                    setContent(task.content);
                } else {
                    router.push("/top");
                }
            }
        }
    }, [index, router]);

    return(
        <>
            <h1 className="text-3xl text-center m-10">TODOリスト{index}</h1>

            <form>
                <div>
                    <label>タスク名</label>
                    <input 
                        type="text" 
                        className="border"
                        value={name}
                        onChange={(e) => {setName(e.target.value)}}
                    />
                </div>
                <div>
                    <label>内容</label>
                    <textarea 
                        className="border"
                        value={content}
                        onChange={(e) => {setContent(e.target.value)}}
                    ></textarea>
                </div>
                <div>
                    <button
                        type="button"
                        className="border"
                        onClick={() => {
                            const storedTasks = localStorage.getItem("tasks");
                            if (storedTasks) {
                                const tasks: Tasks = JSON.parse(storedTasks);
                                const newTasks = tasks.map((task, i) => 
                                    i === Number(index) ? {name, content}: task,
                                );
                                localStorage.setItem("tasks", JSON.stringify(newTasks));
                            }
                            router.push("top");
                        }}
                    >保存</button>
                </div>
            </form>
        </>
    );
}