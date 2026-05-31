type TLabel = {
    htmlFor: string;
    children: string;
}

export const Label = ({
    htmlFor,
    children,
}: TLabel) => (
    <label htmlFor={htmlFor}>
        {children}
    </label>
)