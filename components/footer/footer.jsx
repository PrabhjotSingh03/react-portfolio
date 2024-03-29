import {Link} from 'react-scroll';
import './footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="start__project__container">
                <div className="start__project__box">
                    <div className="start__project__content">
                        <div className="start__project">
                            <h2>Start a Project</h2>
                        </div>
                        <div className="interested">
                            <h3>Interested in working together? We should queue up a time to chat. I&apos;m open for exciting ventures.</h3>
                        </div>
                        <div className="let__do__this">
                            <a href='mailto:prabhjot.sains@gmail.com'>Let&apos;s do this</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__container">
                <div className="footer__icon">
                    <Link activeClass="active" to="navbar" spy={true} smooth={true} duration={6000}><img src="/images/icon__white.png" className="logo" alt="" /></Link>
                </div>
                <div className="quote"><h2>Living, learning, & leveling up one day at a time.</h2></div>
                <div className="social__links">
                    <a href="https://www.linkedin.com/in/prabhjot-singh-sains/"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 20 20"><path fill="currentColor" d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4zM7.65 13.979H5.706V7.723H7.65v6.256zm-.984-7.024c-.614 0-1.011-.435-1.011-.973c0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973zm8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355c-.537 0-.856.371-.997.728c-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01c1.279 0 2.238.857 2.238 2.699v3.699z"/></svg></a>
                    <a href="https://github.com/PrabhjotSingh03/"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><g fill="none"><g clipPath="url(#akarIconsGithubFill0)"><path fill="currentColor" fillRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" clipRule="evenodd"/></g><defs><clipPath id="akarIconsGithubFill0"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></g></svg></a>
                    <a href="mailto:prabhjot.sains@gmail.com"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 16 16"><path fill="currentColor" d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM4 4h8c.143 0 .281.031.409.088L8 9.231L3.591 4.088A.982.982 0 0 1 4 4zm-1 7V5l.002-.063l2.932 3.421l-2.9 2.9A.967.967 0 0 1 3 11zm9 1H4c-.088 0-.175-.012-.258-.034L6.588 9.12l1.413 1.648L9.414 9.12l2.846 2.846a.967.967 0 0 1-.258.034zm1-1c0 .088-.012.175-.034.258l-2.9-2.9l2.932-3.421L13 5v6z"/></svg></a>
                    <a href="https://www.instagram.com/prabhjot_singh_sains/?hl=en"><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="2 0 22 22"><path fill="currentColor" d="M13.61 12.243a1.6 1.6 0 1 1-1.56-1.63a1.62 1.62 0 0 1 1.56 1.63"/><path fill="currentColor" d="M14.763 7.233H9.338a2.024 2.024 0 0 0-2.024 2.024v5.547a2.024 2.024 0 0 0 2.024 2.024h5.425a2.024 2.024 0 0 0 2.024-2.024V9.267a2.026 2.026 0 0 0-2.024-2.034m-2.713 7.723a2.703 2.703 0 1 1 2.642-2.703a2.672 2.672 0 0 1-2.642 2.703m2.936-5.405a.496.496 0 0 1-.496-.506a.506.506 0 1 1 1.012 0a.496.496 0 0 1-.557.506z"/><path fill="currentColor" d="M12.05 2a10 10 0 1 0-.1 20a10 10 0 0 0 .1-20m6.073 12.702a3.39 3.39 0 0 1-3.41 3.411H9.389a3.392 3.392 0 0 1-3.411-3.41V9.378a3.39 3.39 0 0 1 3.41-3.411h5.325a3.39 3.39 0 0 1 3.41 3.41z"/></svg></a>
                </div>
                <div className="copyright"><h3>Handcrafted by me &#169; twenty23</h3></div>
                <div className="made__with">
                    <h4>Made with 
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <g fill="none"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/>
                            <path fill="currentColor" d="M12.582 3.489c1.559-1.193 3.396-1.894 4.918-1.015c1.522.878 1.834 2.82 1.58 4.766c-.03.241-.071.489-.121.742c.244.084.48.173.703.266C21.474 9.002 23 10.243 23 12c0 1.757-1.526 2.998-3.338 3.752c-.224.093-.459.182-.703.266c.05.253.09.5.121.742c.254 1.946-.058 3.888-1.58 4.766c-1.521.879-3.36.178-4.918-1.014a11.797 11.797 0 0 1-.582-.477c-.195.17-.389.329-.582.477c-1.558 1.192-3.396 1.893-4.918 1.014c-1.521-.878-1.833-2.82-1.58-4.766a11.8 11.8 0 0 1 .122-.742c-.245-.084-.48-.173-.704-.266C2.526 14.998 1 13.757 1 12c0-1.757 1.526-2.998 3.338-3.752c.224-.093.46-.182.704-.266c-.05-.253-.09-.5-.122-.742c-.253-1.946.059-3.888 1.58-4.766c1.522-.879 3.36-.178 4.918 1.014c.193.148.387.307.582.477c.195-.17.39-.329.582-.476ZM6.98 16.537c-.03.165-.055.326-.076.481c-.233 1.793.206 2.55.597 2.776c.392.226 1.267.228 2.703-.87a9.5 9.5 0 0 0 .379-.307a21.825 21.825 0 0 1-1.391-1.75a21.837 21.837 0 0 1-2.212-.33Zm10.043 0c-.69.14-1.428.252-2.212.33c-.46.64-.925 1.224-1.391 1.75c.127.109.254.21.378.306c1.436 1.099 2.312 1.097 2.703.871c.392-.226.83-.983.597-2.776a9.572 9.572 0 0 0-.075-.481ZM12 9c-.592 0-1.16.018-1.702.051c-.3.453-.6.937-.896 1.45a27.77 27.77 0 0 0-.807 1.5c.242.486.511.986.807 1.499c.296.513.595.996.896 1.45a28.941 28.941 0 0 0 3.405 0c.3-.454.6-.937.895-1.45a27.8 27.8 0 0 0 .808-1.5a27.8 27.8 0 0 0-.808-1.5a27.744 27.744 0 0 0-.895-1.449A28.055 28.055 0 0 0 12 9Zm-6.44.92a9.804 9.804 0 0 0-.454.175C3.436 10.789 3 11.548 3 12c0 .452.437 1.211 2.106 1.905c.145.06.297.119.454.175A21.82 21.82 0 0 1 6.381 12a21.831 21.831 0 0 1-.82-2.08Zm12.88 0a21.827 21.827 0 0 1-.82 2.08c.324.717.598 1.413.82 2.08a9.61 9.61 0 0 0 .454-.175C20.564 13.211 21 12.452 21 12c0-.452-.436-1.21-2.106-1.905a9.513 9.513 0 0 0-.454-.175ZM12 10.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3ZM7.5 4.206c-.391.226-.83.983-.597 2.776c.02.156.046.316.076.481c.689-.14 1.428-.252 2.212-.33a21.75 21.75 0 0 1 1.391-1.75a9.62 9.62 0 0 0-.379-.306C8.767 3.978 7.892 3.98 7.5 4.206Zm9 0c-.391-.226-1.267-.227-2.703.871a9.545 9.545 0 0 0-.378.306c.466.526.932 1.111 1.39 1.75c.784.078 1.524.19 2.213.33a9.58 9.58 0 0 0 .075-.48c.234-1.793-.205-2.551-.597-2.777Z"/>
                            </g>
                        </svg> React
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M23.642 5.43a.364.364 0 0 1 .014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 0 1-.188.326L9.93 23.949a.316.316 0 0 1-.066.027c-.008.002-.016.008-.024.01a.348.348 0 0 1-.192 0c-.011-.002-.02-.008-.03-.012c-.02-.008-.042-.014-.062-.025L.533 18.755a.376.376 0 0 1-.189-.326V2.974c0-.033.005-.066.014-.098c.003-.012.01-.02.014-.032a.369.369 0 0 1 .023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027c.014-.012.027-.024.041-.034H.53L5.043.05a.375.375 0 0 1 .375 0L9.93 2.647h.002c.015.01.027.021.04.033l.038.027c.013.014.02.03.033.045c.008.011.02.021.025.033c.01.02.017.038.024.058c.003.011.01.021.013.032c.01.031.014.064.014.098v9.652l3.76-2.164V5.527c0-.033.004-.066.013-.098c.003-.01.01-.02.013-.032a.487.487 0 0 1 .024-.059c.007-.012.018-.02.025-.033c.012-.015.021-.03.033-.043c.012-.012.025-.02.037-.028c.014-.01.026-.023.041-.032h.001l4.513-2.598a.375.375 0 0 1 .375 0l4.513 2.598c.016.01.027.021.042.031c.012.01.025.018.036.028c.013.014.022.03.034.044c.008.012.019.021.024.033a.3.3 0 0 1 .024.06c.006.01.012.021.015.032zm-.74 5.032V6.179l-1.578.908l-2.182 1.256v4.283zm-4.51 7.75v-4.287l-2.147 1.225l-6.126 3.498v4.325zM1.093 3.624v14.588l8.273 4.761v-4.325l-4.322-2.445l-.002-.003H5.04c-.014-.01-.025-.021-.04-.031c-.011-.01-.024-.018-.035-.027l-.001-.002c-.013-.012-.021-.025-.031-.04c-.01-.011-.021-.022-.028-.036h-.002c-.008-.014-.013-.031-.02-.047c-.006-.016-.014-.027-.018-.043a.49.49 0 0 1-.008-.057c-.002-.014-.006-.027-.006-.041V5.789l-2.18-1.257zM5.23.81L1.47 2.974l3.76 2.164l3.758-2.164zm1.956 13.505l2.182-1.256V3.624l-1.58.91l-2.182 1.255v9.435zm11.581-10.95l-3.76 2.163l3.76 2.163l3.759-2.164zm-.376 4.978L16.21 7.087l-1.58-.907v4.283l2.182 1.256l1.58.908zm-8.65 9.654l5.514-3.148l2.756-1.572l-3.757-2.163l-4.323 2.489l-3.941 2.27z"/>
                            </svg> Laravel, 
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115c-.28-.394-.53-.954-.735-1.44c-.036.495-.055.685-.523 1.184c-.723.566-4.438 3.682-4.74 10.02c-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0 1 11.91 24h.481a28.48 28.48 0 0 1 .51-3.07c.417-.296.604-.463.85-.693a11.342 11.342 0 0 0 3.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695c-.381-.045-.765-1.76-.765-2.405z"/>
                            </svg>MongoDB */}
                    </h4>
                </div>
            </div>
        </div>
    );
}

export default Footer;