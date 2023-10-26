import React, { useContext, useState } from 'react'
import Cards from '../components/Cards'
import Navbar from '../components/Navbar'
import { apiContext } from '../context/apiContext'
import Footer from '../components/Footer'

function Home() {
  const data = useContext(apiContext)
  // console.log("my data", data)
  const [records, setRecords] = useState([])
  // setRecords(data)
  const handleFilter =(e)=>{
    setRecords(data.filter(art=>art.title.toLowerCase().includes(e.target.value.toLowerCase())))
  }
  return (
    <div className='home'>
        <Navbar  handleFilter={handleFilter} />
        <Cards records={records} setRecords={setRecords}/>
        <Footer/>
    </div>
  )
}

export default Home