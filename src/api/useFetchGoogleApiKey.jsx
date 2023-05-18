import { useState, useEffect, useCallback } from 'react'

const useFetchGoogleApiKey = () => {
  const [key, setKey] = useState(null)

  const fetchGoogleApiKey = useCallback(async () => {
    const backendAbsolutePath =
      'https://hive-weather-server.onrender.com/api/google/key/'

    const response = await fetch(backendAbsolutePath)
    const json = await response.json()

    setKey(json.key)
  }, [])

  useEffect(() => {
    fetchGoogleApiKey()
  }, [fetchGoogleApiKey])

  return key
}

export default useFetchGoogleApiKey
