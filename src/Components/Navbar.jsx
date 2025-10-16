import React from 'react';
import { NavLink } from 'react-router';
import logo from '../assets/dubana-logo.png'

const Navbar = () => {
    const navItems = [
        { name: "Home", path: "/" },
        { name: "Reunion", path: "/reunion" },
        { name: "Members", path: "/members" },
        { name: "Be a Member", path: "/beAMember" },
        { name: "Executives", path: "/executives" },
        { name: "Dubana Talk", path: "/dubana-talk" },
        { name: "Articles", path: "/articles" },
        { name: "Activity", path: "/activity" },
        { name: "Gallery", path: "/gallery" },
        { name: "About Us", path: "/about" },
    ];
    return (
        <div className="navbar bg-white px-6 2xl:px-[7%] sticky top-0">
            {/* Drawer for Mobile */}
            <div className="drawer">
                <input id="nav-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex items-center">
                {/* Hamburger button (only on mobile) */}
                <label
                    htmlFor="nav-drawer"
                    className="btn btn-ghost lg:hidden mr-2"
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                    </svg>
                </label>

                {/* Logo */}
                <NavLink to="/" className="flex items-center space-x-2 flex-1">
                    <img
                    src={logo}
                    alt="DUBANA Logo"
                    className="h-12 lg:h-20"
                    />
                </NavLink>

                {/* Desktop Menu */}
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-gray-600">
                    {navItems.map((item, index) => (
                        <li key={index}>
                        <NavLink
                            to={item.path}
                            className={({ isActive }) =>
                            `transition-colors ${isActive ? "text-black font-semibold" : "text-gray-600"}`
                            }
                        >
                            {item.name}
                        </NavLink>
                        </li>
                    ))}
                    </ul>
                </div>

                {/* Login Button */}
                <div className="flex-none">
                    <NavLink to="/login" className="btn btn-primary transition-all hover:btn-secondary rounded-lg">
                    Login
                    </NavLink>
                </div>
                </div>

                {/* Sidebar drawer */}
                <div className="drawer-side z-50">
                <label htmlFor="nav-drawer" className="drawer-overlay"></label>
                <div className="menu p-4 w-64 bg-base-100 text-gray-700 h-screen flex flex-col justify-between">
                    <ul>
                        {navItems.map((item, index) => (
                        <li key={index}>
                            <NavLink
                            to={item.path}
                            className={({ isActive }) =>
                                `transition-colors ${isActive ? "text-black font-semibold" : "text-gray-600"}`
                            }
                            >
                            {item.name}
                            </NavLink>
                        </li>
                        ))}
                    </ul>
                    <li className="mt-4">
                    <NavLink to="/login" className="btn btn-primary transition-all hover:btn-secondary w-full">
                        Login
                    </NavLink>
                    </li>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;