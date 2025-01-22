import { ReactNode } from 'react'

interface Props {
  // IMPORTANT: any prop named children will allow you to put stuff inside like <Alert>STUFF</Alert>
  children: ReactNode;
  color? : "primary" | "secondary" | "danger" | "success"; // ? marks this as an optional prop/parameter; using | you can allow specific prop inputs to be passed
  onClick: () => void;
}

const Button = ({children, color="primary", onClick} : Props) => {
  return (
    <>
      <button type="button" className={"btn btn-"+color} onClick={onClick}>{children}</button>
    </>
  )
}

export default Button