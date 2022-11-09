import React, { useState } from "react";
import AutoForm from "./AutoForm";
import DisplayResult from "./DisplayResult";

const Form = () => {
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  const submitForm = () => {
    setFormIsSubmitted(true);
  };
  return (
    <div>
      {!formIsSubmitted ? (
        <AutoForm submitForm={submitForm} />
      ) : (
        <DisplayResult />
      )}
    </div>
  );
};

export default Form;
