import { useState } from 'react';
import logo from './../../images/logo.png'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <header>
            <div className="container">
                <div>

                    <img src={logo} alt="" />
                    <nav>
                        <a href="">Home</a>
                        <a href="">About</a>
                        <a href="">Menue</a>
                        <a href="">Events</a>
                        <a href="">Blogs</a>
                    </nav>
                </div>
                <div className="other">
                    <a href="">Order Now</a>
                    <div className="social">
                        <a href="">
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="">
                            <i className="fa-brands fa-x-twitter"></i>
                        </a>
                        <a href="">
                            <i className="fa-brands fa-youtube"></i>
                        </a>
                        <a href="">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;