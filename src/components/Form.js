import React, { useState } from "react";

  function handleSubmit(event) {
    event.preventDefault();
    const errors = [];
    if (firstName.trim() === '') {
      errors.push('Please enter your first name.');
    }
    if (lastName.trim() === '') {
      errors.push('Please enter your last name.');
    }
    if (errors.length > 0) {
      setErrors(errors);
      return;
    }
    const formData = { firstName: firstName, lastName: lastName };
    const dataArray = [...submittedData, formData];
    setSubmittedData(dataArray);
    setFirstName('');
    setLastName('');
    setErrors([]);

    const listOfErrors = errors.map((error, index) => {
      return <div key={index}>{error}</div>;
    });
    
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleFirstNameChange} value={firstName} />
          <input type="text" onChange={handleLastNameChange} value={lastName} />
          <button type="submit">Submit</button>
        </form>
        <div>{listOfErrors}</div>
        <h3>Submissions</h3>
        {listOfSubmissions}
      </div>
    );
    
  }

export default Form;
