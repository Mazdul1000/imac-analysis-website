import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className='h-[80px] w-full bg-gray-400'>
            <nav className='flex h-full justify-between w-[90%] mx-auto items-center'>
               <div><h1 onClick={()=>navigate('/')} className='hover:cursor-pointer text-4xl font-bold'>PC GUIDE</h1> </div>  
               <div className='flex'>
                   <CustomLink className="link mr-2 text-[20px] font-bold px-4 py-2" to='/'>Home</CustomLink>
                   <CustomLink className="link mr-2 text-[20px] font-bold px-4 py-2" to='/reviews'>Reviews</CustomLink>
                   <CustomLink className="link mr-2 text-[20px] font-bold px-4 py-2" to='/blogs'>Blogs</CustomLink>
                   <CustomLink className="link mr-2 text-[20px] font-bold px-4 py-2" to='/dashboard'>Dashboard</CustomLink>
                   <CustomLink className="link mr-2 text-[20px] font-bold px-4 py-2" to='/about'>About</CustomLink>
               </div>
            </nav>
           

        </div>
    );
};

export default Header;