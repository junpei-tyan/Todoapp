interface DotProps {
    width: number;
    height: number;
}

export default function Dot({width, height}: DotProps) {
    return(
        <>
            <div
                style={{
                    width: `${width}px`,
                    height: `${height}px`,
                    background: "green"
                }}
            ></div>
        </>
    )
}