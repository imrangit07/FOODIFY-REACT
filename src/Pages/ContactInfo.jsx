import React from "react";
import "../CSS/ContactInfo.css";
import { FaMapMarkerAlt, FaEnvelopeOpenText, FaPhoneAlt, FaClock } from "react-icons/fa";

const ContactInfo = () => {
   const infoData = [
    {
        icon: <FaMapMarkerAlt />,
        title: "Our Address",
        description: "123 MG Road, Indiranagar, Bengaluru, Karnataka 560038",
    },
    {
        icon: <FaEnvelopeOpenText />,
        title: "info@bharatfoods.in",
        description: "Email us anytime for any kind of enquiry or support.",
    },
    {
        icon: <FaPhoneAlt />,
        title: "Hotline: +91-98765-43210",
        description: "24/7 customer service and phone support available.",
    },
    {
        icon: <FaClock />,
        title: "Opening Hours",
        description: "Mon–Sat: 10 AM – 8 PM  |  Sunday: 10 AM – 4 PM",
    },
];


    return (
        <div className="contact-container">
            {infoData.map((item, index) => (
                <div className="contact-card" key={index}>
                    <div className="icon-box">{item.icon}</div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    );
};

export default ContactInfo;
