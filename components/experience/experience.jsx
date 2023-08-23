import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './experience.css';

function Experience() {
    const [experienceData, setexperienceData] = useState([]);

    useEffect(() => {
        axios.get('http://3.211.231.77/api/data')
            .then(response => {
                setexperienceData(response.data);
            })
            .catch(error => {
                console.error('Error fetching skills:', error);
            });
    }, []);

    const experienceInCategory = experienceData.filter(item => item.category === 'experience');

    return (
        <div className='experience__card'>
            <div className="experience__container">
                <div className="experience__head">
                    <h1>Experience</h1>
                    <h2>Work, Internship and Volunteership.</h2>
                    <h3>An aspiring Full stack web developer with a passion for crafting seamless digital experiences. Beyond coding, I thrive on community involvement, actively engaging with open-source projects and event organization. My goal is to craft exceptional web applications that merge functionality with creativity, pushing the boundaries of what technology can achieve.</h3>
                </div>
            </div>
            <div className="experience__container__main">
                <div className="experience__card__main">
                    {experienceInCategory.map(experience => (
                        <div className="experience__card__container" key={experience._id.$oid}>
                            <div className='experience__image__container'>
                                <img className="experience__image" src={experience.image} alt={experience.company__name} />
                            </div>
                            <div className="experience__details">
                                <div className='company__title__container'>
                                    <div className='position__title__container'>
                                        <h3 className="experience__position__title">{experience.position_title}</h3>
                                    </div>
                                    <div  className='position__work__time'>
                                        <h4 className="experience__work__time">{experience.work__time}</h4>
                                    </div>
                                </div>
                                <div className='company__title__container'>
                                    <div className='position__title__container'>
                                        <h4 className="experience__company__title">
                                            <a href='{experience.company__link}'>{experience.company__name}</a>
                                        </h4>
                                    </div>
                                    <div  className='position__work__time'>
                                        <h4>{experience.company__address}</h4>
                                    </div>
                                </div>
                                <p className="experience__position__description">{experience.position__description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Experience;