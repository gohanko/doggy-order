type TForm = {
  action: string;
  method: "get" | "post";
  children: React.ReactElement | React.ReactElement[];
};

export const Form = ({ action, method, children }: TForm) => (
    <form action={action} method={method}>
        {children}
    </form>
);
