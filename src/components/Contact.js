import telephone from "../imgs/call-contact-mobile-phone-telephone-icon-142462.png"
import whatsapp from '../imgs/pngegg (1).png'
import github from '../imgs/github-logo-symbol-trademark-text-transparent-png-2425264.png'
import gmail from '../imgs/Gmail-logo-design-on-transparent-background-PNG.png'


function Contact() {

  return(
    <div className="contact">
      <div className="contact-container">
      <div className="contlink">
        <img src={telephone} alt="tlp"/>
        <div className="conct-text"> 
          <p>+353 899784968</p>
        </div>
       
        </div>
      <div className="contlink">
        <img src={whatsapp} alt="whats"/>
      <div className="conct-text">
        <p>+44 7749784968</p></div>
        </div>
      <div className="contlink">
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="linked"/>
        <div className="conct-text">
          <a href="https://www.linkedin.com/in/jesus-garcia-87aa54228/">LinkedIn</a>
          </div>
        </div>
      <div className="contlink">
        <img src={github} alt="github" />
        <div className="conct-text">
          <a href="https://github.com/jesus1989garcia">Github</a>
          </div>
        </div>
      <div className="contlink">
        <img src={gmail} alt="gmail" />
        <div className="conct-text">
          <p>Gmail:  jesgarjimher@gmail.com</p>
          </div>
      </div>
    </div>
      </div>
      
  )
}

export default Contact