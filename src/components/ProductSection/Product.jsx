import React from 'react'
import { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import light from '../../assets/images/lights.png';
import check from '../../assets/images/icon_png.png'


const products = [
    {
        id: 1,
        title: 'Centralized Control & Monitoring System',
        description: 'Designed indigenously for street lighting projects, the CCMS offers a complete feeder panel for a group of 30-50 street lights.',
        image: light, // Replace with actual image URL
        link: '#'
    },
    {
        id: 2,
        title: 'NEMA-Mounted VOLC 1160',
        description: 'Another product description goes here.',
        image: light, // Replace with actual image URL
        link: '#'
    },
    {
        id: 3,
        title: 'Retrofit Street Light Controller VOLC 2160',
        description: 'Another product description goes here.',
        image: light, // Replace with actual image URL
        link: '#'
    },
    {
        id: 4,
        title: 'Retrofit Street Light Controller VOLC 2180',
        description: 'Another product description goes here.',
        image: light, // Replace with actual image URL
        link: '#'
    },
    {
        id: 5,
        title: 'Retrofit Street Light Controller VOLC 4180',
        description: 'Another product description goes here.',
        image: light, // Replace with actual image URL
        link: '#'
    }

];

function Product() {

    const [activeProduct, setActiveProduct] = useState(0);

    const handlePrev = () => {
        setActiveProduct((prevProduct) =>
            prevProduct === 0 ? products.length - 1 : prevProduct - 1
        );
    };

    const handleNext = () => {
        setActiveProduct((prevProduct) =>
            prevProduct === products.length - 1 ? 0 : prevProduct + 1
        );
    };

    return (
        <div className="bg-gradient-to-tl from-gray-50 to-blue-200 p-4 flex flex-col items-center lg:p-14" >
            {/* Header Section */}
            <div className='flex flex-col items-center  lg:w-[1100px] lg:items-start' >
                <div className='flex flex-col  md:w-full items-center lg:w-[700px]  lg:items-start mb-5'>
                    <div className=' lg:w-12 lg:h-10  lg:px-4 lg:flex lg:items-center mb-5' style={{ backgroundImage: "linear-gradient(to left,rgba(255, 255, 255, 0), rgba(54, 97, 255, 1))" }}>
                        <h3 className=" text-[#00386B] font-semibold text-lg ">Products</h3>
                    </div>
                    <div className='flex flex-col items-center ' >
                        <div className='text-center lg:text-start ' >
                            <span className="font-sans text-3xl lg:text-4xl  font-bold text-black">
                                Cutting-edge hardware,
                            </span>
                            <span className=" font-sans  text-black text-2xl font-normal  mb-8 lg:text-4xl ">
                                offerings helping cities optimize resources and achieve smart development goals
                            </span>
                        </div>
                    </div>
                </div>

                {/* Tab Navigation */}
                <div className="flex space-x-4 mt-6 mb-8 flex-wrap gap-4" >
                    {products.map((product, index) => (
                        <div >
                            <button
                                key={product.id}
                                onClick={() => setActiveProduct(index)}
                                className={`px-4 py-2 border ${activeProduct === index ? ' custom-gradient custom-border-gradient text-[#00386B]' : ' custom-border-gradient1 text-gray-700'} hover:bg-blue-500 hover:text-white`}
                            >
                                {product.title}
                            </button>
                        </div>
                    ))}
                </div>

                <div style={{backgroundImage: "linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(225, 244, 255, 1))" }} className="flex flex-col lg:flex-row items-center lg:items-center  space-y-8 lg:space-y-0 lg:space-x-8 w-full">

                    {/* Image Section */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                        <img
                            src={products[activeProduct].image}
                            alt="Product"
                            className="w-full h-64 lg:h-80 object-cover shadow-lg "
                        />
                    </div>

                    {/* Text Section */}
                    <div className="flex flex-col items-center lg:items-start space-y-4 lg:w-[333px] " >
                        <p className=' text-[#818181]'>Products {activeProduct+1}/5</p>
                        <h3 className="text-2xl font-semibold text-center lg:text-left ">{products[activeProduct].title}</h3>
                        <p className="text-gray-600 text-center lg:text-left">{products[activeProduct].description}</p>
                        <div className='flex gap-1 items-center'>
                            <a href={products[activeProduct].link} className="text-blue-600 font-bold">Know More </a>
                            <img src={check} alt="" />
                        </div>
                        {/* Navigation Arrows */}
                        
                    </div>
                    <div className="flex   lg:relative lg:bottom-[-140px] lg:left-[-435px]">
                            <button
                                onClick={handlePrev}
                                className="px-3 py-2 border  hover:bg-gray-200"
                            >
                                <i className="fas fa-chevron-left"></i>
                            </button>
                            <button
                                onClick={handleNext}
                                className="px-3 py-2 border  hover:bg-gray-200"
                            >
                                <i className="fas fa-chevron-right"></i>
                            </button>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Product;