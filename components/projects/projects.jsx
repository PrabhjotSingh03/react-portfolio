import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './projects.css';

function Projects() {

    const [projectsData, setprojectsData] = useState([]);

    useEffect(() => {
        axios.get('http://ec2-54-81-120-228.compute-1.amazonaws.com/api/data')
            .then(response => {
                setprojectsData(response.data);
            })
            .catch(error => {
                console.error('Error fetching skills:', error);
            });
    }, []);

    // Filter skills based on category "Skills"
    const projectsInCategory = projectsData.filter(item => item.category === 'projects');

    return (
        <div className="projects__main__container">
            <div className="projects">
                <h1>My Recent Work</h1>
                <h2>My projects makes use of vast variety of latest technology tools</h2>
            </div>
            <div className='projects__show__card'>
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
            </div>
            <div className="more__projects">
                <a href="https://github.com/PrabhjotSingh03">See More Projects</a>
            </div>
        </div>
    );
}

export default Projects;