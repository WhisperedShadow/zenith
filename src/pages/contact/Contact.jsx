import React from "react";

const Contact = () => {
  const studentCoordinates = {
    name: "Student Coordinates",
    memebers: [
      { name: "Harish E", number: "6381524202" },
      { name: "Anusiya T", number: "6383304738" },
      { name: "Priyadharshini R", number: "9025611732" },
      { name: "Harish", number: "8610937144" },
    ],
  };

  const eventOrganizers = {
    name: "Event Organizers",
    memebers: [
      { name: "Abraham Kinston A", number: "8903550492" },
      { name: "Ashwin K", number: "9360349760" },
    ],
  };

  const organizations = [studentCoordinates, eventOrganizers];

  return( <section>
    <h1>Contact Page
{organizations.map((organization)=>{
  return (
    <div key={organization.name}>
      <h2>{organization.name}</h2>
      {organization.memebers.map((membar)=>{
        return (
          <div key={membar.name}>
            <p>{membar.name}</p>
            <p>{membar.number}</p>
          </div>
        )
      })}
    </div>
  )
})}

    </h1>
  </section>);
};

export default Contact;
