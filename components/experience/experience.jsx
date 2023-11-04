// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import './experience.css';

function Experience() {
    // const [experienceData, setexperienceData] = useState([]);

    // useEffect(() => {
    //     axios.get('https://cyberprabhjot.co.in/api/data')
    //         .then(response => {
    //             const reversedData = response.data.reverse();
    //             setexperienceData(reversedData);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching skills:', error);
    //         });
    // }, []);

    // const experienceInCategory = experienceData.filter(item => item.category === 'experience');

    return (
        <div className='experience'>
            <div className="experience__intro__container">
                <div className="experience__intro__heading">
                    <h1>Experience</h1>
                    <h2>Work, Internship and Volunteership.</h2>
                    <h3>An aspiring Full stack web developer with a passion for crafting seamless digital experiences. Beyond coding, I thrive on community involvement, actively engaging with open-source projects and event organization. My goal is to craft exceptional web applications that merge functionality with creativity, pushing the boundaries of what technology can achieve.</h3>
                </div>
            </div>
            {/* <div className="experience__container__main">
                <div className="experience__card__main">
                    {experienceInCategory.map(experience => (
                        <div className="experience__card__container" key={experience._id.$oid}>
                            <div className='experience__image__container'>
                                <img className="experience__image" src={experience.image} alt={experience.title} />
                            </div>
                            <div className="experience__details">
                                <div className='company__title__container'>
                                    <div className='position__title__container'>
                                        <h3 className="experience__position__title">{experience.position}</h3>
                                    </div>
                                    <div  className='position__work__time'>
                                        <h4 className="experience__work__time">{experience.time}</h4>
                                    </div>
                                </div>
                                <div className='company__title__container'>
                                    <div className='position__title__container'>
                                        <h4 className="experience__company__title">
                                            <a href={experience.link}>{experience.title}</a>
                                        </h4>
                                    </div>
                                    <div  className='position__work__time'>
                                        <h4>{experience.address}</h4>
                                    </div>
                                </div>
                                <p className="experience__position__description">{experience.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}
            <div className="experience__container">
                <div className="experience__card__container">
                    <div className="experience__card">
                        <div className='experience__image__container'>
                            <img className="experience__image" src='https://extechdigital.in/wp-content/uploads/2023/03/cropped-logonew-removebg-preview-2-165x50.png' alt='Extech Digital Logo' />
                        </div>
                        <div className="experience__details">
                            <div className='company__title__container'>
                                <div className='position__title__container'>
                                    <h3 className="experience__position__title">Web Developer</h3>
                                </div>
                                <div className='position__work__time'>
                                    <h4 className="experience__work__time">January 2018 - July 2021</h4>
                                </div>
                            </div>
                            <div className='company__title__container'>
                                <div className='position__title__container'>
                                    <h4 className="experience__company__title">
                                        <a href='https://extechdigital.in/'>Extech Digital</a>
                                    </h4>
                                </div>
                                <div className='position__work__time'>
                                    <h4>Mohali, Punjab, India</h4>
                                </div>
                            </div>
                            <p className="experience__position__description">As a web developer at Extech Digital, I specialized in crafting website layouts and user interfaces using HTML and CSS. I excelled in seamlessly integrating data from various back-end services, ensuring a smooth user experience. My commitment to best development practices resulted in efficient, well-designed code. I played a crucial role in gathering and aligning project specifications with technical needs, contributing to project success. Additionally, I was instrumental in creating and maintaining comprehensive software documentation to promote collaboration and knowledge sharing within the team.</p>
                        </div>
                    </div>
                    <div className="experience__card">
                        <div className='experience__image__container'>
                            <img className="experience__image" src='/images/experience/swat.png' alt='Student&apos;s Welfare through Advance Technology(SWAT)Logo' />
                        </div>
                        <div className="experience__details">
                            <div className='company__title__container'>
                                <div className='position__title__container'>
                                    <h3 className="experience__position__title">Founder and Chair-person</h3>
                                </div>
                                <div className='position__work__time'>
                                    <h4 className="experience__work__time">May 2015 - May 2017</h4>
                                </div>
                            </div>
                            <div className='company__title__container'>
                                <div className='position__title__container'>
                                    <h4 className="experience__company__title">
                                        <a href='#'>Student&apos;s Welfare through Advance Technology(SWAT)</a>
                                    </h4>
                                </div>
                                <div className='position__work__time'>
                                    <h4>Baddi University, HP, India</h4>
                                </div>
                            </div>
                            <p className="experience__position__description"> A vibrant society with a key focus on the Internet of Things (IoT). With a mission to cultivate a collaborative space where tech enthusiasts, and professionals, come together to explore, create, and propel the possibilities of IoT and related technologies. Through workshops, projects, and collaboration, members enhance their skills, develop innovative solutions, and address real-world challenges. With a strong commitment to ethical considerations, industry networking, and community outreach, SWAT was not just a society—it was a dynamic hub for shaping the future of technology.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;