import React, { useEffect }from 'react'
import load from '../../assets/load.gif'

import { useNavigate } from 'react-router-dom'


export const SurpriseLoading = () => {
  const navigate = useNavigate()

  // Automatically load the surprise
  // I would make sure that this is 
  useEffect(() => {
    setTimeout(() => {
      navigate('/surprise-order/surprise')
    }, 3000)
  }, [])

  return (
    <div className="bg-gray-300 min-h-screen flex items-center justify-center">
      {/* Card Container */}
      <div className="bg-white shadow-2xl p-6 rounded-lg w-600 h-649">
        {/* Some Words */}
        <p className="text-gray-700 mb-4 text-sm text-center">Savor the suspense as we cook up </p>
        <p className="mt-[-22px] text-gray-700 text-sm text-center">a surprise from your favorite flavors!</p>
        <p className="text-gray-700 text-[10px] text-center mb-2">This may take a few moments.</p>

        {/* Image at the center */}
        <div className="flex items-center justify-center mb-4">
          <img src={load} alt="" className="w-40 h-40" />
        </div>
        
      </div>
    </div>
  )
}
