import "./contact.css"
import Phone from "../../img/phone.png"
import Address from "../../img/address.png"
import Email from "../../img/email.png"
import { useContext, useRef, useState } from "react"
import emailjs from 'emailjs-com';
import { ThemeContext } from "../../context"

const Contact =() => {

    const formRef = useRef();
    const [done, setDone]= useState(false);
    const [user_name, setUser_name] = useState("");
    const [user_subject, setUser_subject] = useState("");
    const [user_email, setUser_email] = useState("");
    const [user_message, setUser_message] = useState("");

    const theme= useContext(ThemeContext)
    const darkMode= theme.state.darkMode;
  


    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_033uu2b', 
        'template_n3fyess', 
        formRef.current, 
        '5WTFfHKgzD566O1zg')
        .then((result) => {
        console.log(result.text);
        setDone(true)
        console.log(user_name,user_email,user_message,user_subject)
        {alert("Message Sent...")}
        setUser_name("")
        setUser_subject("")
        setUser_email("")
        setUser_message("")
        }, (error) => {
        console.log(error.text);
      });
    }
    return (
            <div className="c" id="contact">
                <div className="c-bg"></div>
                <div className="c-wrapper">
                    <div className="c-left">
                        <div classname="c-title-bg">
                        <h1 className="c-title">Contact Me:</h1>
                        </div>
                        <div className="c-info">
                            <div className="c-info-item">
                                <img 
                                src={Phone} 
                                alt="Phone" 
                                className="c-icon" />+977 9810479001
                            </div>
                            <div className="c-info-item">
                                <img 
                                src={Address} 
                                alt="Address" 
                                className="c-icon" />Itahari-4, Province 1
                            </div>
                            <div className="c-info-item">
                                <img 
                                src={Email} 
                                alt="Email" 
                                className="c-icon" />timsina.anuj1301@gmail.com
                            </div>
                        </div>
                    </div>
                    <div className="c-right">
                            <p className="c-desc">
                            <b>Wanna get in touch?</b> <br/>You can message me anytime.
                            </p>
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <input type="text" 
                                    placeholder="Name" 
                                    name="user_name" 
                                    value={user_name} 
                                    style= {{backgroundColor: darkMode && "#333"}}
                                    onChange={(e) => setUser_name(e.target.value)} >
                                    </input>
                            <input type="text" 
                                    placeholder="Subject" 
                                    name="user_subject"
                                    value={user_subject}
                                    style= {{backgroundColor: darkMode && "#333"}}
                                    onChange={(e) => setUser_subject(e.target.value)}></input>
                            <input type="text" 
                                    placeholder="Email" 
                                    name="user_email"
                                    value={user_email}
                                    style= {{backgroundColor: darkMode && "#333"}}
                                    onChange={(e) => setUser_email(e.target.value)}></input>
                            <textarea rows="5" 
                                    placeholder="Message" 
                                    name="message" 
                                    value={user_message}
                                    style= {{backgroundColor: darkMode && "#333"}}
                                    onChange={(e) => setUser_message(e.target.value)}></textarea>
                            <button>SUBMIT</button>
                            
                        </form>
                    </div>
                </div>
                
            </div>
    )
}

export default Contact;