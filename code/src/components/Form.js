import React, { useState } from "react";
import { TechnologyRadioOption } from "./TechnologyRadioOption";

const technologies = ["js", "html"];

const Form = ({ name, season, setName, setSeason, setTechnology }) => {
  const onNameChange = (e) => {
    console.log(`Name: ${e.target.value}`);
    setName(e.target.value);
  };

  const onSeasonChange = (e) => {
    console.log(`Season: ${e.target.value}`);
    setSeason(e.target.value);
  };

  const onTechnologyChange = (e) => {
    console.log(`Technology: ${e.target.value}`);
    setTechnology(e.target.value);
  };

  return (
    <form>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" value={name} onChange={onNameChange} />
      </div>
      <div>
        <label htmlFor="season">Favourite season</label>
        <select id="season" onChange={onSeasonChange} value={season}>
          <option disabled></option>
          <option>Winter</option>
          <option>Spring</option>
          <option>Summer</option>
          <option>Fall</option>
        </select>
      </div>
      <div>
        <p>Favourite technology</p>
        {technologies.map((technology) => {
          return (
            <TechnologyRadioOption
              technologyName={technology}
              onTechnologyChange={onTechnologyChange}
            />
          );
        })}
      </div>
    </form>
  );
};

export default Form;
