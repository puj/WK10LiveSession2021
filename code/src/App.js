import React, { useState } from "react";

import Form from "./components/Form";

export const App = () => {
  const [name, setName] = useState("");
  const [season, setSeason] = useState("");
  const [technology, setTechnology] = useState("");

  const isSurveyComplete = () => {
    if (name === "") {
      return false;
    }

    if (season === "") {
      return false;
    }

    if (technology === "") {
      return false;
    }

    return true;
  };

  return (
    <>
      {!isSurveyComplete() && (
        <Form
          name={name}
          season={season}
          setName={setName}
          setTechnology={setTechnology}
          setSeason={setSeason}
        ></Form>
      )}
      {isSurveyComplete() && <div>Summary</div>}
    </>
  );
};
