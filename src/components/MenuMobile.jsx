import React from 'react'
import { Context } from '../context';
import { useContext } from 'react';
import { FaSun, FaBars, FaMoon, FaTimes } from 'react-icons/fa'

const MenuMobile = () => {
    const { darkMode,
        setDarkMode,
        manageDarkMode,
        showMenuMobile,
        setShowMenuMobile 
    } = useContext(Context);

    // const handleDarkMode = () => {
    //     setDarkMode(!darkMode);
    // };

    const handleMenu = () => {
        setShowMenuMobile(!showMenuMobile);
    };

    return (
        <div className="">
            <div className="overflow-hidden flex items-end">
                <div className={`flex fixed bottom-0 justify-around w-full items-center p-2 darkModeIsApplied`}>
                    <div className="hoverForHeader">
                        Fuentes
                    </div>
                    <div className="flex">
                        <span className="hoverForHeader mx-2" onClick={manageDarkMode}>
                        {!darkMode ? <FaMoon/> : <FaSun/>}
                        </span>
                        <span className="hoverForHeader mx-2" onClick={handleMenu}>
                            <FaBars />
                        </span>
                    </div>        
                </div>
            </div>
            <div className={`w-full darkModeIsApplied ${showMenuMobile ? 'bottom-1 absolute': 'hidden'}`}>
                <div className="flex z-10 justify-around">
                    <div className="flex flex-col m-3">
                        <span className="my-7">Home</span>
                        <span>About</span>
                    </div>
                    <div className="flex flex-col m-3">
                        <span className="my-7">Skills</span>
                        <span>Services</span>
                    </div>
                    <div className="flex flex-col m-3">
                        <span className="my-7">Portfolio</span>
                        <span>Contact</span>
                    </div>
                </div>
                <div className="flex justify-end mx-3 py-2">
                    <span onClick={handleMenu} className="text-2xl cursor-pointer activeForMobile">
                        <FaTimes />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default MenuMobile
