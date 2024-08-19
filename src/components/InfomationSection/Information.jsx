import React from 'react'
import sampleIcon from '../../assets/images/d3c34868ad7f58bb5631a932f8173b87.png'


const features = [
  { id: 1, icon: sampleIcon, text: 'Saves on power consumption & related costs' },
  { id: 2, icon: sampleIcon, text: 'Lowers downtimes' },
  { id: 3, icon: sampleIcon, text: 'Detects power thefts' },
  { id: 4, icon: sampleIcon, text: 'Ensures smart monitoring and control of the street light infrastructure.' },
  { id: 5, icon: sampleIcon, text: 'Ensures real-time actionable analytics on power failures, lamp malfunctions, voltage failures, etc.' },
  { id: 6, icon: sampleIcon, text: 'Ensures security in the neighborhood' },
];

function Information() {
  return (
    <div className="flex flex-col items-center justify-center py-6 px-4 bg-white lg:p-14">
      <h2 className="text-center text-4xl font-normal mb-8" style={{ fontFamily: 'Inter' }}>
        The platform assists city managers on multiple fronts
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl">
        {features.map((feature) => (
          <div 
            key={feature.id}
            className="flex flex-col items-center justify-center text-center p-4 border border-gray-200 rounded-lg shadow-sm"
          >
            <img src={feature.icon} alt="Icon" className="mb-4 w-12 h-12" />
            <p className="text-black font-normal text-xl" style={{ fontFamily: 'Inter' }}>{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Information