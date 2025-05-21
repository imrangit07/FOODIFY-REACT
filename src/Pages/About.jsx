import { useNavigate } from "react-router-dom";
import "../CSS/PageSection.css";
import Chef from "./Chef";
import Offer from "./Offer";

const About = () => {

  const navigate = useNavigate()

    
  return (
    <>
    <div className='page-sections'>
        <h1 className="page-title">ABOUT</h1>
        <ul>
              <li className="home-page"
          onClick={()=>navigate('/')}
          >Home</li>
            /
            <li className="active-page">About</li>
        </ul>
    </div>

    <Chef />
    <Offer />
    </>
  )
}

export default About