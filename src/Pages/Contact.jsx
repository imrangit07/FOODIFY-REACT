import { useNavigate } from "react-router-dom";
import "../CSS/PageSection.css";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {

    const navigate = useNavigate();
  return (
    <>
  
    <div className='page-sections'>
        <h1 className="page-title">CONTACT US</h1>
        <ul>
            <li className="home-page"
          onClick={()=>navigate('/')}
          >Home</li>
            /
            <li className="active-page">Contact</li>
        </ul>
    </div>

    <section>
      <ContactInfo/>
    </section>
    <section>
      <ContactForm/>
    </section>
</>

  )
}

export default Contact