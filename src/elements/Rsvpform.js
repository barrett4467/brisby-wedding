import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styled from 'styled-components';

const Title = styled.h1`
  letter-spacing: 10px;
`
const FieldWrapper = styled.div`
  display: block;
  margin-top: 10px;
  text-align: left;
`
const Label = styled.label`
 margin: 10px;
`
const Input = styled.input`
  margin: 10px;
  border-radius: 5px;
`
const TextArea = styled.textarea`
  border-radius: 5px;
  width: 70%;
  height: 50px;
  overflow: hidden;
  resize: none;
`
const Submit = styled.button`
  display: block;
  background-color: #faf9f6;
  color: #3b0512;
  border: 1px solid #3b0512;
  border-radius: 5px; 
  width: 6em;
  padding: 1%;
  letter-spacing: 3px;

  &:hover {
      background-color: #d4d3d2;
  }
`
function RSVPForm() {
  const [state, handleSubmit] = useForm("meqnblnr");
  if (state.succeeded) {
      return <p>Thank you for your RSVP! We can't wait to celebrate with you!</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
        <Title>LETS PARTY!</Title>
        <FieldWrapper>
          <Label htmlFor="name">
            Name:
          </Label>
          <Input
              id="name"
              type="text" 
              name="name"
          />

        <ValidationError 
          prefix="Name" 
          field="name"
          errors={state.errors}
        />
        </FieldWrapper>
        <FieldWrapper>
          <Label htmlFor="email">
              Email Address:
          </Label>
          <Input
              id="email"
              type="email" 
              name="email"
          />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        </FieldWrapper>
        <FieldWrapper>
          <Label for="attending">Will you be Attending?</Label>
          <select name="attending" id="attending" required="">
              <option value="" selected="" disabled="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
          </select>

        </FieldWrapper>
        <FieldWrapper>
          <Label for="plus">And with how many guests?</Label>
          <select name="plus" id="plus" required="">
              <option value="0" selected="">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
          </select>

        </FieldWrapper>
        <FieldWrapper>
          <Label htmlFor="plus-names">
            Please let us know who!
          </Label>
          <Input
              id="plus-names"
              type="text" 
              name="plus-names"
          />
          <ValidationError 
              prefix="Plus-names" 
              field="plus-names" 
              errors={state.errors}
          />

        </FieldWrapper>
          <Label htmlFor='message'>
              Any dietary restrictions or things we should know?
          </Label>
          <TextArea
            id="message"
            name="message"
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
      <Submit type="submit" disabled={state.submitting}>
        SUBMIT
      </Submit>
    </form>
  );
}
export default RSVPForm;
