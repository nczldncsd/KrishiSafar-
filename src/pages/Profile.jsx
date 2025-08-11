import React, { useState } from 'react'

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile')
  const [isEditing, setIsEditing] = useState(false)

  const [profileData, setProfileData] = useState({
    name: 'Rajesh Kumar',
    email: 'rajesh.kumar@example.com',
    phone: '+91 98765 43210',
    location: 'Punjab, India',
    farmName: 'Kumar Organic Farm',
    farmSize: '25 acres',
    experienceYears: '15',
    primaryCrops: ['Wheat', 'Rice', 'Cotton'],
    farmingType: 'Organic',
    languages: ['Hindi', 'Punjabi', 'English']
  })

  const farmStats = {
    totalFields: 8,
    activeCrops: 5,
    totalRevenue: '12.5L',
    seasonsCompleted: 30,
    averageYield: '85%',
    certifications: ['Organic Certified', 'Good Agricultural Practices']
  }

  const achievements = [
    { title: 'Best Organic Farmer 2023', description: 'Awarded by State Agricultural Department', icon: '🏆', date: '2023' },
    { title: 'High Yield Champion', description: 'Achieved 120% yield in wheat crop', icon: '🌾', date: '2022' },
    { title: 'Sustainable Farming Award', description: 'Recognized for eco-friendly practices', icon: '🌱', date: '2022' },
    { title: 'Technology Adopter', description: 'Early adopter of smart farming techniques', icon: '📱', date: '2021' }
  ]

  const recentTransactions = [
    { id: 1, type: 'Sale', crop: 'Wheat', quantity: '50 quintals', amount: '₹1,20,000', date: '2024-02-10', status: 'Completed' },
    { id: 2, type: 'Purchase', item: 'Organic Fertilizer', quantity: '20 bags', amount: '₹15,000', date: '2024-02-08', status: 'Completed' },
    { id: 3, type: 'Sale', crop: 'Rice', quantity: '30 quintals', amount: '₹66,000', date: '2024-01-25', status: 'Completed' },
    { id: 4, type: 'Purchase', item: 'Seeds', quantity: '5 kg', amount: '₹2,500', date: '2024-01-20', status: 'Completed' }
  ]

  const handleInputChange = (field, value) => {
    setProfileData(prev => ({ ...prev, [field]: value }))
  }

  const handleSave = () => {
    setIsEditing(false)
    // Here you would typically save to backend
    console.log('Saving profile data:', profileData)
  }

  const getTransactionColor = (type) => {
    return type === 'Sale' ? 'text-green-600' : 'text-blue-600'
  }

  const getTransactionIcon = (type) => {
    return type === 'Sale' ? '💰' : '🛒'
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Profile & Settings</h1>
        <p className="mt-2 text-gray-600">Manage your account and farm information</p>
      </div>

      {/* Profile Header */}
      <div className="bg-white p-6 rounded-lg card-shadow mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              {profileData.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="ml-6">
              <h2 className="text-2xl font-bold text-gray-900">{profileData.name}</h2>
              <p className="text-gray-600">{profileData.farmName}</p>
              <p className="text-sm text-gray-500">{profileData.location} • {profileData.experienceYears} years experience</p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">{farmStats.totalRevenue}</p>
            <p className="text-sm text-gray-500">Total Revenue</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-8">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'profile', name: 'Profile Info', icon: '👤' },
              { id: 'farm', name: 'Farm Details', icon: '🚜' },
              { id: 'transactions', name: 'Transactions', icon: '💳' },
              { id: 'achievements', name: 'Achievements', icon: '🏆' },
              { id: 'settings', name: 'Settings', icon: '⚙️' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.name}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Profile Info Tab */}
      {activeTab === 'profile' && (
        <div className="bg-white p-6 rounded-lg card-shadow">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Personal Information</h2>
            <button
              onClick={() => isEditing ? handleSave() : setIsEditing(true)}
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
            >
              {isEditing ? 'Save Changes' : 'Edit Profile'}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              {isEditing ? (
                <input
                  type="text"
                  value={profileData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              ) : (
                <p className="text-gray-900 py-2">{profileData.name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              {isEditing ? (
                <input
                  type="email"
                  value={profileData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              ) : (
                <p className="text-gray-900 py-2">{profileData.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              {isEditing ? (
                <input
                  type="tel"
                  value={profileData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              ) : (
                <p className="text-gray-900 py-2">{profileData.phone}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              {isEditing ? (
                <input
                  type="text"
                  value={profileData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              ) : (
                <p className="text-gray-900 py-2">{profileData.location}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Experience (Years)</label>
              {isEditing ? (
                <input
                  type="number"
                  value={profileData.experienceYears}
                  onChange={(e) => handleInputChange('experienceYears', e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              ) : (
                <p className="text-gray-900 py-2">{profileData.experienceYears} years</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Languages</label>
              <div className="flex flex-wrap gap-2 py-2">
                {profileData.languages.map((lang, index) => (
                  <span key={index} className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Farm Details Tab */}
      {activeTab === 'farm' && (
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg card-shadow">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Farm Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🚜</span>
                </div>
                <p className="text-2xl font-bold text-gray-900">{farmStats.totalFields}</p>
                <p className="text-sm text-gray-500">Total Fields</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🌾</span>
                </div>
                <p className="text-2xl font-bold text-gray-900">{farmStats.activeCrops}</p>
                <p className="text-sm text-gray-500">Active Crops</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">📊</span>
                </div>
                <p className="text-2xl font-bold text-gray-900">{farmStats.averageYield}</p>
                <p className="text-sm text-gray-500">Average Yield</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🗓️</span>
                </div>
                <p className="text-2xl font-bold text-gray-900">{farmStats.seasonsCompleted}</p>
                <p className="text-sm text-gray-500">Seasons</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg card-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Primary Crops</h3>
              <div className="space-y-3">
                {profileData.primaryCrops.map((crop, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">{crop}</span>
                    <span className="text-green-600 text-sm">Active</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg card-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Certifications</h3>
              <div className="space-y-3">
                {farmStats.certifications.map((cert, index) => (
                  <div key={index} className="flex items-center p-3 bg-green-50 rounded-lg">
                    <span className="text-green-600 mr-3">✓</span>
                    <span className="font-medium text-green-800">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Transactions Tab */}
      {activeTab === 'transactions' && (
        <div className="bg-white rounded-lg card-shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Recent Transactions</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentTransactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="mr-2">{getTransactionIcon(transaction.type)}</span>
                        <span className={`font-medium ${getTransactionColor(transaction.type)}`}>
                          {transaction.type}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {transaction.crop || transaction.item}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.quantity}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">{transaction.amount}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {transaction.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Achievements Tab */}
      {activeTab === 'achievements' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white p-6 rounded-lg card-shadow">
              <div className="flex items-start">
                <div className="text-4xl mr-4">{achievement.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{achievement.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{achievement.description}</p>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                    {achievement.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Settings Tab */}
      {activeTab === 'settings' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg card-shadow">
            <h2 className="text-xl font-bold text-gray-900 mb-6">App Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">Email Notifications</h3>
                  <p className="text-sm text-gray-500">Receive updates about weather, market prices, and farm activities</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">SMS Alerts</h3>
                  <p className="text-sm text-gray-500">Get SMS alerts for urgent weather warnings and market opportunities</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">Dark Mode</h3>
                  <p className="text-sm text-gray-500">Switch to dark mode for better viewing at night</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                </label>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg card-shadow">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Account Actions</h2>
            <div className="space-y-4">
              <button className="w-full text-left bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
                <h3 className="font-medium text-blue-900">Download Data</h3>
                <p className="text-sm text-blue-700">Download all your farm data and records</p>
              </button>
              
              <button className="w-full text-left bg-yellow-50 hover:bg-yellow-100 p-4 rounded-lg transition-colors">
                <h3 className="font-medium text-yellow-900">Change Password</h3>
                <p className="text-sm text-yellow-700">Update your account password</p>
              </button>
              
              <button className="w-full text-left bg-red-50 hover:bg-red-100 p-4 rounded-lg transition-colors">
                <h3 className="font-medium text-red-900">Delete Account</h3>
                <p className="text-sm text-red-700">Permanently delete your account and data</p>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Profile