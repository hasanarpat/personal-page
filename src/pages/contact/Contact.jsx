import { useRef } from "react";
import Map from "../../components/map/Map";
import "./contact.scss";
import emailjs from '@emailjs/browser';


const Contact = () => {

  const ref = useRef()

	const handleSubmit = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_7lz861w', 'template_y5b80ed', ref.current, 'l8mbR0rrHSLx6FOkr')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

  };

	return (
		<div className="contact">
			<div className="left">
				<form onSubmit={handleSubmit} ref={ref}>
					<div className="formInput">
						<label>Your Name</label>
						<input type="text" placeholder="John Doe" name="name"/>
					</div>
					<div className="formInput">
						<label>Your email</label>
						<input type="text" placeholder="johndoe@mail.com" name="email"/>
					</div>
					<div className="formInput">
						<label>Your Message</label>
						<textarea type="text" rows={7} name="message" placeholder="Isn't it a beatiful day?"></textarea>
					</div>
					<button type="submit">Send</button>
				</form>
			</div>
			<div className="right">
				<Map />
			</div>
		</div>
	);
};

export default Contact;
