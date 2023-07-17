import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.png'
import NavLinks from './NavLinks'
import Button from '../Button'
import { useState } from 'react'

function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <nav className="bg-white">
            <div className="flex items-center justify-around font-medium">
                <div className='z-50 p-5 md:w-auto w-full flex justify-between'>
                    <img src={Logo} alt="Logo" className='md:cursor-pointer h-9' />
                    <div className='text-3xl md:hidden cursor-pointer' onClick={()=> setOpen(!open)}>
                        <ion-icon name={ `${open ? 'close' : 'menu'}` } ></ion-icon>
                    </div>
                </div>

                <ul className='hidden md:flex items-center uppercase gap-8'>
                    <li>
                        <Link to='/' className='py-7 px-3 inline-block'>
                            Home
                        </Link>
                    </li>
                    <NavLinks/>
                </ul>
                <div className='hidden md:block'>
                    <Button/>
                </div>

                {/* Mobile menu  */}
                <ul className={`z-49 md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-4 duration-500 ${open ? 'left-0' : 'left-[-100%]'}`}>
                    <li>
                        <Link to='/' className='py-7 px-3 inline-block'>
                            Home
                        </Link>
                    </li>
                    <NavLinks />
                    <div className='py-5'>
                        <Button />
                    </div>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
