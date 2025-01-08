import React, { useRef } from 'react';
import { logo } from '../assets';
import { FaBarsStaggered } from "react-icons/fa6";

const Navbar = () => {
    const menuRef = useRef(null);

    const toggleMenu = () => {
        if (menuRef.current) {
            menuRef.current.classList.toggle('translate-x-0');
            menuRef.current.classList.toggle('translate-x-full');
        }
    };

    return (
        <div className="relative">
            <div className="flex px-6 justify-between bg-transparent items-center">
                
                <img src={logo} alt="" className="w-20 -ml-4" />
                <FaBarsStaggered className="text-2xl cursor-pointer" onClick={toggleMenu} />
            </div>

            {/* Slide-in Menu */}
            <div
                ref={menuRef}
                className="fixed top-0 right-0 w-full h-full bg-[#362F2F] text-white translate-x-full transition-transform duration-300 ease-in-out"
            >
                <div className="flex justify-between p-4">
                    <img src={logo} className='w-20 -ml-4' alt="" />
                    <button className="text-3xl font-bold" onClick={toggleMenu}>
                        &times;
                    </button>
                </div>
                <ul className="flex flex-col items-start p-4 space-y-4 font-bold">
                    <li><a href="/" className="hover:text-[#47DC17] transition-2s">HOME</a></li>
                    <li><a href="/about" className="hover:text-[#47DC17] transition-2s">WHO WE ARE</a></li>
                    <li><a href="/branch" className="hover:text-[#47DC17] transition-2s">BRANCHES</a></li>
                    <li><a href="/contact" className="hover:text-[#47DC17] transition-2s">ONLINE GIVING</a></li>
                    <li><a href="/contact" className="hover:text-[#47DC17] transition-2s">MEDIA</a></li>
                    <li><a href="/contact" className="hover:text-[#47DC17] transition-2s">QUICK LINKS</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
