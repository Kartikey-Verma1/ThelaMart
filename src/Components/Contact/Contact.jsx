import "./Contact.css";
import { useState } from "react";

const Contact = ()=>{
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [message, setmessage] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
        alert(`Dear ${name}, Message Sent Successfully!`);

        setname("");
        setemail("");
        setmessage("");
    }
    return(
        <div className="contact">
            <h2 className="contact_head">Contact Us</h2>
            <p>We'd love to hear from you! Please fill out the form below or reach us via email.</p>
            <div className="form_container">

                <form className="form_contact" onSubmit={handleSubmit}>

                    <div className="form_name form_detail">
                        <label htmlFor="input_name">Name:</label>
                        <input 
                            type="text" 
                            id="input_name" 
                            placeholder="Enter Your Name"
                            value={name}
                            onChange={(e)=>{setname(e.target.value)}}
                            required/>
                    </div>
                    <div className="form_email form_detail">
                        <label htmlFor="input_email">Email:</label>
                        <input 
                            type="email" 
                            id="input_email" 
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e)=>{setemail(e.target.value)}}
                            required/>
                    </div>
                    <div className="form_message form_detail">
                        <label htmlFor="input_message">Message:</label>
                        <textarea 
                            id="input_message" 
                            rows={5} 
                            placeholder="Enter message here!" 
                            value={message}
                            onChange={(e)=>{setmessage(e.target.value)}}
                            required></textarea>
                    </div>
                    <button type="submit">Send Message</button>

                </form>

            </div>
        </div>
    )
}
export default Contact;