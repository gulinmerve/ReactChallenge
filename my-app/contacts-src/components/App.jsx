import React from "react";
import Card from "./Card";
import contacts from "../contacts";


function createCard (contact) {
  return <Card 
      key = {contact.id} 
      name = {contact.name} 
      img= {contact.imgURL}
      email={contact.email}
      tel={contact.phone}
  />
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}
      {/* <Card
      name = {contacts[0].name} 
      img= {contacts[0].imgURL}
      email={contacts[0].email}
      tel={contacts[0].phone}
      />
      <Card
      name = {contacts[1].name} 
      img= {contacts[1].imgURL}
      email={contacts[1].email}
      tel={contacts[1].phone}
      />
      <Card
      name = {contacts[2].name} 
      img= {contacts[2].imgURL}
      email={contacts[2].email}
      tel={contacts[2].phone}
      /> */}
    </div>
  );
}

export default App;
