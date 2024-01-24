import React, { useEffect, useMemo, useState } from 'react'
import './home.css'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo.jsx'
import Chart from '../../components/chart/Chart.jsx'
import WidgetSm from '../../components/widgetSm/WidgetSm.jsx'
import WidgetLg from '../../components/widgetLg/WidgetLg.jsx'
import { USER_REQUEST } from '../../config.js'

const Home = () => {
  const [stats,setStats] = useState([])

  const MONTHS = useMemo(
    () => [
          "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",
    ],
    []
  )

  useEffect(()=>{
    const getStats = async (req,res) =>{
      try{
          const response = await USER_REQUEST.get("user/stats")
          response.data.map((item)=>{
            setStats((prev) => [
              ...prev,
              {name: MONTHS[item._id-1],"Active User": item.total},
            ])
          })
      }
      catch(err){
        console.log("Error",err)
      }
    }
    getStats()
  },[MONTHS])
  return (
    <div className='home'>
      <FeaturedInfo/>
      <Chart data={stats} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
      <WidgetSm/>
      <WidgetLg/>
      </div>
    </div>
  )
}

export default Home
