import React from 'react'
import Card from './Card'
import { useContext } from 'react'
import { apiContext } from '../context/apiContext'


function Cards({records, setRecords}) {
  const data = useContext(apiContext)
  console.log("this is data", data)
  setRecords(data)
  return (
    <div className='cards'>
      {/* key={art.source.id} */}

      {records.map(art=>(
        <Card article ={art} />
      ))}
    </div>
  )
}

export default Cards