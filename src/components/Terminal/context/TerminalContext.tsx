import { createContext, ReactNode } from "react";

const TerminalContext = createContext(null);

const TerminalProvider = ({ children }: { children: ReactNode }) => {
  return (
    <TerminalContext.Provider value={null}>{children}</TerminalContext.Provider>
  );
};

export { TerminalProvider };
