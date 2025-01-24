import { Tasks } from "@/app/top/page";
import { useRouter } from "next/navigation";

interface Props {
    tasks: Tasks;
    setTasks: React.Dispatch<React.SetStateAction<Tasks>>;
}

export default function Table(props: Props) {
    const router = useRouter();
    return(
        <table className="w-screen">
            {props.tasks.map((task, index) => {
                return(
                    <tbody key={index}>
                        <tr key={index}>
                            <td>{task.name}</td>
                            <td>{task.content}</td>
                            <td>
                                <button
                                    className="border"
                                    onClick={() => 
                                        props.setTasks((tasks) => tasks.filter((_, i) => i != index))
                                    }
                                >削除</button>
                            </td>
                            <td>
                                <a
                                    className="border"
                                    onClick={() => {
                                        router.push(`/edit/${index}`);
                                    }}
                                >編集</a>
                            </td>
                        </tr>
                    </tbody>
                );
            })}
        </table>
    );
}