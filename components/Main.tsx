import { ReactNode } from "react";

interface MainProps {
  children: React.ReactNode;
}

const Main = ({ children }: MainProps) => {
  return (
    <main className="flex-grow max-w-md mx-auto w-full p-6 grid gap-6 sm:grid-cols-2 bg-teal-100">
      {children}
    </main>
  );
};

export default Main;
