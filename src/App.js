import { useState } from "react";
import { Counter } from "./components/Counter";
import { Note } from "./components/Note";
import { Offer } from "./components/Offer";
import { Password } from "./components/Password";
import { OffersFromCategory } from "./components/OffersFromCategory";

function App() {
  const [offerId, setOfferId] = useState(5);

  const handleIncreaseId = () => {
    setOfferId((prevState) => prevState + 1);
  };

  return (
    <main>
      <Counter id={offerId} onIdIncrease={handleIncreaseId} />
      <br />
      <Password />
      <br />
      <Note />
      <br />
      <Offer id={offerId} />
      <br />
      <OffersFromCategory />
    </main>
  );
}

export default App;
