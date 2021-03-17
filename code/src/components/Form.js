import React, { useState } from 'react';
import { TechnologyRadioOption } from './TechnologyRadioOption';

const technologies = ['html', 'css', 'java', 'ruby', 'python', 'js'];

const Form = () => {
  const [name, setName] = useState('');
  const [season, setSeason] = useState('');
  const [technology, setTechonology] = useState('');

  const onNameChange = (e) => {
    console.log(`Name: ${e.target.value}`);
    setName(e.target.value);
  };

  const onSeasonChange = (e) => {
    console.log(`Season: ${e.target.value}`);
    setSeason(e.target.value);
  };

  const isSurveyComplete = () => {
    // Alternative 1
    //   if(name != '' && season !='' && technology != ''){
    //       return true;
    //   }
    //   return false;

    //   // Alternative 2
    //   return name != '' && season !='' && technology != '';

    // Alternative 3
    if (name === '') {
      return false;
    }

    if (season === '') {
      return false;
    }

    if (technology === '') {
      return false;
    }

    return true;
  };

  if (isSurveyComplete()) {
    console.log(`Survey Complete!`);
  }

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
              setTechonology={setTechonology}
            />
          );
        })}
      </div>
    </form>
  );
};

export default Form;
