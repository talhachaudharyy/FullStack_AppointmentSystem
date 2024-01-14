import React from 'react'
import icon1 from '../assets/feature-icon1.png'
import icon2 from '../assets/feature-icon2.png'
import icon3 from '../assets/feature-icon3.png'
import icon4 from '../assets/feature-icon4.png'

const FeatureSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-sm font-bold text-blue-600">ASTERST SOLUTION</h2>
        <h1 className="text-4xl font-bold text-blue-950 mt-5 mb-12">What special in Medicare</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 sm:px-5 lg:grid-cols-4 gap-8">
          {/* Feature Box 1 */}
          <div className="bg-blue-50 rounded-lg p-6 hover:shadow-gray-500 transition-shadow shadow-md">
          <img
                src={icon1}
                alt='icon1'
                className="w-17 h-17 pt-6 mx-auto mb-4"
              />
            <h3 className="text-xl font-semibold mb-2">Fastest Ambulance</h3>
            <p className="text-gray-700 pl-5 pr-5 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, asperiores?</p>
          </div>

          {/* Feature Box 2 */}
          <div className="bg-white rounded-lg p-6 shadow-md">
          <img
                src={icon2}
                alt='icon2'
                className="w-17 h-17 pt-6 mx-auto mb-4"/>

            <h3 className="text-xl font-semibold mb-2">Newest Equipment</h3>
            <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, numquam?</p>
          </div>

          {/* Feature Box 3 */}
          <div className="bg-blue-50 rounded-lg p-6 shadow-md">
            <img
                src={icon3}
                alt='icon3'
                className="w-17 h-17 pt-6 mx-auto mb-4"/>
            <h3 className="text-xl font-semibold mb-2">Profesional Doctor</h3>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, iure.</p>
          </div>

          {/* Feature Box 4 */}
          <div className="bg-white rounded-lg p-6 shadow-md">
          <img
                src={icon4}
                alt='icon4'
                className="w-17 h-17 pt-6 mx-auto mb-4"
              />
            <h3 className="text-xl font-semibold mb-2">Best Service</h3>
            <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, odio.</p>
          </div>
        </div>
      </div>
    </section>
 






  )
}

export default FeatureSection
