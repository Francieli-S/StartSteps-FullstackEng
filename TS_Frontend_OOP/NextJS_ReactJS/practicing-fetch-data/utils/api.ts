const API_KEY = '0f52321db2827e35855367e2bc41ebd9'


export const fetchWeather = async () => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=${API_KEY}`)
  } catch (error) {
    
  }
} 