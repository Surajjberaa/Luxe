import React, { useState } from 'react'
import {useTheme} from '../contexts/ThemeContext';
import { Link } from 'react-router-dom';

function Navbar() {

    const {theme, toggleTheme} = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        
    }



    return (
        <div>
            <nav className=" top-0 z-100 w-full font-[halimun] ">
                <div className=' flex justify-between items-center w-full h-[70px] p-4 text-black dark:text-white '>
                    <div className='nav-left text-2xl'>
                        <Link to='/'>Luxe</Link>
                    </div>
                    <div className={`nav-right ${isOpen ? '' : 'hidden'} `}>

                    </div>
                    <div className={`nav-middle gap-9 md:flex items-center justify-center text-lg hidden  `}>
                        <Link to='/'>Home</Link>
                        <Link to='/cars'>Cars</Link>
                        <Link to='/experience'>Experience</Link>
                        <Link to='/studio/bmw'>Studio</Link>
                        <Link to='/contact'>Contact</Link>
                        <button onClick={toggleTheme} className='ml-2'>{theme === 'light' ? '🌙' : '☀️'}</button>
                    </div>
                    <div className='nav-right md:flex items-center justify-center text-lg hidden '>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m6 0l-3-3m3 3l-3 3" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    </div>
                    <div className='md:hidden z-10 '>
                        <button onClick={toggleMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />}
                            </svg>
                        </button>
                        
                        </div>
                </div>
            </nav>
            <div className={`nav-middle z-100 gap-9 md:hidden items-center justify-center text-lg ${isOpen ? 'flex' : 'hidden'} flex-col absolute  top-0 left-0 w-full h-screen  backdrop-blur-3xl font-[halimun]`}>
                        <Link onClick={toggleMenu} to='/'>Home</Link>
                        <Link onClick={toggleMenu} to='/cars'>Cars</Link>
                        <Link onClick={toggleMenu} to='/experience'>Experience</Link>
                        <Link onClick={toggleMenu} to='/studio/bmw'>Studio</Link>
                        <Link onClick={toggleMenu} to='/contact'>Contact</Link>
                        <button onClick={toggleTheme}  className='ml-2'>{theme === 'light' ? '🌙' : '☀️'}</button>

                        </div>
        </div>
    );
}

export default Navbar