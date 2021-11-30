import React from 'react'
import CoinRow from './CoinRow'

const titles = ['#', 'Coin', 'Price', 'Price Change', '24h Volume']
const Tablecoins = ({ datas, search }) => {
  const filteredCoins = datas.filter((data) =>
    data.name.toLowerCase().includes(search.toLowerCase())
  )
  return (
    <table className='table table-dark mt-4 table-hover'>
      <thead>
        <tr>
          {titles.map((title) => {
            return <td>{title}</td>
          })}
        </tr>
      </thead>
      <tbody>
        {filteredCoins.map((data, index) => {
          return <CoinRow data={data} key={index} index={index + 1} />
        })}
      </tbody>
    </table>
  )
}

export default Tablecoins
