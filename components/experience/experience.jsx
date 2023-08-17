import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './experience.css';

function Experience() {
    const [experienceData, setexperienceData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/data')
            .then(response => {
                setexperienceData(response.data);
            })
            .catch(error => {
                console.error('Error fetching skills:', error);
            });
    }, []);

    const experienceInCategory = experienceData.filter(item => item.category === 'experience');

    return (
        <div className="experience__container">
            <div className="experience__head">
                <h1>Experience</h1>
                <h2>Work, Internship and Volunteership.</h2>
                <h3>An aspiring Full stack web developer with a passion for crafting seamless digital experiences. Beyond coding, I thrive on community involvement, actively engaging with open-source projects and event organization. My goal is to craft exceptional web applications that merge functionality with creativity, pushing the boundaries of what technology can achieve.</h3>
            </div>
            <div className="experience__data">
                    <div className="experience-container">
                        <div className="icons-row">
                            {experienceInCategory.map(experience => (
                                <div key={experience._id.$oid} dangerouslySetInnerHTML={{ __html: experience.icon }} />
                            ))}
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Experience;