import { useTypewriter } from "react-simple-typewriter";

const MyComponent = () => {
  const [text, helper] = useTypewriter({
    /* Hook Config */
  });

  /** Hook Output */
  const { isType, isDelete, isDelay, isDone } = helper;

  return (
    <div className="App">
      <span>{text}</span>
    </div>
  );
};
