//import React from 'react';

function ContactUs() {
  return (
    <div className="contact-us container">
      <h2>Contact Us</h2>
      <p>If you have any questions or comments, please feel free to get in touch with us using the form below:</p>

      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" className="form-control" id="name" name="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" className="form-control" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea className="form-control" id="message" name="message" rows="4" required></textarea>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      <p>You can also send us a mail at:<a href="mailto:bidhub@gmail.com">bidhub@gmail.com</a></p>
      <p>Customer Service Hours: 8am to 5pm IST - Monday to Friday</p>
    </div>
  );
}

export default ContactUs;
