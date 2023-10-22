import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <>
        <div class="contact-form">
            <h1>Contact Us</h1>
            <form action="#" method='post'>
                <label for="name">Name</label>
                <input type="text" id='name' name='name' required/>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <label for="message">Message:</label>
                <textarea name="message" id="message" rows="5" required></textarea>
                <button type='submit'>Submit</button>
            </form>
        </div>
    </>
  )
}

export default Contact