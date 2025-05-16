import { useState } from 'react';
import '../CSS/LoginSignup.css';
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signupSuccess, loginStart, loginSuccess, loginFailure, logout } from '../Slice/AuthSlice';


const LoginSignup = ({ successLogin }) => {

    const { loading, error } = useSelector(state => state.authUser);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isActive, setIsActive] = useState(false);
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });



    const handleInputChange = (e, isLogin) => {
        const { name, value } = e.target;
        if (isLogin) {
            setLoginData(prev => ({ ...prev, [name]: value }));
        } else {
            setUserData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        dispatch(loginStart());

        try {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const user = users.find(u =>
                u.email === loginData.email &&
                u.password === loginData.password
            );

            if (user) {
                dispatch(loginSuccess(user));
                setLoginData({ email: '', password: '' });
                successLogin(prev => !prev)
            } else {
                dispatch(loginFailure("Invalid email or password"));
            }
        } catch (err) {
            dispatch(loginFailure("Login failed"));
        }
    };

    // useEffect(()=>{

    // },[]);

    const handleSignup = (e) => {
        e.preventDefault();
        if (!userData.name || !userData.email || !userData.password) {
            dispatch(loginFailure("Please fill all fields"));
            return;
        }
        setIsActive(false)
        dispatch(signupSuccess(userData));
        setUserData({ name: '', email: '', password: '' });

    };
    const handleLogout = () => {
        dispatch(logout());

        localStorage.removeItem('authState');
    }

    const toggleForm = () => {
        setIsActive(!isActive);
        dispatch(loginFailure(null));
    };

    return (
        <div className="login-signup-container">
            <div className={`container ${isActive ? 'active' : ''}`} id="container">
                <div className="toggle-container">
                    <button
                        className={`toggle-btn ${!isActive ? 'active' : ''}`}
                        onClick={() => setIsActive(false)}
                    >
                        Login
                    </button>
                    <button
                        className={`toggle-btn ${isActive ? 'active' : ''}`}
                        onClick={() => setIsActive(true)}
                    >
                        Sign Up
                    </button>
                </div>

                {/* This is for Login Form */}
                <div className="form-container login-form">
                    <form onSubmit={handleLogin}>
                        <h2>Welcome Back</h2>
                        {error && !isActive && <div className="error">{error}</div>}
                        <div className="input-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={loginData.email}
                                onChange={(e) => handleInputChange(e, true)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={loginData.password}
                                onChange={(e) => handleInputChange(e, true)}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn"
                            disabled={loading}
                        >
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                        <div className="forgot-password">
                            <span
                                style={{
                                    cursor: "pointer",
                                    color: "blue",
                                    textDecoration: "none",  
                                    transition: "text-decoration 0.3s ease"  
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.textDecoration = "underline"}
                                onMouseLeave={(e) => e.currentTarget.style.textDecoration = "none"}
                                onClick={handleLogout}
                            >
                                Logout
                            </span>
                            |
                            <span>Forgot password?</span>

                        </div>
                        <div className="social-login">
                            <p>or continue with</p>
                            <div className="social-icons">
                                <div className="social-icon">
                                    <FaFacebook color="#3b5998" size={20} />
                                </div>
                                <div className="social-icon">
                                    <FaGoogle color="#db4437" size={20} />
                                </div>
                                <div className="social-icon">
                                    <FaTwitter color="#1da1f2" size={20} />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                {/*This is for Signup Form */}
                <div className="form-container signup-form">
                    <form onSubmit={handleSignup}>
                        <h2>Create Account</h2>
                        {error && isActive && <div className="error">{error}</div>}
                        <div className="input-group">
                            <input
                                type="text"
                                placeholder="Full Name"
                                name="name"
                                value={userData.name}
                                onChange={(e) => handleInputChange(e, false)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="email"
                                placeholder="Email Address"
                                name="email"
                                value={userData.email}
                                onChange={(e) => handleInputChange(e, false)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={userData.password}
                                onChange={(e) => handleInputChange(e, false)}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn"
                            disabled={loading}
                        >
                            {loading ? 'Signing up...' : 'Sign Up'}
                        </button>
                        <div className="social-login">
                            <p>or sign up with</p>
                            <div className="social-icons">
                                <div className="social-icon">
                                    <FaFacebook color="#3b5998" size={20} />
                                </div>
                                <div className="social-icon">
                                    <FaGoogle color="#db4437" size={20} />
                                </div>
                                <div className="social-icon">
                                    <FaTwitter color="#1da1f2" size={20} />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;