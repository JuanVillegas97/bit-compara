import React, { useEffect, useState } from 'react'
import Tablecoins from './Components/TableCoins'
const url =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'"

function App() {
  const [datas, setDatas] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [search, setSearch] = useState('')

  const getApi = async () => {
    const response = await fetch(url)
    const datas = await response.json()
    setDatas(datas)
  }

  useEffect(() => {
    getApi()
  }, [])

  return (
    <div className='container'>
      <div className='row'>
        <input
          type='text'
          placeholder='Search a Coin'
          className='form-control bg-dark text-light border-0 mt-4 text-center'
          autoFocus
          onChange={(e) => setSearch(e.target.value)}
        />
        <Tablecoins datas={datas} search={search} />
      </div>
    </div>
  )
}

export default App
