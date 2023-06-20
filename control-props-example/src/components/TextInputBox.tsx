import React from "react";

interface TextInputBoxProps {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
}

export const TextInputBox: React.FC<TextInputBoxProps> = (
  props: TextInputBoxProps
) => {
  const { value, onChange, onClear } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const onClearHandler = () => {
    onClear();
  };

  return (
    <div>
      <input type="text" value={value} onChange={onChangeHandler} />
      <button onClick={onClearHandler}>Clear</button>
    </div>
  );
};

export default TextInputBox;
