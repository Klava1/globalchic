import { useForm, ValidationError } from '@formspree/react';
import React from 'react';
import './ContactUs.css';

function ContactUs() {
  const [state, handleSubmit] = useForm("mzbnnlwr");
  if (state.succeeded) {
      return <p className = "contact-us-reply">Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>

      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input id="lastName" type="text" name="lastName" />
        <ValidationError prefix="Last Name" field="lastName" errors={state.errors} />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input id="phone" type="tel" name="phone" />
        <ValidationError prefix="Phone" field="phone" errors={state.errors} />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div className="form-group full-width">
        <label htmlFor="message">Your Message</label>
        <textarea id="message" name="message" />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

export default ContactUs;
