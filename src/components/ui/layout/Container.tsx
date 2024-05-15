import { ReactNode } from "react";
import { cn } from "./utils";

type TContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: TContainerProps) => {
  return (
    <div
      className={cn(
        "w-full max-w-[1230px] min-h-screen px-[20px] mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
