import { useState } from "react";

export const Password = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleClick = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const buttonLabel = isPasswordVisible ? "Hide" : "Show";
  const inputType = isPasswordVisible ? "text" : "password";

  return (
    <div>
      <label htmlFor="password">Password:</label>
      <input id="password" type={inputType} />
      <button type="button" onClick={handleClick}>
        {buttonLabel}
      </button>
    </div>
  );
};
