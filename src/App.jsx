import { useState } from "react";
import data from "./data";
import Person from "./Person";

const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <div className="container">
        <h3>{people.length} Birthdays Today</h3>
        {people.map((person) => {
          return <Person key={person.id} {...person} />;
        })}
        {people.length == 0 ? (
          <button className="btn btn-block" onClick={() => setPeople(data)}>
            {" "}
            Reset Items
          </button>
        ) : (
          <button className="btn btn-block" onClick={() => setPeople([])}>
            Clear All
          </button>
        )}
      </div>
    </main>
  );
};
export default App;
