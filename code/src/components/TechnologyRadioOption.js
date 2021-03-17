import React from 'react';

export const TechnologyRadioOption = ({ technologyName, setTechonology }) => {
  const onTechnologyChange = (e) => {
    console.log(`Technology: ${e.target.value}`);
    setTechonology(e.target.value);
  };

  return (
    <>
      <label htmlFor={technologyName}>{technologyName.toUpperCase()}</label>
      <input
        name="technology"
        id={technologyName}
        value={technologyName}
        type="radio"
        onChange={(e) => {
          onTechnologyChange(e);
        }}
      />
    </>
  );
};
