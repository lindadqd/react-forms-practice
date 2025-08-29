import { useState } from "react";
import "./App.css";

export default function App() {

  const [userData, setUserData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "", 
    email: "",
    complaint: "",
    contactMethod: "",
    consent: false
  });


  function handleChange(event) {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    if (inputName === "fullName") {
      setUserData({ ...userData, fullName: inputValue });
    } else if (inputName === "address") {
      setUserData({ ...userData, address: inputValue });
    } else if (inputName === "phone") {
      setUserData({ ...userData, phoneNumber: inputValue });
    } else if (inputName === "email") {
      setUserData({ ...userData, email: inputValue });
    } else if (inputName === "complaint") {
      setUserData({ ...userData, complaint: inputValue });
    } else if (inputName === "contact") {
      setUserData({ ...userData, contactMethod: inputValue });
    } else if (inputName === "consent") {
      setUserData({ ...userData, consent: event.target.checked });
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log("Form submitted: ", { userData })
  }


  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Complaining form!</h2>
        <div className="form__section-left">

          <label>
            Full name
            <input 
            id="fullName"
            type="text" 
            name="fullName" 
            required
            onChange={handleChange}
            value={userData.fullName} />
          </label>

          <label>
            Address 
            <input
            id="address"
            type="text"
            name="address"
            onChange={handleChange}
            value={userData.address} />
          </label>

          <label>
            Phone Number
            <input 
            id="phone"
            type="tel" 
            name="phone"
            onChange={handleChange}
            value={userData.phoneNumber} />
          </label>

          <label>
            Email
            <input 
            id="email"
            type="email" 
            name="email" 
            onChange={handleChange}
            value={userData.email}/>
          </label>
        </div>

        <div className="form__section-right">
          <label>
            Write your complaint
            <textarea
              name="complaint"
              rows="10"
              placeholder="You can complain here"
              onChange={handleChange}
              value={userData.complaint}
            ></textarea>
          </label>

          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <label>
              <input 
              onChange={handleChange}
              type="radio" 
              name="contact" 
              value="phone"
              checked={userData.contactMethod === "phone"} />
              Phone
            </label>

            <label>
              <input
              onChange={handleChange} 
              type="radio" 
              name="contact"
              value="email"
              checked={userData.contactMethod === "email"} />
              Email
            </label>

            <label>
              <input 
              onChange={handleChange}
              type="radio" 
              name="contact" 
              value="post"
              checked={userData.contactMethod === "post"} />
              Slow Mail
            </label>

            <label>
              <input
              onChange={handleChange} 
              type="radio" 
              name="contact" 
              value="none"
              checked={userData.contactMethod === "none"} />
              No contact!
            </label>
          </div>
       
          <label>
            I agree you take my data, and do whatever
            <input 
            type="checkbox" 
            name="consent" 
            id="consent"
            onChange={handleChange}
            checked={userData.consent} />
          </label>
        </div>
        <input type="submit" value="Submit!" />
      </form>
    </>
  );
}
