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
                <div className="skills__main__img">
                    <svg className="tab__screen__svg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="1098.75" height="632.37039" viewBox="0 0 1098.75 632.37039">
                        <ellipse cx="549.375" cy="600.77366" rx="549.375" ry="31.59674" fill="#dfdede"></ellipse>
                        <rect x="174.96748" width="825.31765" height="26.25696" fill="#d5d3d3"></rect>
                        <circle cx="197.05271" cy="12.74148" r="6.79546" fill="#141c3a"></circle>
                        <circle cx="219.13794" cy="12.74148" r="6.79546" fill="#6e07f3"></circle>
                        <circle cx="241.22317" cy="12.74148" r="6.79546" fill="#5be9b9"></circle>
                        <polygon points="175.552 415.277 174.967 415.779 174.967 592.903 1000.285 592.903 1000.285 281.779 990.449 282.525 175.552 415.277" fill="#6e07f3"></polygon>
                        <rect x="234.5289" y="175.64069" width="230.47032" height="9.29316" fill="#141c3a"></rect>
                        <rect x="234.5289" y="196.08564" width="230.47032" height="9.29316" fill="#141c3a"></rect>
                        <rect x="234.5289" y="216.53058" width="78.06253" height="9.29316" fill="#141c3a"></rect>
                        <rect x="704.5289" y="433.64069" width="230.47032" height="9.29316" fill="#fff"></rect>
                        <rect x="704.5289" y="454.08564" width="230.47032" height="9.29316" fill="#fff"></rect>
                        <rect x="704.5289" y="474.53058" width="78.06253" height="9.29316" fill="#fff"></rect>
                        <circle cx="561.33549" cy="575.26922" r="9.0658" fill="#E6E6E6"></circle>
                        <circle cx="587.6263" cy="576.1758" r="9.0658" fill="#E6E6E6"></circle>
                        <circle cx="613.91711" cy="577.08238" r="9.0658" fill="#E6E6E6"></circle>
                        <circle cx="587.70943" cy="576.1758" r="7.25264" fill="#0e6ba8"></circle>
                        <rect x="310.5289" y="282.01368" width="78.06253" height="17.81006" fill="#001C55"></rect>
                        <rect x="774.5289" y="523.01368" width="78.06253" height="17.81006" fill="#fff"></rect>
                        <circle cx="350" cy="291.01368" r="54" fill="#001C55" opacity="0.3"></circle>
                        <circle cx="350" cy="291.01368" r="36" fill="#001C55" opacity="0.3"></circle>
                        <circle cx="350" cy="291.01368" r="25" fill="#001C55"></circle>
                        <circle cx="804.375" cy="157.1852" r="54" fill="#001C55" opacity="0.3"></circle>
                        <circle cx="804.375" cy="157.1852" r="36" fill="#001C55" opacity="0.3"></circle>
                        <circle cx="804.375" cy="157.1852" r="25" fill="#001C55"></circle>
                        <circle cx="814" cy="532.01368" r="54" fill="#001C55" opacity="0.3"></circle>
                        <circle cx="814" cy="532.01368" r="36" fill="#001C55" opacity="0.3"></circle>
                        <circle cx="814" cy="532.01368" r="25" fill="#001C55"></circle>
                    </svg>
                    <svg className="tab__screen__svg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="1098.75" height="632.37039" viewBox="0 0 1098.75 632.37039">
                        <defs>
                            <linearGradient id="bd43dd7f-2dfd-4389-bf1e-697a1c0f972b" x1="891.82" y1="790.72" x2="891.82" y2="522.9" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stop-color="gray" stop-opacity="0.25"></stop>
                                <stop offset="0.54" stop-color="gray" stop-opacity="0.12"></stop>
                                <stop offset="1" stop-color="gray" stop-opacity="0.1"></stop>
                            </linearGradient>
                        </defs>
                        <ellipse cx="843.39" cy="664.8" rx="192" ry="43" fill="#0E6BA8" opacity="0.1"></ellipse>
                        <g opacity="0.1"><path d="M673.12,122.89c0,156.1,97.93,282.41,219,282.41" transform="translate(-48.1 -96.1)" fill="#0E6BA8"></path></g>
                        <path d="M675.52,226.13c-70.75.54-138.73-15.45-203.73-33.27S342.32,155,273,146.82c-44.62-5.27-95.4-4.44-130.47,16-33.75,19.66-43.74,51.89-48.67,81.63-3.71,22.38-5.52,45.86,7.54,66.22C110.42,324.8,126,336.4,137,349.86c38.26,46.83,14.53,107.1-23.41,155.51-17.79,22.71-38.6,44.5-52.1,68.48s-19.18,51.1-5.79,74.6c13.28,23.28,43.54,40,76.09,51.45C197.92,723,275,727.6,350.05,729.06c166.14,3.25,332.71-6.63,498.83-16.5,61.47-3.66,123.22-7.34,183.48-17.15,33.46-5.45,67.92-13.44,91.74-30.61,30.25-21.8,36.68-57.11,15-82.33-36.37-42.29-133-49.68-159-95.53-14.31-25.24-1.57-54.37,17-78.92,39.94-52.64,108.35-100,110-158.62,1.1-40.25-34-79.28-86.68-96.43-55.25-18-130.79-12.79-169.85,21.61C810.34,210,738,225.66,675.52,226.13Z" transform="translate(-48.1 -96.1)" fill="#0E6BA8" opacity="0.1"></path>
                        <path d="M995,127.29V645.7c0,15.42-14.88,28-33.24,28H258.34c-18.36,0-33.23-12.54-33.23-28V127.29c0-15.45,14.87-31.19,33.23-31.19l703.33,1.71C980,97.81,995,111.84,995,127.29Z" transform="translate(-48.1 -96.1)" fill="#fff"></path>
                        <path d="M995,127.45v24H225.11v-24A31.35,31.35,0,0,1,256.45,96.1H963.6A31.36,31.36,0,0,1,995,127.45Z" transform="translate(-48.1 -96.1)" fill="#001C55"></path>
                        <circle cx="214.3" cy="27.67" r="11.08" fill="#fa5959" opacity="0.8"></circle>
                        <circle cx="246.53" cy="27.67" r="11.08" fill="#fed253" opacity="0.8"></circle>
                        <circle cx="278.76" cy="27.67" r="11.08" fill="#8ccf4d" opacity="0.8"></circle>
                        <rect x="457" y="170.7" width="70.01" height="33.22" rx="8.57" fill="#0E6BA8" opacity="0.2"></rect>
                        <rect x="598.84" y="170.7" width="70.01" height="33.22" rx="8.57" fill="#0E6BA8" opacity="0.2"></rect>
                        <polyline points="491.81 203.17 561.89 294.68 634.08 202.74" fill="none" stroke="#001C55" stroke-miterlimit="10"></polyline>
                        <rect x="508.37" y="291.75" width="107.03" height="50.79" rx="8.57" opacity="0.1"></rect>
                        <rect x="510.55" y="292.79" width="102.68" height="48.73" rx="8.57" fill="#0E6BA8"></rect>
                        <line x1="492.29" y1="170.7" x2="491.38" y2="138.35" fill="none" stroke="#001C55" stroke-miterlimit="10"></line>
                        <polyline points="675.22 139.93 634.08 170.7 590.81 139.93" fill="none" stroke="#001C55" stroke-miterlimit="10"></polyline>
                        <rect x="456.61" y="106.7" width="70.01" height="33.22" rx="8.57" fill="#0E6BA8" opacity="0.2"></rect>
                        <rect x="640.21" y="106.7" width="70.01" height="33.22" rx="8.57" fill="#0E6BA8" opacity="0.2"></rect>
                        <rect x="555.81" y="106.7" width="70.01" height="33.22" rx="8.57" fill="#0E6BA8" opacity="0.2"></rect>
                        <line x1="561.89" y1="341.51" x2="561.62" y2="430.01" fill="none" stroke="#001C55" stroke-miterlimit="10"></line>
                        <path d="M609.53,558.59v0Z" transform="translate(-48.1 -96.1)" fill="none" stroke="#001C55" stroke-miterlimit="10"></path>
                        <polyline points="462.42 493.11 561.42 462.48 660.82 492.89" fill="none" stroke="#001C55" stroke-miterlimit="10"></polyline>                            <rect x="526.62" y="430.01" width="70.01" height="33.22" rx="8.57" fill="#0E6BA8" opacity="0.2"></rect>
                        <rect x="861.88" y="345.12" width="70.01" height="33.22" rx="8.57" transform="translate(1210.51 -631.25) rotate(90)" fill="#0E6BA8" opacity="0.2"></rect>
                        <rect x="861.88" y="454.76" width="70.01" height="33.22" rx="8.57" transform="translate(377.41 1272.15) rotate(-90)" fill="#0E6BA8" opacity="0.2"></rect>
                        <rect x="625.82" y="492.66" width="70.01" height="33.22" rx="8.57" fill="#0E6BA8" opacity="0.2"></rect>
                        <rect x="475.52" y="588.76" width="70.01" height="33.22" rx="8.57" transform="translate(972.95 1114.65) rotate(-180)" fill="#0E6BA8" opacity="0.2"></rect>
                        <rect x="576.46" y="588.76" width="70.01" height="33.22" rx="8.57" transform="translate(1174.83 1114.65) rotate(-180)" fill="#0E6BA8" opacity="0.2"></rect>
                        <line x1="801" y1="320.45" x2="832.16" y2="374.94" fill="none" stroke="#001C55" stroke-miterlimit="10"></line>
                        <line x1="735.11" y1="319.78" x2="767.82" y2="319.78" fill="none" stroke="#001C55" stroke-miterlimit="10"></line>
                        <line x1="613.23" y1="317.15" x2="702.51" y2="319.78" fill="none" stroke="#001C55" stroke-miterlimit="10"></line>
                        <line x1="832.16" y1="265.63" x2="801.15" y2="320.21" fill="none" stroke="#001C55" stroke-miterlimit="10"></line>
                        <rect x="732.22" y="399.07" width="70.01" height="33.22" rx="8.57" transform="translate(1134.8 -447.65) rotate(90)" fill="#0E6BA8" opacity="0.2"></rect>
                        <rect x="797.48" y="399.94" width="70.01" height="33.22" rx="8.57" transform="translate(1200.94 -512.04) rotate(90)" fill="#0E6BA8" opacity="0.2"></rect>
                        <rect x="288.1" y="345.12" width="70.01" height="33.22" rx="8.57" transform="translate(636.73 -57.48) rotate(90)" fill="#0E6BA8" opacity="0.2"></rect>
                        <rect x="288.1" y="454.76" width="70.01" height="33.22" rx="8.57" transform="translate(-196.37 698.37) rotate(-90)" fill="#0E6BA8" opacity="0.2"></rect>
                        <line x1="322.78" y1="320.45" x2="291.61" y2="374.94" fill="none" stroke="#001C55" stroke-miterlimit="10"></line>
                        <line x1="388.66" y1="319.78" x2="355.96" y2="319.78" fill="none" stroke="#001C55" stroke-miterlimit="10"></line>
                        <line x1="510.55" y1="317.15" x2="421.27" y2="319.78" fill="none" stroke="#001C55" stroke-miterlimit="10"></line>
                        <line x1="291.61" y1="265.63" x2="322.62" y2="320.21" fill="none" stroke="#001C55" stroke-miterlimit="10"></line>
                        <rect x="417.76" y="399.07" width="70.01" height="33.22" rx="8.57" transform="translate(820.34 -133.18) rotate(90)" fill="#0E6BA8" opacity="0.2"></rect>
                        <rect x="352.49" y="399.94" width="70.01" height="33.22" rx="8.57" transform="translate(755.94 -67.05) rotate(90)" fill="#0E6BA8" opacity="0.2"></rect>
                        <path d="M156.12,598c0,50.24,31.52,90.9,70.47,90.9" transform="translate(-48.1 -96.1)" fill="#46455b"></path>
                            <path d="M226.59,688.89c0-50.81,35.18-91.92,78.65-91.92" transform="translate(-48.1 -96.1)" fill="#0E6BA8"></path>
                            <path d="M181.66,602.55c0,47.72,20.1,86.34,44.93,86.34" transform="translate(-48.1 -96.1)" fill="#0E6BA8"></path>
                            <path d="M226.59,688.89c0-64.92,40.66-117.45,90.9-117.45" transform="translate(-48.1 -96.1)" fill="#46455b"></path>
                            <ellipse cx="175.43" cy="607.19" rx="17.52" ry="2.96" fill="#0E6BA8" opacity="0.1"></ellipse>
                        </svg>
                </div>
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