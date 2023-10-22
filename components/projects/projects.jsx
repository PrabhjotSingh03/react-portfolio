// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import './projects.css';

function Projects() {

    // const [projectsData, setprojectsData] = useState([]);

    // useEffect(() => {
    //     axios.get('https://cyberprabhjot.co.in/api/data')
    //         .then(response => {
    //             const reversedData = response.data.reverse();
    //             setprojectsData(reversedData);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching skills:', error);
    //         });
    // }, []);

    // // Filter skills based on category "Skills"
    // const projectsInCategory = projectsData.filter(item => item.category === 'projects');

    return (
        <div className="projects__main__container">
            <div className="projects">
                <h1>My Recent Work</h1>
                <h2>My projects makes use of vast variety of latest technology tools</h2>
            </div>
            {/* <div className='projects__show__card'>
                {projectsInCategory.map(project => (
                    <div className="project__card" key={project._id.$oid}>
                        <img className="project__image" src={project.image} alt={project.title} />
                        <div className="project__details">
                            <h3 className="project__title">{project.title}</h3>
                            <p className="project__description">{project.description}</p>
                            <p className="project__languages">{project.languages}</p>
                            <a className="project__link" href={project.link} target="_blank" rel="noopener noreferrer">
                                Visit Website
                            </a>
                        </div>
                    </div>
                ))}
            </div> */}
            <div className='projects__show__card'>
            <div className="project__card">
                    <img className="project__image" src='/images/projects/urbanclothingv1.png' alt='Urban Clothing' />
                    <div className="project__details">
                        <h3 className="project__title">Urban Clothing</h3>
                        <p className="project__description">An E-Commerce clothing website for shopaholics. Still Under Development</p>
                        <p className="project__languages">MERN Stack, Redux, Stripe</p>
                        <a className="project__link" href='https://urbanclothing.vercel.app/' target="_blank" rel="noopener noreferrer">
                            Visit Website
                        </a>
                    </div>
                </div>
                <div className="project__card">
                    <img className="project__image" src='/images/projects/urbanclothing.jpg' alt='Urban Clothing' />
                    <div className="project__details">
                        <h3 className="project__title">Urban Clothing UI</h3>
                        <p className="project__description">An E-Commerce clothing website for shopaholics. Still Under Development</p>
                        <p className="project__languages">NodeJS, Pug, ExpressJS, MongoDb and APIs</p>
                        <a className="project__link" href='http://ec2-44-209-219-5.compute-1.amazonaws.com:5991/' target="_blank" rel="noopener noreferrer">
                            Visit Website
                        </a>
                    </div>
                </div>
                <div className="project__card">
                    <img className="project__image" src='/images/projects/travelcast.png' alt='TravelCast' />
                    <div className="project__details">
                        <h3 className="project__title">TravelCast</h3>
                        <p className="project__description">Unveil Dream Destination & Forecast the Weather</p>
                        <p className="project__languages">NodeJS, JS, Pug, ExpressJS, Google Places API, OpenweatherAPI</p>
                        <a className="project__link" href='https://travelcast.onrender.com/' target="_blank" rel="noopener noreferrer">
                            Visit Website
                        </a>
                    </div>
                </div>
                <div className="project__card">
                    <img className="project__image" src='/images/projects/playmentor.jpg' alt='Play Mentor' />
                    <div className="project__details">
                        <h3 className="project__title">Play Mentor</h3>
                        <p className="project__description">A CMS to recommend games to users to play based on ratings.</p>
                        <p className="project__languages">HTML, CSS, PHP, MYSQL</p>
                        <a className="project__link" href='http://phpexercises.lovestoblog.com/playmentor/index.php' target="_blank" rel="noopener noreferrer">
                            Visit Website
                        </a>
                    </div>
                </div>
                <div className="project__card">
                    <img className="project__image" src='/images/projects/visualechoquest.jpg' alt='Visual Echo Quest' />
                    <div className="project__details">
                        <h3 className="project__title">Visual Echo Quest</h3>
                        <p className="project__description">An immersive visual puzzle that serves as a quick mental escape from the chaos, rejuvenates minds in seconds.</p>
                        <p className="project__languages">HTML, CSS, Javascript</p>
                        <a className="project__link" href='https://visualechoquest.netlify.app/' target="_blank" rel="noopener noreferrer">
                            Visit Website
                        </a>
                    </div>
                </div>
                <div className="project__card">
                    <img className="project__image" src='/images/projects/gamehaven.jpg' alt='GameHaven' />
                    <div className="project__details">
                        <h3 className="project__title">GameHaven</h3>
                        <p className="project__description">A app to manage purchases of various games and their buyers. Link Buyers to games and games with a genre</p>
                        <p className="project__languages">ASP.Net C#, Bootstrap</p>
                        <a className="project__link" href='http://ec2-44-217-216-142.compute-1.amazonaws.com/GameHaven/' target="_blank" rel="noopener noreferrer">
                            Visit Website
                        </a>
                    </div>
                </div>
                <div className="project__card">
                    <img className="project__image" src='/images/projects/gadgetshubui.jpg' alt='GadgetsHub UI' />
                    <div className="project__details">
                        <h3 className="project__title">GadgetsHub UI</h3>
                        <p className="project__description">An ecommerce shopping website user interface for gadgets</p>
                        <p className="project__languages">HTML, CSS</p>
                        <a className="project__link" href='https://gadgetshubui.netlify.app/' target="_blank" rel="noopener noreferrer">
                            Visit Website
                        </a>
                    </div>
                </div>
                <div className="project__card">
                    <img className="project__image" src='/images/projects/gadgetshub.jpg' alt='GadgetsHub CMS' />
                    <div className="project__details">
                        <h3 className="project__title">GadgetsHub CMS</h3>
                        <p className="project__description">An ecommerce shopping website CMS for gadgets </p>
                        <p className="project__languages">Laravel</p>
                        <a className="project__link" href='http://laravelassignment3.mikehuynhportfolio.com/public/' target="_blank" rel="noopener noreferrer">
                            Visit Website
                        </a>
                    </div>
                </div>
                <div className="project__card">
                    <img className="project__image" src='/images/projects/gameselection.jpg' alt='Gaming Nexus' />
                    <div className="project__details">
                        <h3 className="project__title">Gaming Nexus</h3>
                        <p className="project__description">A website allowing users to select their game Genres and Setups for the game environment.</p>
                        <p className="project__languages">JavaScript, HTML, CSS</p>
                        <a className="project__link" href='https://gamingnexus.netlify.app/' target="_blank" rel="noopener noreferrer">
                            Visit Website
                        </a>
                    </div>
                </div>
                <div className="project__card">
                    <img className="project__image" src='/images/projects/figmamockup.jpg' alt='Figma Mockup' />
                    <div className="project__details">
                        <h3 className="project__title">Figma Mockup</h3>
                        <p className="project__description">A Figma mockup for a portfolio, showcasing the understanding of Figma prototyping.</p>
                        <p className="project__languages">Figma </p>
                        <a className="project__link" href='https://www.figma.com/proto/JyVs9kfVBDms2uykd3xoR3/Prabhjot-Portfolio?type=design&node-id=2-2&t=xIbaAnFojFXX22Kh-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=238%3A178&mode=design' target="_blank" rel="noopener noreferrer">
                            Visit Website
                        </a>
                    </div>
                </div>
                <div className="project__card">
                    <img className="project__image" src='/images/projects/photoshopmockup.jpg' alt='Photoshop Mockups' />
                    <div className="project__details">
                        <h3 className="project__title">Photoshop Mockups</h3>
                        <p className="project__description">Photoshop Mockups/prototypes for websites, flex, posters, and brochures. </p>
                        <p className="project__languages">Photoshop</p>
                        <a className="project__link" href='https://docs.google.com/presentation/d/e/2PACX-1vSclOXp4whj1fGNEDqnjpf-7azpHWu1zitm1kZqvy8WsV-dnKgQBuw0jqcejGh1o0_kBldn_j6AARC2/pub?start=true&loop=true&delayms=3000' target="_blank" rel="noopener noreferrer">
                            Visit Website
                        </a>
                    </div>
                </div>
                <div className="project__card">
                    <img className="project__image" src='https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' alt='Aavas.in' />
                    <div className="project__details">
                        <h3 className="project__title">Aavas.in</h3>
                        <p className="project__description">A website for finding and publishing rooms for rents.</p>
                        <p className="project__languages">HTML, CSS, JS and Bootstrap</p>
                        <a className="project__link" href='https://github.com/PrabhjotSingh03/Aavas.in.git' target="_blank" rel="noopener noreferrer">
                            Visit Website
                        </a>
                    </div>
                </div>
            </div>
            <div className="more__projects">
                <a href="https://github.com/PrabhjotSingh03">See More Projects</a>
            </div>
        </div>
    );
}

export default Projects;