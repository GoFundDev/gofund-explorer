
/**
 * Global configuration object.
 */
const config = {
  'api': {
    'host': 'http://45.63.119.36',
    'port': '81',
    'prefix': '/api',
    'timeout': '5s'
  },
  'coinMarketCap': {
    'api': 'http://api.coinmarketcap.com/v1/ticker/',
    'ticker': 'gfc'
  },
  'db': {
    'host': 'mongodb',
    'port': '27017',
    'name': 'blockex',
    'user': 'blockexuser',
    'pass': 'Explorer!1'
  },
  'freegeoip': {
    'api': 'https://extreme-ip-lookup.com/json/'
  },
  'rpc': {
    'host': 'daemon',
    'port': '40880',
    'user': 'gofundrpc',
    'pass': 'someverysafepassword',
    'timeout': 8000, // 8 seconds
  }
};

module.exports = config;
