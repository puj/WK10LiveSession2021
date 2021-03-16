import React from "react";

export const TechnologyRadioOption = ({
  technologyName,
  onTechnologyChange,
}) => {
  return (
    <>
      <label htmlFor={technologyName}>{technologyName.toUpperCase()}</label>
      <input
        name="technology"
        id={technologyName}
        value={technologyName}
        type="radio"
        onChange={onTechnologyChange}
      />
    </>
  );
};
