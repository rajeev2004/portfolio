import react,{useState,useEffect} from "react";
import './header.css';
function Header(){
    const [menu,isOpen]=useState(false);
    function toggleMenu(){
        isOpen(!menu);
    }
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                isOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <a href="#home">My Portfolio Website</a>
                </div>
                <nav className={`links${menu?"open":""}`}>
                    <a href="#about">About</a>
                    <a href="#skills">Skill Section</a>
                    <a href="#projects">Projects</a>
                    <a href="#contacts">Contacts</a>
                </nav>
                <button className="menu-change" onClick={toggleMenu}>Menu</button>
            </div>
        </header>
    );
}
export default Header;