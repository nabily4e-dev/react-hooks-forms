import React, {useState} from "react";

function Form({firstName,
  lastName,
  handleFirstNameChange,
  handleLastNameChange,}) {

    const [number, setNumber] = useState(0);
    const [isInvalidNumber, setIsInvalidNumber] = useState(null);

  function handleNumberChange(event) {
    const newNumber = parseInt(event.target.value);
    if (newNumber >= 0 && newNumber <= 5) {
      setNumber(newNumber);
      setIsInvalidNumber(null);
    } else {
      setIsInvalidNumber(`${newNumber} is not a valid number!`);
    }
  }

  return (
    <form>
      <input type="text" value={firstName} onChange={handleFirstNameChange}/>
      <input type="text" value={lastName} onChange={handleLastNameChange}/>
      <input type="number" value={number} onChange={handleNumberChange} />
      {isInvalidNumber ? <span style={{ color: "red" }}>{isInvalidNumber}</span> : null}
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
