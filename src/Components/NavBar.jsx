import '../CSS/NavBar.css';
import { Link } from 'react-router-dom';
import Logo from '../../public/Images/Logos/Foodify-1.mp4';
import { FaRegUser, FaRegHeart } from "react-icons/fa6";
import { BsCart } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


import LoginSignup from '../Pages/LoginSignup';
import { useState } from 'react';
// import { useSelector } from 'react-redux';


const NavBar = () => {
    //   const {isAuthenticated} = useSelector(state => state.authUser);
     
   const[isLoginSignup,setLoginSignup] =useState(false)

//    const currentUser = useSelector(state=>state.authUser.user)
     const currentUser = useSelector(state => state.authUser);
    //  console.log(currentUser.isAuthenticated);
    //  console.log(currentUser.user.name);
     
   


    const allCartDish = useSelector(state => state.allDish.dish);
    const allWishDish = useSelector(state => state.allDish.wish);
    const navigate = useNavigate();
    


    return (
        <>
            <header>
                <nav className="navbar flex-center">
                    <div className="nav-logo">
                        <div className="video-crop-container" onClick={()=>{navigate('/home')}}>
                            
                                <video controls autoPlay muted loop>
                                    <source src={Logo} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                           
                        </div>
                    </div>
                    <div className="nav-search--input flex-center">
                        <input type="search" placeholder="Search for Any Type fo Products" className="search" />
                        <IoSearch />
                    </div>


                    <div className="nav-items">
                        <ul>
                            <li className="login-li" id="login-li"
                            onClick={()=>{setLoginSignup(prev=>!prev)}}
                            >
                                <FaRegUser/>
                                <span>{(currentUser.isAuthenticated&&currentUser.user.name)?currentUser.user.name:""}</span>
                            </li>
                          
                                <li className="like-li" onClick={()=>{navigate("/wish")}}>
                                    <FaRegHeart />
                                    <div className="like-count flex-center wishCount" id="wishCount">{allWishDish.length}</div>
                                </li>
                            
                            
                                <li className="cart-li" onClick={()=>{navigate("/cart")}}>
                                    <BsCart/>
                                    <div className="cart-count flex-center" id="cartCoutn">{allCartDish.length}</div>
                                </li>
                           
                        </ul>
                    </div>
                </nav>
            </header>

            <div id='LoginSignpu' >
                 {isLoginSignup ? <LoginSignup  successLogin={()=>setLoginSignup(false)} /> : ""}
            </div>
        </>
    )
}

export default NavBar