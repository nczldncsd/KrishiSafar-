import React, { useState } from 'react'

const Market = () => {
  const [selectedMarket, setSelectedMarket] = useState('all')
  const [priceFilter, setPriceFilter] = useState('all')

  const markets = [
    { id: 'all', name: 'All Markets' },
    { id: 'local', name: 'Local Market' },
    { id: 'wholesale', name: 'Wholesale Market' },
    { id: 'online', name: 'Online Platforms' },
  ]

  const marketPrices = [
    {
      id: 1,
      crop: 'Rice',
      variety: 'Basmati',
      currentPrice: 2200,
      previousPrice: 2150,
      unit: 'quintal',
      market: 'wholesale',
      demand: 'High',
      quality: 'Premium',
      icon: '🍚',
      trend: 'up'
    },
    {
      id: 2,
      crop: 'Wheat',
      variety: 'Durum',
      currentPrice: 2400,
      previousPrice: 2450,
      unit: 'quintal',
      market: 'wholesale',
      demand: 'Medium',
      quality: 'Good',
      icon: '🌾',
      trend: 'down'
    },
    {
      id: 3,
      crop: 'Tomato',
      variety: 'Hybrid',
      currentPrice: 25,
      previousPrice: 22,
      unit: 'kg',
      market: 'local',
      demand: 'High',
      quality: 'Fresh',
      icon: '🍅',
      trend: 'up'
    },
    {
      id: 4,
      crop: 'Onion',
      variety: 'Red',
      currentPrice: 30,
      previousPrice: 35,
      unit: 'kg',
      market: 'local',
      demand: 'Medium',
      quality: 'Good',
      icon: '🧅',
      trend: 'down'
    },
    {
      id: 5,
      crop: 'Cotton',
      variety: 'Bt Cotton',
      currentPrice: 6500,
      previousPrice: 6200,
      unit: 'quintal',
      market: 'wholesale',
      demand: 'High',
      quality: 'Premium',
      icon: '🌸',
      trend: 'up'
    },
    {
      id: 6,
      crop: 'Sugarcane',
      variety: 'Co-86032',
      currentPrice: 320,
      previousPrice: 315,
      unit: 'quintal',
      market: 'wholesale',
      demand: 'Medium',
      quality: 'Good',
      icon: '🎋',
      trend: 'up'
    },
    {
      id: 7,
      crop: 'Potato',
      variety: 'Kufri Jyoti',
      currentPrice: 18,
      previousPrice: 20,
      unit: 'kg',
      market: 'local',
      demand: 'High',
      quality: 'Fresh',
      icon: '🥔',
      trend: 'down'
    },
    {
      id: 8,
      crop: 'Maize',
      variety: 'Hybrid',
      currentPrice: 1800,
      previousPrice: 1750,
      unit: 'quintal',
      market: 'wholesale',
      demand: 'Medium',
      quality: 'Good',
      icon: '🌽',
      trend: 'up'
    }
  ]

  const filteredPrices = marketPrices.filter(item => {
    const marketMatch = selectedMarket === 'all' || item.market === selectedMarket
    let priceMatch = true
    
    if (priceFilter === 'rising') {
      priceMatch = item.trend === 'up'
    } else if (priceFilter === 'falling') {
      priceMatch = item.trend === 'down'
    }
    
    return marketMatch && priceMatch
  })

  const getTrendIcon = (trend) => {
    return trend === 'up' ? '📈' : '📉'
  }

  const getTrendColor = (trend) => {
    return trend === 'up' ? 'text-green-600' : 'text-red-600'
  }

  const getDemandColor = (demand) => {
    switch (demand) {
      case 'High':
        return 'bg-green-100 text-green-800'
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800'
      case 'Low':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const calculatePriceChange = (current, previous) => {
    const change = current - previous
    const percentage = ((change / previous) * 100).toFixed(1)
    return { change, percentage }
  }

  const topGainers = marketPrices
    .filter(item => item.trend === 'up')
    .sort((a, b) => {
      const aChange = ((a.currentPrice - a.previousPrice) / a.previousPrice) * 100
      const bChange = ((b.currentPrice - b.previousPrice) / b.previousPrice) * 100
      return bChange - aChange
    })
    .slice(0, 3)

  const topLosers = marketPrices
    .filter(item => item.trend === 'down')
    .sort((a, b) => {
      const aChange = ((a.previousPrice - a.currentPrice) / a.previousPrice) * 100
      const bChange = ((b.previousPrice - b.currentPrice) / b.previousPrice) * 100
      return bChange - aChange
    })
    .slice(0, 3)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Market Prices</h1>
        <p className="mt-2 text-gray-600">Real-time market prices and trends for agricultural commodities</p>
      </div>

      {/* Market Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg card-shadow">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Gainers</h3>
          <div className="space-y-3">
            {topGainers.map((item) => {
              const { percentage } = calculatePriceChange(item.currentPrice, item.previousPrice)
              return (
                <div key={item.id} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-lg mr-2">{item.icon}</span>
                    <span className="text-sm font-medium">{item.crop}</span>
                  </div>
                  <span className="text-green-600 text-sm font-bold">+{percentage}%</span>
                </div>
              )
            })}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg card-shadow">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Losers</h3>
          <div className="space-y-3">
            {topLosers.map((item) => {
              const { percentage } = calculatePriceChange(item.currentPrice, item.previousPrice)
              return (
                <div key={item.id} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-lg mr-2">{item.icon}</span>
                    <span className="text-sm font-medium">{item.crop}</span>
                  </div>
                  <span className="text-red-600 text-sm font-bold">{percentage}%</span>
                </div>
              )
            })}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg card-shadow">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Market Summary</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-500">Total Commodities</span>
              <span className="font-semibold">{marketPrices.length}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Price Rising</span>
              <span className="text-green-600 font-semibold">{marketPrices.filter(p => p.trend === 'up').length}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Price Falling</span>
              <span className="text-red-600 font-semibold">{marketPrices.filter(p => p.trend === 'down').length}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-lg card-shadow mb-8">
        <div className="flex flex-wrap gap-4 items-center">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Market Type</label>
            <select
              value={selectedMarket}
              onChange={(e) => setSelectedMarket(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {markets.map((market) => (
                <option key={market.id} value={market.id}>
                  {market.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Price Trend</label>
            <select
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="all">All</option>
              <option value="rising">Rising Prices</option>
              <option value="falling">Falling Prices</option>
            </select>
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">&nbsp;</label>
            <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
              📊 View Detailed Analytics
            </button>
          </div>
        </div>
      </div>

      {/* Price Table */}
      <div className="bg-white rounded-lg card-shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Current Market Prices</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Crop</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Variety</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Change</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Demand</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quality</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Market</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredPrices.map((item) => {
                const { change, percentage } = calculatePriceChange(item.currentPrice, item.previousPrice)
                return (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{item.icon}</span>
                        <span className="text-sm font-medium text-gray-900">{item.crop}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.variety}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-bold text-gray-900">₹{item.currentPrice.toLocaleString()}</div>
                      <div className="text-xs text-gray-500">per {item.unit}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className={`flex items-center text-sm font-medium ${getTrendColor(item.trend)}`}>
                        <span className="mr-1">{getTrendIcon(item.trend)}</span>
                        <span>{item.trend === 'up' ? '+' : ''}₹{Math.abs(change)}</span>
                        <span className="ml-1">({item.trend === 'up' ? '+' : ''}{percentage}%)</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDemandColor(item.demand)}`}>
                        {item.demand}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.quality}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">{item.market}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-green-600 hover:text-green-900 mr-3">Sell</button>
                      <button className="text-blue-600 hover:text-blue-900">Watch</button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Market Tips */}
      <div className="mt-8 bg-white p-6 rounded-lg card-shadow">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Market Tips & Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-2">💡 Best Time to Sell</h3>
            <p className="text-green-700 text-sm">Cotton prices are trending upward. Consider selling your cotton harvest now for maximum profit.</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">📊 Market Analysis</h3>
            <p className="text-blue-700 text-sm">Vegetable prices are volatile due to seasonal changes. Monitor daily for optimal selling opportunities.</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-semibold text-yellow-800 mb-2">🎯 Future Contracts</h3>
            <p className="text-yellow-700 text-sm">Consider forward contracts for wheat to lock in favorable prices for next season's harvest.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Market