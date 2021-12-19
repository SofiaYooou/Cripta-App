import React from 'react';
import { NavLink } from "react-router-dom";

const navs = [
    {
    path: '/',
    name: 'Home'
    },
    { 
        path: '/Currency', 
        name:'Валюты' 
    },
    { 
        path: '/Login', 
        name:'Login' 
    }
]

const Nav = () => (
    <nav className='bg-purple-600 text-purple-200
    p-5 shadow'>
            <ul className='flex space-x-4
            justify-end'>
                {navs.map((navItem) => (
                    <li>
                        <NavLink
                            exact to={navItem.path}activeClassName='text-purple-100'>{navItem.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
);

export default Nav;