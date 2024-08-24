import { useState } from "react";

export const Note = () => {
  const [showError, setShowError] = useState(false);
  const [noteValue, setNoteValue] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setNoteValue(value);
  };

  const handleBlur = () => {
    setShowError(noteValue.length < 5);
  };

  return (
    <div>
      <input type="text" value={noteValue} onChange={handleChange} onBlur={handleBlur} />
      {showError ? <div>Text is too short</div> : null}
    </div>
  );
};
