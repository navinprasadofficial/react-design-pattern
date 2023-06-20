import React from "react";
import TextInputBox from "./TextInputBox";

const Parent: React.FC = () => {
  const [textInputBoxValue, setTextInputBoxValue] = React.useState<string>("");

  const onTextInputBoxChange = (value: string) => {
    setTextInputBoxValue(value);
  };

  const onTextInputBoxClear = () => {
    setTextInputBoxValue("");
  };

  return (
    <>
      <TextInputBox
        value={textInputBoxValue}
        onChange={onTextInputBoxChange}
        onClear={onTextInputBoxClear}
      />
    </>
  );
};

export default Parent;
