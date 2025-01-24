export default function MyTable({list}) {
    return(
        <>
            <table>
                <tbody>
                    {list.map((item, index) => (
                        <tr key={index} className="border">
                            <td>{item}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}