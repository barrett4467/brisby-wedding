import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function RSVPForm() {
  const [state, handleSubmit] = useForm("meqnblnr");
  if (state.succeeded) {
      return <p>Thank you for your RSVP! We can't wait to celebrate with you!</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
            Email Address
        </label>
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
        <label htmlFor="first-name">
           First Name
        </label>
        <input
            id="first-name"
            type="text" 
            name="first-name"
        />
        <label htmlFor="last-name">
           Last Name
        </label>
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
        <label for="attending">Will you be Attending?</label>
        <select name="attending" id="attending" required="">
            <option value="" selected="" disabled="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
        </select>
        <label for="plus">And with how many guests?</label>
        <select name="plus" id="plus" required="">
            <option value="0" selected="">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <label htmlFor="plus-names">
          Please let us know who!
        </label>
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
        <label htmlFor='message'>
            Any dietary restrictions or things we should know?
        </label>
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
