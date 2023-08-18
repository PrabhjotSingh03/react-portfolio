import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './skills.css';

function Skills() {
    const [skillsData, setSkillsData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/data')
            .then(response => {
                setSkillsData(response.data);
            })
            .catch(error => {
                console.error('Error fetching skills:', error);
            });
    }, []);

    // Filter skills based on category "Skills"
    const skillsInCategory = skillsData.filter(item => item.category === 'Skills');

    return (
        <div className='skills__container__main'>
            <div className="skills__container">
                <div className="skills__data">
                    <h1>Full Stack Development</h1>
                    <div className="skills-container">
                        <div className="icons-row">
                            {skillsInCategory.map(skill => (
                                <div key={skill._id.$oid} dangerouslySetInnerHTML={{ __html: skill.icon }} />
                            ))}
                        </div>
                        <div className="title-row">
                            <ul>
                                <li><p>I value simple content structure, clean design patterns, and thoughtful interactions.</p></li>
                                <li><p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p></li>
                                <li><p>Building responsive website front end.</p></li>
                                <li><p>Creating application backend.</p></li>
                                <li><p>Designing highly attractive user interface for mobile and web applications.</p></li>
                                <li><p>Creating the flow of application functionalities to optimize user experience.</p></li>
                                <li><p>Creating Web Flows and Prototypes.</p></li>
                                <li className='skills__title'>
                                    <p>Some of the technologies is have worked on are</p>
                                    {skillsInCategory.map(skill => (
                                        <p key={skill._id.$oid}>{skill.title},</p>
                                    ))}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;