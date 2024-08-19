import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure FontAwesome is loaded
import logo from '../../assets/images/smart lights_logo.svg'
import footerImg from '../../assets/images/Footer.png' 

function Footer() {
    return (
        <footer className="bg-black text-white py-14  bg-cover bg-center " style={{backgroundImage:`url(${footerImg})`}} >
            <div className="container mx-auto px-2  flex flex-col gap-20 items-center justify-center lg:w-[1100px] lg:items-start" >
                {/* Top Section */}
                <div className="w-full flex flex-col md:flex-row items-center justify-between">
                    {/* Logo Section */}
                    <div className="flex items-center space-x-2">
                        {/* Replace with your logo */}
                        <img src={logo} alt="logo" />

                    </div>

                    {/* Navigation Links */}
                    <div className="flex space-x-12 mt-4 md:mt-0">
                        <a href="#" className="hover:text-blue-500">Product</a>
                        <a href="#" className="hover:text-blue-500">Software Services</a>
                        <a href="#" className="hover:text-blue-500">Follow Us</a>
                    </div>
                </div>

               

                {/* Footer Links */}
                 
                <div className="flex flex-col space-x-6 text-sm lg:space-x-0" >
                {/* Divider Line */}
                <div className=" min-w-[300px] lg:w-[660px] border-t border-gray-400 my-6"></div>
                <div className='flex gap-2 lg:gap-5'>
                    <a href="#" className="hover:text-blue-500">Privacy Policy</a>
                    <span>|</span>
                    <a href="#" className="hover:text-blue-500">Terms & Conditions</a>
                    <span>|</span>
                    <a href="#" className="hover:text-blue-500">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer