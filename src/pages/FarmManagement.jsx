import React, { useState } from 'react'

const FarmManagement = () => {
  const [activeTab, setActiveTab] = useState('fields')

  const fields = [
    { id: 1, name: 'Field A', size: '2.5 acres', crop: 'Tomatoes', status: 'Growing', health: 'Good', plantedDate: '2024-01-15' },
    { id: 2, name: 'Field B', size: '3.2 acres', crop: 'Wheat', status: 'Ready to Harvest', health: 'Excellent', plantedDate: '2023-11-20' },
    { id: 3, name: 'Field C', size: '1.8 acres', crop: 'Corn', status: 'Growing', health: 'Fair', plantedDate: '2024-02-01' },
    { id: 4, name: 'Field D', size: '2.0 acres', crop: 'Rice', status: 'Preparing Soil', health: 'Good', plantedDate: '-' },
  ]

  const equipment = [
    { id: 1, name: 'Tractor Model X', type: 'Tractor', status: 'Available', lastMaintenance: '2024-01-10', nextMaintenance: '2024-04-10' },
    { id: 2, name: 'Harvester Pro', type: 'Harvester', status: 'In Use', lastMaintenance: '2023-12-15', nextMaintenance: '2024-03-15' },
    { id: 3, name: 'Irrigation System A', type: 'Irrigation', status: 'Available', lastMaintenance: '2024-02-01', nextMaintenance: '2024-05-01' },
    { id: 4, name: 'Plowing Equipment', type: 'Plow', status: 'Maintenance', lastMaintenance: '2024-01-20', nextMaintenance: '2024-02-20' },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'Good':
      case 'Excellent':
      case 'Available':
        return 'bg-green-100 text-green-800'
      case 'Fair':
      case 'In Use':
        return 'bg-yellow-100 text-yellow-800'
      case 'Maintenance':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Farm Management</h1>
        <p className="mt-2 text-gray-600">Manage your fields, crops, and equipment</p>
      </div>

      {/* Tabs */}
      <div className="mb-8">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('fields')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'fields'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              🌾 Fields & Crops
            </button>
            <button
              onClick={() => setActiveTab('equipment')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'equipment'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              🚜 Equipment
            </button>
          </nav>
        </div>
      </div>

      {/* Fields Tab */}
      {activeTab === 'fields' && (
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Field Overview</h2>
            <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
              + Add New Field
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {fields.map((field) => (
              <div key={field.id} className="bg-white p-6 rounded-lg card-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{field.name}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(field.health)}`}>
                    {field.health}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Size:</span>
                    <span className="font-medium">{field.size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Crop:</span>
                    <span className="font-medium">{field.crop}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Status:</span>
                    <span className="font-medium">{field.status}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Planted:</span>
                    <span className="font-medium">{field.plantedDate}</span>
                  </div>
                </div>

                <div className="mt-4 flex space-x-2">
                  <button className="flex-1 bg-green-100 text-green-700 px-3 py-2 rounded-md hover:bg-green-200 transition-colors text-sm">
                    View Details
                  </button>
                  <button className="flex-1 bg-blue-100 text-blue-700 px-3 py-2 rounded-md hover:bg-blue-200 transition-colors text-sm">
                    Update Status
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Equipment Tab */}
      {activeTab === 'equipment' && (
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Equipment Status</h2>
            <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
              + Add Equipment
            </button>
          </div>

          <div className="bg-white rounded-lg card-shadow overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Equipment</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Maintenance</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Next Maintenance</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {equipment.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.type}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.lastMaintenance}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.nextMaintenance}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-green-600 hover:text-green-900 mr-3">Edit</button>
                      <button className="text-blue-600 hover:text-blue-900">Schedule</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}

export default FarmManagement