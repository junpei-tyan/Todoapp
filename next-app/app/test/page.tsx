'use client';

import { useState } from "react";

export default function Test() {
    const [values, setValues] = useState<string[]>(["りんご", "みかん", "ぶどう"]);

    return(
        <>
            <table>
                {values.map((value, index) => {
                    return(
                        <tbody key={index}>
                            <tr>
                                <td>{value}</td>
                                <td>
                                    <button
                                        className="border"
                                        onClick={() => 
                                            setValues((values) => values.filter((_, i) => i != index))
                                        }
                                    >削除</button>
                                </td>
                            </tr>
                        </tbody>
                        );
                    })
                }
            </table>
        </>
    );
}