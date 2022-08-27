import { useState, useContext } from "react";

import { SelectedPersonContext } from "@/features/people/selected-person";

import PersonForm from "./form";

export default function PeopleList({ people = [] }) {
  const [_people, setPeople] = useState(people);
  const { selectedPerson, setSelectedPerson } = useContext(
    SelectedPersonContext
  );

  return (
    <>
      <div>displaying {people.length} people</div>
      <div className="flex flex-col gap-2">
        {_people.map((person) => (
          <div
            onClick={() => setSelectedPerson(person)}
            className={`border p-2 hover:bg-blue-400 ${
              selectedPerson?._id === person._id ? "bg-red-500" : ""
            }`}>
            <div>{person._id}</div>
            <div>{person.name}</div>
            <div>{person.email}</div>
          </div>
        ))}
      </div>

      <PersonForm
        value={selectedPerson}
        onChange={(person) => setSelectedPerson(person)}
        close={() => setSelectedPerson(undefined)}
        onSave={() => {
          setPeople((prev) =>
            prev.map((person) =>
              selectedPerson?._id === person._id ? selectedPerson : person
            )
          );
          setSelectedPerson(undefined);
        }}
      />
    </>
  );
}
