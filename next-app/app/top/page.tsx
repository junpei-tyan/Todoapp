'use client';

import Table from "@/components/Table";
import Add from "@/components/Add";
// import MyTable from "@/components/MyTable";
// import MyButton from "@/components/MyButton";
// import Dot from "@/components/Dot";
// import ErrorButton from "@/components/ErrorButton";
import MyInput from "@/components/MyInput";
import { Children, useEffect, useState } from "react";

export type Tasks = Array<{name : string; content: string}>;

function Top() {
    const [tasks, setTasks] = useState<Tasks>([]);

    useEffect(() => {
        const storedTasks = localStorage.getItem("tasks");
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }
    }, []);

    useEffect(() => {
        if (tasks.length > 0) {
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
    }, [tasks]);

    return (
        <>
            <header className="bg-emerald-100 w-screen h-20">
                <h1 className="text-3xl text-center font-black p-5">TODOリスト</h1>
            </header>

            <Table tasks={tasks} setTasks={setTasks}></Table>
            <Add setTasks={setTasks}></Add>

            {/* <MyTable list={["りんご", "みかん", "ぶどう"]}></MyTable> */}

            {/* <MyButton size={75}></MyButton> */}

            {/* <Dot width={100} height={100}></Dot> */}

            {/* <ErrorButton>ボタンちゃん</ErrorButton> */}

            <MyInput></MyInput>
        </>
    );
}

export default Top;