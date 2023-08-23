import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './skills.css';

function Skills() {
    const [skillsData, setSkillsData] = useState([]);

    useEffect(() => {
        axios.get('https://cyberprabhjot.co.in/api/data')
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
                                <li>
                                    <p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M13 4V2c4.66.5 8.33 4.19 8.85 8.85c.6 5.49-3.35 10.43-8.85 11.03v-2c3.64-.45 6.5-3.32 6.96-6.96A7.994 7.994 0 0 0 13 4m-7.33.2A9.797 9.797 0 0 1 11 2v2.06c-1.43.2-2.78.78-3.9 1.68L5.67 4.2M2.05 11a9.81 9.81 0 0 1 2.21-5.33L5.69 7.1A8.017 8.017 0 0 0 4.05 11h-2m2.22 7.33A10.04 10.04 0 0 1 2.06 13h2c.18 1.42.75 2.77 1.63 3.9l-1.42 1.43m1.4 1.41l1.39-1.37h.04c1.13.88 2.48 1.45 3.9 1.63v2c-1.96-.21-3.82-1-5.33-2.26M12 17l1.56-3.42L17 12l-3.44-1.56L12 7l-1.57 3.44L7 12l3.43 1.58L12 17Z"/>
                                        </svg> I value simple content structure, clean design patterns, and thoughtful interactions.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M13 4V2c4.66.5 8.33 4.19 8.85 8.85c.6 5.49-3.35 10.43-8.85 11.03v-2c3.64-.45 6.5-3.32 6.96-6.96A7.994 7.994 0 0 0 13 4m-7.33.2A9.797 9.797 0 0 1 11 2v2.06c-1.43.2-2.78.78-3.9 1.68L5.67 4.2M2.05 11a9.81 9.81 0 0 1 2.21-5.33L5.69 7.1A8.017 8.017 0 0 0 4.05 11h-2m2.22 7.33A10.04 10.04 0 0 1 2.06 13h2c.18 1.42.75 2.77 1.63 3.9l-1.42 1.43m1.4 1.41l1.39-1.37h.04c1.13.88 2.48 1.45 3.9 1.63v2c-1.96-.21-3.82-1-5.33-2.26M12 17l1.56-3.42L17 12l-3.44-1.56L12 7l-1.57 3.44L7 12l3.43 1.58L12 17Z"/>
                                        </svg> I like to code things from scratch, and enjoy bringing ideas to life in the browser.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M13 4V2c4.66.5 8.33 4.19 8.85 8.85c.6 5.49-3.35 10.43-8.85 11.03v-2c3.64-.45 6.5-3.32 6.96-6.96A7.994 7.994 0 0 0 13 4m-7.33.2A9.797 9.797 0 0 1 11 2v2.06c-1.43.2-2.78.78-3.9 1.68L5.67 4.2M2.05 11a9.81 9.81 0 0 1 2.21-5.33L5.69 7.1A8.017 8.017 0 0 0 4.05 11h-2m2.22 7.33A10.04 10.04 0 0 1 2.06 13h2c.18 1.42.75 2.77 1.63 3.9l-1.42 1.43m1.4 1.41l1.39-1.37h.04c1.13.88 2.48 1.45 3.9 1.63v2c-1.96-.21-3.82-1-5.33-2.26M12 17l1.56-3.42L17 12l-3.44-1.56L12 7l-1.57 3.44L7 12l3.43 1.58L12 17Z"/>
                                        </svg> Building responsive website front end.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M13 4V2c4.66.5 8.33 4.19 8.85 8.85c.6 5.49-3.35 10.43-8.85 11.03v-2c3.64-.45 6.5-3.32 6.96-6.96A7.994 7.994 0 0 0 13 4m-7.33.2A9.797 9.797 0 0 1 11 2v2.06c-1.43.2-2.78.78-3.9 1.68L5.67 4.2M2.05 11a9.81 9.81 0 0 1 2.21-5.33L5.69 7.1A8.017 8.017 0 0 0 4.05 11h-2m2.22 7.33A10.04 10.04 0 0 1 2.06 13h2c.18 1.42.75 2.77 1.63 3.9l-1.42 1.43m1.4 1.41l1.39-1.37h.04c1.13.88 2.48 1.45 3.9 1.63v2c-1.96-.21-3.82-1-5.33-2.26M12 17l1.56-3.42L17 12l-3.44-1.56L12 7l-1.57 3.44L7 12l3.43 1.58L12 17Z"/>
                                        </svg> Creating application backend.
                                    </p>
                                </li>
                                <li>
                                    <p><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M13 4V2c4.66.5 8.33 4.19 8.85 8.85c.6 5.49-3.35 10.43-8.85 11.03v-2c3.64-.45 6.5-3.32 6.96-6.96A7.994 7.994 0 0 0 13 4m-7.33.2A9.797 9.797 0 0 1 11 2v2.06c-1.43.2-2.78.78-3.9 1.68L5.67 4.2M2.05 11a9.81 9.81 0 0 1 2.21-5.33L5.69 7.1A8.017 8.017 0 0 0 4.05 11h-2m2.22 7.33A10.04 10.04 0 0 1 2.06 13h2c.18 1.42.75 2.77 1.63 3.9l-1.42 1.43m1.4 1.41l1.39-1.37h.04c1.13.88 2.48 1.45 3.9 1.63v2c-1.96-.21-3.82-1-5.33-2.26M12 17l1.56-3.42L17 12l-3.44-1.56L12 7l-1.57 3.44L7 12l3.43 1.58L12 17Z"/>
                                        </svg> Designing highly attractive user interface for mobile and web applications.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M13 4V2c4.66.5 8.33 4.19 8.85 8.85c.6 5.49-3.35 10.43-8.85 11.03v-2c3.64-.45 6.5-3.32 6.96-6.96A7.994 7.994 0 0 0 13 4m-7.33.2A9.797 9.797 0 0 1 11 2v2.06c-1.43.2-2.78.78-3.9 1.68L5.67 4.2M2.05 11a9.81 9.81 0 0 1 2.21-5.33L5.69 7.1A8.017 8.017 0 0 0 4.05 11h-2m2.22 7.33A10.04 10.04 0 0 1 2.06 13h2c.18 1.42.75 2.77 1.63 3.9l-1.42 1.43m1.4 1.41l1.39-1.37h.04c1.13.88 2.48 1.45 3.9 1.63v2c-1.96-.21-3.82-1-5.33-2.26M12 17l1.56-3.42L17 12l-3.44-1.56L12 7l-1.57 3.44L7 12l3.43 1.58L12 17Z"/>
                                        </svg> Creating the flow of application functionalities to optimize user experience.
                                    </p>
                                </li>
                                <li>
                                    <p><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M13 4V2c4.66.5 8.33 4.19 8.85 8.85c.6 5.49-3.35 10.43-8.85 11.03v-2c3.64-.45 6.5-3.32 6.96-6.96A7.994 7.994 0 0 0 13 4m-7.33.2A9.797 9.797 0 0 1 11 2v2.06c-1.43.2-2.78.78-3.9 1.68L5.67 4.2M2.05 11a9.81 9.81 0 0 1 2.21-5.33L5.69 7.1A8.017 8.017 0 0 0 4.05 11h-2m2.22 7.33A10.04 10.04 0 0 1 2.06 13h2c.18 1.42.75 2.77 1.63 3.9l-1.42 1.43m1.4 1.41l1.39-1.37h.04c1.13.88 2.48 1.45 3.9 1.63v2c-1.96-.21-3.82-1-5.33-2.26M12 17l1.56-3.42L17 12l-3.44-1.56L12 7l-1.57 3.44L7 12l3.43 1.58L12 17Z"/>
                                        </svg> Creating Web Flows and Prototypes.
                                    </p>
                                </li>
                                <li className='skills__title'>
                                    <p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M13 4V2c4.66.5 8.33 4.19 8.85 8.85c.6 5.49-3.35 10.43-8.85 11.03v-2c3.64-.45 6.5-3.32 6.96-6.96A7.994 7.994 0 0 0 13 4m-7.33.2A9.797 9.797 0 0 1 11 2v2.06c-1.43.2-2.78.78-3.9 1.68L5.67 4.2M2.05 11a9.81 9.81 0 0 1 2.21-5.33L5.69 7.1A8.017 8.017 0 0 0 4.05 11h-2m2.22 7.33A10.04 10.04 0 0 1 2.06 13h2c.18 1.42.75 2.77 1.63 3.9l-1.42 1.43m1.4 1.41l1.39-1.37h.04c1.13.88 2.48 1.45 3.9 1.63v2c-1.96-.21-3.82-1-5.33-2.26M12 17l1.56-3.42L17 12l-3.44-1.56L12 7l-1.57 3.44L7 12l3.43 1.58L12 17Z"/>
                                        </svg> Some of the technologies is have worked on are
                                    </p>
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