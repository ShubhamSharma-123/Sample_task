import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import street_light_controler from '../../assets/images/street_light_controler.png';
import gateway_png from '../../assets/images/gateway_png.png'
import cloud_based_management from '../../assets/images/cloud_based management.png'
import users_png from '../../assets/images/users_png.png'
import evaluation_png from '../../assets/images/evaluation_png.png'

function Main() {
  return (

    <div className=" flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-gray-50 p-4 lg:p-14 " >
      {/* Header Section */}
      <div className='flex flex-col items-center lg:w-[1000px] lg:px-4 lg:items-start' >
        <div className=' lg:w-12 lg:h-10  lg:px-4 lg:flex lg:items-center mb-5' style={{backgroundImage:"linear-gradient(to left,rgba(255, 255, 255, 0), rgba(54, 97, 255, 1))"}}>
          <div className=" text-[#00386B] font-semibold text-lg " >Ecosystem</div>
        </div>
        <p className="text-2xl font-normal text-center mb-8 lg:text-4xl " style={{ fontFamily: 'Inter' }}>
          How does a smart street light ecosystem work?
        </p>
      </div>

      {/* Main Grid */}
      <div className=" flex flex-col items-center gap-7 lg:relative lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-8  lg:max-w-5xl lg:h-[520px]" >
        {/* Top row (Street Light Controller, Gateway, Cloud-based Management System) */}
        <div className="space-y-4 flex flex-col items-center" >
          <div className="flex gap-8">
            <div className='border rounded-2xl border-[#3661FF] outline-1 outline-[#3661FF] outline-dashed outline-offset-8 h-[70px] w-[70px] flex justify-center items-center '>
              <img className='h-[50px] w-[50px] block' src={street_light_controler} alt="street light" />
            </div>
            <div className='border rounded-2xl border-[#3661FF] outline-1 outline-[#3661FF] outline-dashed outline-offset-8 h-[70px] w-[70px] flex justify-center items-center'>
              <img className='h-[50px] w-[50px] block ' src={street_light_controler} alt="street light" />
            </div>
          </div>
          <div className='flex flex-col items-center p-2' >
            <p className="font-semibold">Street Light Controller</p>
            <p className="text-gray-600 text-center">
              Activates/deactivates in response to motion/light sensing and controls the brightness of the street lamp.
            </p>
          </div>
        </div>

        {/* Dotted Line Connections */}
        <div className="hidden lg:block lg:absolute lg:left-[255px] lg:right-[570px] lg:top-[62px]  lg:border-t-2 lg:border-dashed lg:border-gray-300  "></div>

        <div className="space-y-4 flex  flex-col items-center" >
          <div className="flex justify-center border rounded-2xl border-[#EAEAEA] outline-1 outline-[#c4c2c2] outline-dashed outline-offset-[15px] bg-white h-[90px] w-[90px] items-center">
            <img className='h-[70px] w-[70px] block ' src={gateway_png} alt="gateway" />
          </div>

          <div className='flex flex-col items-center p-2'>
            <p className="font-semibold">Gateway</p>
            <p className="text-gray-600 text-center ">
              Employed for interfacing between a Controller and the Lighting Management Software.
            </p>
          </div>
        </div>

        {/* Dotted Line Connections */}
        <div className=" hidden lg:block lg:absolute lg:left-[570px] lg:right-[220px] lg:top-[62px] lg:border-t-2 lg:border-dashed lg:border-gray-300"></div>

        <div className="space-y-4 flex flex-col items-center">
          <div className="flex justify-center border rounded-2xl border-[#EAEAEA] outline-1 outline-[#c4c2c2] outline-dashed outline-offset-[15px] bg-white h-[90px] w-[90px] items-center">
            <img className='h-[70px] w-[70px] block ' src={cloud_based_management} alt="cloud" />
          </div>
          <div className='flex flex-col items-center p-2'>
            <p className="font-semibold">Cloud-based Management System</p>
            <p className="text-gray-600 text-center">
              Collects information from multiple gateways.
            </p>
          </div>
        </div>

        {/* Vertical Dotted Line (Connecting Users and Gateway) */}
        <div className="hidden lg:block lg:absolute lg:inset-x-1/2 lg:top-[222px] lg:h-[35px] lg:border-l-2 lg:border-dashed lg:border-gray-300"></div>
        {/* Dotted Line Connections */}
        <div className=" hidden lg:block lg:absolute lg:left-[360px] lg:right-[325px] lg:bottom-0 lg:h-3/6 lg:border-t-2 lg:border-dashed lg:border-gray-300"></div>
        {/* Vertical Dotted Line (Connecting Users and Gateway) */}
        <div className="hidden lg:block lg:absolute lg:left-[360px]  lg:top-[259px] lg:bottom-[234px] lg:border-l-2 lg:border-dashed lg:border-gray-300"></div>
        {/* Vertical Dotted Line (Connecting Users and Gateway) */}
        <div className="hidden lg:block lg:absolute lg:right-[325px]  lg:top-[259px] lg:bottom-[234px] lg:border-l-2 lg:border-dashed lg:border-gray-300"></div>

        {/* Bottom row (Users, Evaluation) */}
        <div className="flex flex-col items-center  lg:space-y-4  lg:absolute lg:bottom-0 lg:left-[200px]">
          <div className="flex justify-center border rounded-2xl border-[#EAEAEA] outline-1 outline-[#c4c2c2] outline-dashed outline-offset-[15px] bg-white h-[90px] w-[90px] items-center">
            <img className='h-[70px] w-[70px] block ' src={users_png} alt="user" />
          </div>
          <div className='flex flex-col items-center p-2'>
            <p className="font-semibold">Users</p>
            <p className="text-gray-600 text-center lg:w-[300px]">
              Data from the cloud is used to monitor and control street lights by the System Managers.
            </p>
          </div>
          {/* Dotted Line Connections */}
          <div className=" hidden absolute left-0 right-0 bottom-0 h-0.5 border-t-2 border-dashed border-gray-300"></div>
        </div>

        <div className="flex flex-col items-center  space-y-4 lg:absolute lg:bottom-6 lg:right-[160px]" >
          <div className="flex justify-center border rounded-2xl border-[#EAEAEA] outline-1 outline-[#c4c2c2] outline-dashed outline-offset-[15px] bg-white h-[90px] w-[90px] items-center">
            <img className='h-[70px] w-[70px] block ' src={evaluation_png} alt="evaluation" />
          </div>
          <div className='flex flex-col items-center p-2'>
            <p className="font-semibold">Evaluation</p>
            <p className="text-gray-600 text-center lg:w-[300px]" >
              Gathered insights are used to evaluate the performance of the lighting systems.
            </p>
          </div>
        </div>
      </div>


    </div>

  )
}

export default Main