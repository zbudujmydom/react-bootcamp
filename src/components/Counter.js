export const Counter = (props) => {
  const increaseCounter = () => {
    props.onIdIncrease();
  };

  return (
    <div>
      <h1>Current offer id: {props.id}</h1>
      <button onClick={increaseCounter}>Increase</button>
    </div>
  );
};
