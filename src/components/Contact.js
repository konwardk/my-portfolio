import React from "react";
import '../styles/Contact.css';
function Contact(props){
    return (
        <div className="main-content" id="contact">
            <div className="heading">
                <h3>Contact Me</h3>
            </div> 
            <div className="contact-form">
                <form>
                    <div className="form-field">
                        <label>Name</label>
                        <input type="text" name="name" required></input>
                    </div>
                    <div className="form-field">
                        <label>Email</label>
                        <input type="email" name="email" required></input>
                    </div>
                    <div className="form-field">
                        <label>Contact No</label>
                        <input type="number" name="contact" required></input>
                    </div>
                    <div className="form-field">
                    <label>Message</label>
                        <textarea rows="4" cols="30"></textarea>
                    </div>
                    <div>
                        <input type="submit" value="Send"></input>
                    </div>
                </form>
                 
            </div>
        </div>
    );
}
export default Contact;