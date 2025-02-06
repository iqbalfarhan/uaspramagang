import { PropsWithChildren } from "react";

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center gap-6 p-4">
      {children}
    </div>
  );
};

export default AuthLayout;
