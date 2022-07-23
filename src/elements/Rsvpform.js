import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styled from 'styled-components';

const Label = styled.label`
  margin: 10px;
`
function RSVPForm() {
  const [state, handleSubmit] = useForm("meqnblnr");
  if (state.succeeded) {
      return <p>Thank you for your RSVP! We can't wait to celebrate with you!</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
        <Label htmlFor="email">
            Email Address
        </Label>
        <input
            id="email"
            type="email" 
            name="email"
        />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
        <Label htmlFor="first-name">
           First Name
        </Label>
        <input
            id="first-name"
            type="text" 
            name="first-name"
        />
        <Label htmlFor="last-name">
           Last Name
        </Label>
        <input
            id="last-name"
            type="text" 
            name="last-name"
        />
      <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />
        <Label for="attending">Will you be Attending?</Label>
        <select name="attending" id="attending" required="">
            <option value="" selected="" disabled="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
        </select>
        <Label for="plus">And with how many guests?</Label>
        <select name="plus" id="plus" required="">
            <option value="0" selected="">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <Label htmlFor="plus-names">
          Please let us know who!
        </Label>
        <input
            id="plus-names"
            type="text" 
            name="plus-names"
        />
        <ValidationError 
            prefix="Plus-names" 
            field="plus-names" 
            errors={state.errors}
        />
        <Label htmlFor='message'>
            Any dietary restrictions or things we should know?
        </Label>
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
export default RSVPForm;
