import React from 'react'

const CoinRow = ({ data, index }) => {
  const {
    name,
    current_price,
    price_change_percentage_24h,
    total_volume,
    image,
    symbol,
  } = data
  return (
    <tr key={index}>
      <td className='text-muted'>{index}</td>
      <td>
        <img
          src={image}
          alt={name}
          className='img-fluid me-4'
          style={{ width: '3%' }}
        />
        <span>{name}</span>
        <span className='ms-3 text-muted text-uppercase'>{symbol}</span>
      </td>
      <td>{current_price}</td>
      <td
        className={
          price_change_percentage_24h > 0 ? 'text-success' : 'text-danger'
        }
      >
        {price_change_percentage_24h}
      </td>
      <td>{total_volume}</td>
    </tr>
  )
}

export default CoinRow
