
import { use } from "react";
import Person from "./Person";

export default function Persons({ personPromise }) {
  const persons = use(personPromise); // This waits for the promise to resolve

  return (
    <div className="card">
      <h2>Persons: {persons.length}</h2>
      {
        persons.map((person, id) => (
          <Person key={id} person={person} />
        ))
      }
    </div>
  );
}
