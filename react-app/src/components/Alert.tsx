// type "rafce" in empty tsx file to generate import react, Alert function, and export statements all in one go

import { ReactNode } from "react";

interface Props {
  // IMPORTANT: any prop named children will allow you to put stuff inside like <Alert>STUFF</Alert>
  children: ReactNode;
}

// we're now working with Bootstrap alerts

// can also do what's below, rafce defaults to const FunctionName instead:
// function Alert() {
const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
