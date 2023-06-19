interface MyComponentProps {
  // props
  className?: string;
}

function MyComponent(props: any) {
  const customClassName = props.className;
  return (
    <div
      style={{
        backgroundColor: "red",
        color: "white",
      }}
      className={customClassName}
    >
      My Example Component
    </div>
  );
}

export default MyComponent;
