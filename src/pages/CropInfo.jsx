import React, { useState } from 'react'

const CropInfo = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const cropCategories = [
    { id: 'all', name: 'All Crops', icon: '🌾' },
    { id: 'grains', name: 'Grains', icon: '🌾' },
    { id: 'vegetables', name: 'Vegetables', icon: '🥕' },
    { id: 'fruits', name: 'Fruits', icon: '🍎' },
    { id: 'legumes', name: 'Legumes', icon: '🫘' },
  ]

  const crops = [
    {
      id: 1,
      name: 'Rice',
      category: 'grains',
      season: 'Kharif',
      plantingTime: 'June - July',
      harvestTime: 'October - November',
      waterRequirement: 'High',
      soilType: 'Clay, Loam',
      yield: '2-3 tons/acre',
      marketPrice: '₹2,200/quintal',
      image: '🍚',
      description: 'Staple food crop, requires flooded fields'
    },
    {
      id: 2,
      name: 'Wheat',
      category: 'grains',
      season: 'Rabi',
      plantingTime: 'November - December',
      harvestTime: 'March - April',
      waterRequirement: 'Medium',
      soilType: 'Loam, Clay loam',
      yield: '2.5-4 tons/acre',
      marketPrice: '₹2,400/quintal',
      image: '🌾',
      description: 'Major cereal crop for making bread and flour'
    },
    {
      id: 3,
      name: 'Tomato',
      category: 'vegetables',
      season: 'All season',
      plantingTime: 'Year round',
      harvestTime: '75-90 days',
      waterRequirement: 'Medium',
      soilType: 'Well-drained loam',
      yield: '15-20 tons/acre',
      marketPrice: '₹25/kg',
      image: '🍅',
      description: 'High value vegetable crop with good market demand'
    },
    {
      id: 4,
      name: 'Cotton',
      category: 'cash',
      season: 'Kharif',
      plantingTime: 'April - June',
      harvestTime: 'October - January',
      waterRequirement: 'Medium',
      soilType: 'Black cotton soil',
      yield: '300-500 kg/acre',
      marketPrice: '₹6,500/quintal',
      image: '🌸',
      description: 'Important cash crop for textile industry'
    },
    {
      id: 5,
      name: 'Sugarcane',
      category: 'cash',
      season: 'Annual',
      plantingTime: 'February - March',
      harvestTime: '12-18 months',
      waterRequirement: 'High',
      soilType: 'Heavy loam',
      yield: '40-60 tons/acre',
      marketPrice: '₹320/quintal',
      image: '🎋',
      description: 'Long duration crop used for sugar production'
    },
    {
      id: 6,
      name: 'Onion',
      category: 'vegetables',
      season: 'Rabi',
      plantingTime: 'October - November',
      harvestTime: 'March - April',
      waterRequirement: 'Medium',
      soilType: 'Well-drained sandy loam',
      yield: '8-12 tons/acre',
      marketPrice: '₹30/kg',
      image: '🧅',
      description: 'Essential vegetable with good storage life'
    }
  ]

  const filteredCrops = selectedCategory === 'all' 
    ? crops 
    : crops.filter(crop => crop.category === selectedCategory)

  const getSeasonColor = (season) => {
    switch (season) {
      case 'Kharif':
        return 'bg-green-100 text-green-800'
      case 'Rabi':
        return 'bg-blue-100 text-blue-800'
      case 'All season':
      case 'Annual':
        return 'bg-purple-100 text-purple-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getWaterColor = (requirement) => {
    switch (requirement) {
      case 'High':
        return 'bg-blue-100 text-blue-800'
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800'
      case 'Low':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Crop Information</h1>
        <p className="mt-2 text-gray-600">Detailed information about different crops, seasons, and cultivation practices</p>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-4">
          {cropCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Crop Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCrops.map((crop) => (
          <div key={crop.id} className="bg-white rounded-lg card-shadow overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <span className="text-3xl mr-3">{crop.image}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{crop.name}</h3>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getSeasonColor(crop.season)}`}>
                      {crop.season}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-4">{crop.description}</p>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">Planting Time:</span>
                  <span className="text-sm font-medium">{crop.plantingTime}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">Harvest Time:</span>
                  <span className="text-sm font-medium">{crop.harvestTime}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">Water Need:</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getWaterColor(crop.waterRequirement)}`}>
                    {crop.waterRequirement}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">Soil Type:</span>
                  <span className="text-sm font-medium">{crop.soilType}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">Expected Yield:</span>
                  <span className="text-sm font-medium text-green-600">{crop.yield}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">Market Price:</span>
                  <span className="text-sm font-bold text-green-600">{crop.marketPrice}</span>
                </div>
              </div>

              <div className="mt-6 flex space-x-2">
                <button className="flex-1 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors text-sm">
                  Plant This Crop
                </button>
                <button className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors text-sm">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Information */}
      <div className="mt-12 bg-white p-6 rounded-lg card-shadow">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Seasonal Crop Calendar</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">🌱</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Kharif Season</h3>
            <p className="text-gray-600 text-sm">June to October - Monsoon crops like rice, cotton, sugarcane</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">❄️</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Rabi Season</h3>
            <p className="text-gray-600 text-sm">November to April - Winter crops like wheat, barley, peas</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">☀️</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Zaid Season</h3>
            <p className="text-gray-600 text-sm">March to June - Summer crops like watermelon, fodder crops</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CropInfo