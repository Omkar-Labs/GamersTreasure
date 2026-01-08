import { useRef, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import './Header.css';
import {Link} from 'react-router';
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";


export default function Header() {
    const pages = ['Genre', 'Library', 'Profile'];
    const [searchTerm, setSearchTerm] = useState('');
    const headerRef = useRef(null);

    useGSAP(() => { 
        gsap.from(".animate", {
            y: -100,
            opacity: 0,
            duration: 1,
            delay: 0.5,
            ease: "power2.out",
            stagger: 0.3
        });
    },{scope:headerRef} );
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    }

    return (
        <div className="header" ref={headerRef}> 
            <div className="logo animate" >
                <h1><Link to="/" style = {{textDecoration:"none",color: "#ff4500"}}>Gamers Treasure</Link></h1>
            </div>
            <div className="search-bar animate">
                <label htmlFor="search"><SearchIcon fontSize="1.75rem" /></label>
                <input id="search" placeholder="Search Games" type="text" value={searchTerm} onChange={handleSearchChange} />

            </div>
            <div className="nav-links">
                {pages.map((page) => (
                    <span className="animate"><Link key={page} to={`#${page.toLowerCase()}`}>{page}</Link></span>
                ))}
            </div>
        </div>
    );
}