import React , {useState}from 'react';
import logo from '../../assets/logo.png'
import './navbar.scss'

const Navbar = () => {
    const [open, setOpen] = useState(false);

       const isOpen = open ? (<button onclick={()=>setOpen(true)}>Open</button>):(<button onclick={()=>setOpen(false)}>Close</button>)
    return (
        <nav className="Navbar">
            {/* SIDE LEFT */}
            <div className="left">
                <img src={logo} alt="logo" className="logo"/>
                <h1 className="title">Code</h1>
            </div>
            {/* SIDE RIGHT */}
            <div className="right">
                <ul className="Navbar--list--items">
                    {isOpen }
                    <li className="item">Home</li>
                    <li className="item">About</li>
                    <li className="item">SoftSkill</li>
                    <li className="item">Projets</li>
                    <li className="item">Blog</li>
                    <li className="item">Contact</li>
                
                </ul>
            </div>
            
        </nav>
    );
};

export default Navbar;