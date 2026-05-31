type TButton = {
    type: "button" | "reset" | "submit";
    children: string;
}

export const Button = ({
    type,
    children,
}: TButton) => (
    <button type={type}>
        { children }
    </button>
)