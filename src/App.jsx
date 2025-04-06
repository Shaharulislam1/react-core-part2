import { Suspense } from "react";
import "./App.css";
import Batsman from "./Batsman";
import Counter from "./counter";
import Person from "./Persons";
import Users from "./Users";
import Friends from "./Friends";

const fetchUser = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

const fetchfriends = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};
const fetchPerson = async()=>{
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}

function App() {
  const friendsPromise = fetchfriends();
  const personPromise = fetchPerson();
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
      <Suspense fallback={<h3>Loading Person...</h3>}>
      <Person personPromise={personPromise}></Person>
      </Suspense>
      <Suspense fallback={<h3>Loading....</h3>}>
        <Users fetchUser={fetchUser}></Users>
      </Suspense>
      <Suspense fallback={<h2>Friends Coming Soon</h2>}>
        <Friends friendsPromise={friendsPromise}></Friends>
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
