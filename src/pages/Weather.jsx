import React from 'react'

const Weather = () => {
  const currentWeather = {
    location: 'Your Farm Location',
    temperature: 28,
    condition: 'Sunny',
    humidity: 65,
    windSpeed: 12,
    rainfall: 0,
    uvIndex: 7,
    icon: '☀️'
  }

  const weeklyForecast = [
    { day: 'Today', date: 'Feb 15', high: 30, low: 18, condition: 'Sunny', icon: '☀️', rain: 0 },
    { day: 'Tomorrow', date: 'Feb 16', high: 28, low: 16, condition: 'Partly Cloudy', icon: '⛅', rain: 10 },
    { day: 'Friday', date: 'Feb 17', high: 26, low: 15, condition: 'Cloudy', icon: '☁️', rain: 40 },
    { day: 'Saturday', date: 'Feb 18', high: 24, low: 14, condition: 'Light Rain', icon: '🌧️', rain: 70 },
    { day: 'Sunday', date: 'Feb 19', high: 25, low: 16, condition: 'Partly Cloudy', icon: '⛅', rain: 20 },
    { day: 'Monday', date: 'Feb 20', high: 29, low: 19, condition: 'Sunny', icon: '☀️', rain: 0 },
    { day: 'Tuesday', date: 'Feb 21', high: 31, low: 20, condition: 'Sunny', icon: '☀️', rain: 5 },
  ]

  const weatherAlerts = [
    {
      type: 'warning',
      title: 'Heavy Rain Expected',
      message: 'Heavy rainfall expected on Saturday. Consider harvesting ready crops.',
      icon: '⚠️',
      priority: 'high'
    },
    {
      type: 'info',
      title: 'Ideal Planting Weather',
      message: 'Perfect conditions for planting vegetables next week.',
      icon: 'ℹ️',
      priority: 'medium'
    }
  ]

  const farmingTips = [
    {
      weather: 'Sunny',
      tip: 'Perfect weather for field operations and harvesting',
      action: 'Consider irrigation for water-sensitive crops',
      icon: '🌱'
    },
    {
      weather: 'Rainy',
      tip: 'Good time for transplanting and sowing',
      action: 'Check drainage systems to prevent waterlogging',
      icon: '💧'
    },
    {
      weather: 'Windy',
      tip: 'Ideal for drying harvested crops',
      action: 'Secure lightweight structures and greenhouses',
      icon: '💨'
    }
  ]

  const getAlertColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-50 border-red-200 text-red-800'
      case 'medium':
        return 'bg-yellow-50 border-yellow-200 text-yellow-800'
      case 'low':
        return 'bg-blue-50 border-blue-200 text-blue-800'
      default:
        return 'bg-gray-50 border-gray-200 text-gray-800'
    }
  }

  const getRainColor = (chance) => {
    if (chance >= 70) return 'text-blue-600'
    if (chance >= 40) return 'text-yellow-600'
    return 'text-gray-400'
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Weather Forecast</h1>
        <p className="mt-2 text-gray-600">Stay updated with weather conditions for better farm planning</p>
      </div>

      {/* Current Weather */}
      <div className="bg-white p-6 rounded-lg card-shadow mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Current Weather</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-6xl mb-2">{currentWeather.icon}</div>
            <p className="text-3xl font-bold text-gray-900">{currentWeather.temperature}°C</p>
            <p className="text-gray-600">{currentWeather.condition}</p>
            <p className="text-sm text-gray-500">{currentWeather.location}</p>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-500">Humidity</span>
              <span className="font-medium">{currentWeather.humidity}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Wind Speed</span>
              <span className="font-medium">{currentWeather.windSpeed} km/h</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-500">Rainfall</span>
              <span className="font-medium">{currentWeather.rainfall} mm</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">UV Index</span>
              <span className="font-medium">{currentWeather.uvIndex}/10</span>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-2">Farm Recommendation</h3>
            <p className="text-green-700 text-sm">Perfect weather for fieldwork and irrigation. Consider harvesting ready crops.</p>
          </div>
        </div>
      </div>

      {/* Weather Alerts */}
      {weatherAlerts.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Weather Alerts</h2>
          <div className="space-y-4">
            {weatherAlerts.map((alert, index) => (
              <div key={index} className={`p-4 rounded-lg border ${getAlertColor(alert.priority)}`}>
                <div className="flex items-start">
                  <span className="text-2xl mr-3">{alert.icon}</span>
                  <div>
                    <h3 className="font-semibold mb-1">{alert.title}</h3>
                    <p className="text-sm">{alert.message}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 7-Day Forecast */}
      <div className="bg-white p-6 rounded-lg card-shadow mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">7-Day Forecast</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
          {weeklyForecast.map((day, index) => (
            <div key={index} className="text-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
              <p className="font-semibold text-gray-900">{day.day}</p>
              <p className="text-sm text-gray-500 mb-2">{day.date}</p>
              <div className="text-3xl mb-2">{day.icon}</div>
              <p className="text-sm text-gray-600 mb-2">{day.condition}</p>
              <div className="flex justify-between text-sm">
                <span className="font-semibold">{day.high}°</span>
                <span className="text-gray-500">{day.low}°</span>
              </div>
              <p className={`text-xs mt-1 ${getRainColor(day.rain)}`}>
                {day.rain}% rain
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Farming Tips */}
      <div className="bg-white p-6 rounded-lg card-shadow">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Weather-Based Farming Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {farmingTips.map((tip, index) => (
            <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-2">{tip.icon}</span>
                <h3 className="font-semibold text-gray-900">{tip.weather} Weather</h3>
              </div>
              <p className="text-gray-700 text-sm mb-2">{tip.tip}</p>
              <p className="text-green-700 text-sm font-medium">{tip.action}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Weather Info */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg card-shadow">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Monthly Overview</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-500">Average Temperature</span>
              <span className="font-medium">24°C</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Total Rainfall</span>
              <span className="font-medium">45mm</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Rainy Days</span>
              <span className="font-medium">8 days</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Sunny Days</span>
              <span className="font-medium">20 days</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg card-shadow">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Crop-Specific Recommendations</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-2 bg-green-50 rounded">
              <span className="text-sm">🍅 Tomatoes</span>
              <span className="text-xs text-green-700">Perfect conditions</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-yellow-50 rounded">
              <span className="text-sm">🌾 Wheat</span>
              <span className="text-xs text-yellow-700">Monitor moisture</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-blue-50 rounded">
              <span className="text-sm">🍚 Rice</span>
              <span className="text-xs text-blue-700">Good for transplanting</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather