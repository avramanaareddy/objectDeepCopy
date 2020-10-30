import React from "react";
import "./styles.css";

export default function App() {
  const person = {
    name: "ramana",
    address: {
      city: "Hyderabad",
      state: "telangana",
      country: "India"
    }
  };
  const updatedPerson = { ...person, name: "Venkata",
address:{...person.address}
};
//deep copy example, nested object is separated perfectly. 
person.address.city='Atlanta'
updatedPerson.address.country='USA'
updatedPerson.address.state='Georgia'
  return (
    <div className="App">
      <h3 style={{'textAlign':'center'}}>Original person</h3>
      <p>
        Persona Name: {person.name}
        <br />
        <br />
        <b>Person Address:</b>
        <br />
        <b>City</b>:{person.address.city}
        <br />
        <b>State</b>:{person.address.state}
        <br />
        <b>Country</b>:{person.address.country}
      </p>
      <h3>Doing shallow copy, changed the address of the copied object, when printed first person data also changed </h3>
      <hr />
      <h3 style={{'textAlign':'center'}}>Updated person</h3>
      <p>
        Persona Name: {updatedPerson.name}
        <br />
        <br />
        <b>Person Address:</b>
        <br />
        <b>City</b>:{updatedPerson.address.city}
        <br />
        <b>State</b>:{updatedPerson.address.state}
        <br />
        <b>Country</b>:{updatedPerson.address.country}
      </p>
    </div>
  );
}
