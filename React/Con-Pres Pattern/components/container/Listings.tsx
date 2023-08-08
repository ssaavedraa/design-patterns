import React from 'react'
import Listings from '../presntational/Listings'

export default function ListingsContainerComponent () {
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    fetch('url')
      .then((res) => res.json())
      .then((res) => setData(res))
  }, [])

  if (!data) return null

  return <Listings listings={data.listings}/>
}