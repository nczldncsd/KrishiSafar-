import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const stats = [
    { name: 'Total Farms', value: '12', icon: '🚜', color: 'bg-green-500' },
    { name: 'Active Crops', value: '8', icon: '🌾', color: 'bg-yellow-500' },
    { name: 'Harvest Due', value: '3', icon: '📅', color: 'bg-orange-500' },
    { name: 'Revenue (₹)', value: '2.5L', icon: '💰', color: 'bg-blue-500' },
  ]

  const quickActions = [
    { name: 'Add New Crop', href: '/crops', icon: '🌱', description: 'Plant a new crop' },
    { name: 'Check Weather', href: '/weather', icon: '🌤️', description: 'View 7-day forecast' },
    { name: 'Market Prices', href: '/market', icon: '💹', description: 'Current crop prices' },
    { name: 'Farm Records', href: '/farm', icon: '📊', description: 'View farm analytics' },
  ]

  const recentActivity = [
    { action: 'Planted tomatoes in Field A', time: '2 hours ago', icon: '🍅' },
    { action: 'Harvested wheat from Field B', time: '1 day ago', icon: '🌾' },
    { action: 'Applied fertilizer to corn field', time: '3 days ago', icon: '🌽' },
    { action: 'Sold rice harvest to market', time: '1 week ago', icon: '🍚' },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, Farmer!</h1>
        <p className="mt-2 text-gray-600">Here's what's happening on your farm today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white p-6 rounded-lg card-shadow">
            <div className="flex items-center">
              <div className={`p-3 rounded-full ${stat.color} text-white text-2xl`}>
                {stat.icon}
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-lg card-shadow">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {quickActions.map((action) => (
              <Link
                key={action.name}
                to={action.href}
                className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-green-500 hover:shadow-md transition-all"
              >
                <div className="text-2xl mr-3">{action.icon}</div>
                <div>
                  <p className="font-medium text-gray-900">{action.name}</p>
                  <p className="text-sm text-gray-500">{action.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-lg card-shadow">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                <div className="text-xl mr-3">{activity.icon}</div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Weather Preview */}
      <div className="mt-8 bg-white p-6 rounded-lg card-shadow">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">Today's Weather</h2>
          <Link to="/weather" className="text-green-600 hover:text-green-800 font-medium">
            View Full Forecast →
          </Link>
        </div>
        <div className="flex items-center">
          <div className="text-4xl mr-4">☀️</div>
          <div>
            <p className="text-2xl font-bold text-gray-900">28°C</p>
            <p className="text-gray-600">Sunny, Light breeze</p>
            <p className="text-sm text-gray-500">Perfect weather for fieldwork</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home