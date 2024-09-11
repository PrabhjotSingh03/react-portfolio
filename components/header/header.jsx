import './header.css';

function Header() {
    return (
        <div className="header">
            <div className="header-container">
                <div className="header-title">
                    <h1>Cybersecurity Analyst & SOC Analyst & Web Developer</h1>
                </div>
                <div className='header-subtitle'>
                    <h2>Crafting elegant code and designs, infusing simplicity into every pixel while navigating the world of cybersecurity.</h2>
                </div>
                <div className='person'>
                    <div className='person__container'>
                        <div className='person__circle'></div>
                        <img className='person__img' src='/images/my__pic.png' />
                    </div>
                </div>
                <div className='header-name'>
                    <h3>Hey, I&apos;m Prabhjot Singh</h3>
                </div>
                <div className='devices__container'>
                    <img src='/images/header-devices.svg'></img>
                </div>
            </div>
        </div>
    );
}

export default Header;