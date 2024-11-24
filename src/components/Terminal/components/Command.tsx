"use client";

import { useState } from "react";

type Command = {
  command: string;
  directory: string;
};

interface CommandProps {
  command: Command;
  isActive?: boolean;
}

const Command = ({ command, isActive }: CommandProps) => {
  const [text, setText] = useState(command.command);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div className="command">
      <span className="hostname">portfolio </span>
      <span className="directory">{command.directory} </span>
      {/* <input
        type="text"
        className="command-text"
        value={text}
        autoFocus
        onChange={handleChange}
      /> */}
      <span
        className="command-text"
        contentEditable
        autoFocus={isActive}
        dangerouslySetInnerHTML={{ __html: text }}
      ></span>
      {/* <span className="command-text" contentEditable="true">
        {command.command}{" "}
      </span> */}
    </div>
  );
};

export default Command;
