import { FC, PropsWithChildren } from "react";

type PageHeaderProps = PropsWithChildren & {
  title: string;
};

const PageHeader: FC<PageHeaderProps> = ({ title, children }) => {
  return (
    <div className="flex justify-between items-center h-12">
      <h1 className="text-2xl font-medium">{title}</h1>
      {children}
    </div>
  );
};

export default PageHeader;
