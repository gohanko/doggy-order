type TInput = {
    id: string,
    type: 'text' | 'password'
    name: string,
}

export const Input = ({
    id,
    type,
    name,
}: TInput) => (
    <input 
        id={id}
        type={type} 
        name={name}
    />
)