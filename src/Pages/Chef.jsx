import React from 'react';
import '../CSS/Chef.css';
import chefImage1 from './Images/Chef/ChefeThumb1_1.png'
import chefImage2 from './Images/Chef/ChefeThumb1_2.png'
import chefImage3 from './Images/Chef/ChefeThumb1_3.png'

const chefs = [
    { name: "Ralph Edwards", role: "Chef Lead", image: chefImage1 },
    { name: "Leslie Alexander", role: "Chef Assistant", image: chefImage2 },
    { name: "Ronald Richards", role: "Chef Assistant", image: chefImage3 },
];

const Chef = () => {
    return (
        <div className="chef-section">
            <p className="chef-tag">👨‍🍳 OUR CHEFE 👨‍🍳</p>
            <h2 className="chef-title">Meet Our Expert Chefe</h2>
            <div className="chef-cards-container">
                {chefs.map((chef, index) => (
                    <div key={index} className="chef-card">
                        <div className="chef-image-wrapper">
                            <img src={chef.image} alt={chef.name} className="chef-image" />
                            <div className="share-icon">🔗</div>
                        </div>
                        <div>
                            <h3 className="chef-name">{chef.name}</h3>
                            <p className="chef-role">{chef.role}</p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Chef;
