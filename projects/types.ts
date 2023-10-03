type Category = 'Server' | 'Sensor' | 'Wireless' | 'Other'
type SubCategory =
  | 'CDN'
  | 'Storage'
  | 'Data Warehouse'
  | 'Mobility'
  | 'VPN'
  | 'Geo Location'
  | 'Sensor'
  | 'Supply Chain'
  | 'Compute'
  | 'Smart Home'
  | 'Smart City'
  | 'Environmental'
  | 'Advertising'
  | 'LoRaWAN'
  | 'Energy'
  | 'RPC'
  | 'AI'
  | 'General'
  | 'Healthcare'
  | '5G'
  | 'WiFi'
  | 'Ridesharing'
  | 'Indexer'
  | 'Search'
  | 'Neuro'
  | 'Bluetooth'
  | 'Food Delivery'

export type LayerOne =
  | 'Ethereum'
  | 'Algorand'
  | 'Cosmos'
  | 'Solana'
  | 'Polkadot'
  | 'XinFin'
  | 'IoTeX'
  | 'Native'
  | 'Polygon'
  | 'Binance'
  | 'Kadena'
  | 'Arbitrum'
  | 'Cardano'
  | 'BNB'

export type Project = {
  id: string
  project_name: string
  trusted_metric: boolean
  token: string | null
  layer_1: LayerOne[] | null
  categories: Category[]
  sub_categories?: SubCategory[]
  market_cap?: number | string | null
  token_price?: number | null
  total_devices: number
  network_status: string | null
  avg_device_cost: string | null
  days_to_breakeven: number
  estimated_daily_earnings: number | string | null
  name?: string
  poolid: string | null
  chainid: string | null
  coingecko_id: string | null
  fully_diluted_valuation?: number
}
