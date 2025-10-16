import React from "react";
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import logo from '../assets/footer-logo.png'

const Footer = () => {
    return (
    <footer className="bg-primary text-white py-10 px-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between gap-8">
            {/* Logo + About */}
            <div className="flex-1">
                <img src={logo} alt="Dubana Logo" className="h-20 mb-4" />
                <p className="text-sm leading-relaxed max-w-2xl">
                    Connecting Innovation, Culture, and Community – Uniting Bangladeshi-American
                    tech professionals to foster creativity, celebrate our heritage, and
                    build meaningful connections that drive personal and professional growth.
                </p>
            </div>

            {/* Social Media */}
            <div className="flex flex-col space-y-4">
                <h3 className="font-semibold">Social Media</h3>
                <div className="flex space-x-3">
                    <a href="#" className="p-2 border rounded hover:bg-white hover:text-blue-900 transition">
                    <FaFacebookF />
                    </a>
                    <a href="#" className="p-2 border rounded hover:bg-white hover:text-blue-900 transition">
                    <FaLinkedinIn />
                    </a>
                    <a href="#" className="p-2 border rounded hover:bg-white hover:text-blue-900 transition">
                    <FaYoutube />
                    </a>
                    <a href="#" className="p-2 border rounded hover:bg-white hover:text-blue-900 transition">
                    <FaTwitter />
                    </a>
                </div>
            </div>
        </div>

        <div className="container mx-auto mt-10">
            {/* Contact Info */}
            <div className="flex flex-col md:flex-row md:items-center justify-around gap-2">
                <div className="flex items-center space-x-2">
                    <FaPhoneAlt />
                    <span>929-301-6028</span>
                </div>
                <div className="flex items-center space-x-2">
                    <FaEnvelope />
                    <span>info@dubana.com</span>
                </div>
                <div className="flex items-center space-x-2">
                    <FaMapMarkerAlt />
                    <span>625W 57th St, New York, NY 10019</span>
                </div>
            </div>
            <div className="divider divider-accent m-0"></div>
            {/* Divider */}
            <div className="pt-4 text-center text-sm">
                © 2025 Dubana. All Rights Reserved. Designed & Developed by{" "}
                <span className="font-semibold">Wyth Myth</span>
            </div>
        </div>
    </footer>
    );
};

export default Footer;
