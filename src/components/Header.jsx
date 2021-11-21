import React from 'react'
import { Context } from '../context';
import { useContext } from 'react';
import { FaSun, FaMoon, FaBars } from 'react-icons/fa'

const Header = () => {
    const marginXForLi = 'mx-2'
    const { darkMode, setDarkMode } = useContext(Context);

    const handleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
            <header className={`flex justify-evenly my-6 ${darkMode ? 'bg-black text-white':''}`}>
                <div className="hoverForHeader">
                    Fuentes
                </div>
                <div className="md:hidden">
                    <FaBars />
                </div>
                <ul className="hidden md:flex">
                    <li className={`${marginXForLi} hoverForHeader`}>
                        Home
                    </li>
                    <li className={`${marginXForLi} hoverForHeader`}>
                        About
                    </li>
                    <li className={`${marginXForLi} hoverForHeader`}>
                        Skills
                    </li>
                    <li className={`${marginXForLi} hoverForHeader`}>
                        Services
                    </li>
                    <li className={`${marginXForLi} hoverForHeader`}>
                        Portfolio
                    </li>
                    <li className={`${marginXForLi} hoverForHeader`}>
                        Contact
                    </li>
                    <li className={`${marginXForLi} hoverForHeader m-auto`} onClick={handleDarkMode}>
                        {!darkMode ? <FaMoon/> : <FaSun/>}
                    </li>
                </ul>
            </header>
    )
}

export default Header;