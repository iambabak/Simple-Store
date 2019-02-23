
  const STORE_ADDRESS = 'sib'
  const API_KEY = '0f855b9c2f5ee2a21e530bcaa82a645286724fba'

const baseHttpConfig = {
  validateStatus: status => status < 500,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'x-api-key': API_KEY,
    accept: 'application/json',
    'x-store-sub-address':STORE_ADDRESS
  }
}

const generateAuthHeaders = accessToken => ({
  ...baseHttpConfig.headers,
  Authorization: `Token ${accessToken}`
})

export default function createConfig(accessToken, additionalSettings) {
  if (!accessToken) {
    console.log('token not', accessToken)
    const config = { ...baseHttpConfig, ...additionalSettings }
    return config
  }

  const headerSettings = { headers: generateAuthHeaders(accessToken) }
  console.log('headerSettings',headerSettings)
  const config = {
    ...baseHttpConfig,
    ...headerSettings,
    ...additionalSettings
  }

  return config
}


