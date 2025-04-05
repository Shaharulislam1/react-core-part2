import { Suspense } from "react";
import "./App.css";
import Batsman from "./Batsman";
import Counter from "./counter";
import Users from "./Users";

const fetchUser = fetch("https://jsonplaceholder.typicode.com/users")
   .then((res) => res.json());

function App() {
  function handleAdd() {
    alert("Click Done Now");
  }
  const handleAdd2 = () => {
    alert("You Have Two Click");
  };
  const handleAdd3 = (num) => {
    const newNum = num + 10;
    alert(newNum);
  };

  return (
    <>
      <h3>React Core Concept</h3>
      <Suspense fallback={<h3>Loading....</h3>}>
        <Users fetchUser={fetchUser}></Users>
      </Suspense>
     
      <Batsman></Batsman>
      <Counter></Counter>

      <button onClick={handleAdd}>Click Me</button>
      <button onClick={handleAdd2}>Click her</button>
      <button onClick={() => handleAdd3(20)}>Click Add</button>
    </>
  );
}

export default App;
