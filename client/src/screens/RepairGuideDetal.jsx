import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getOneRepairGuide } from '../services/repairGuide'


export default function RepairGuideDetal(props) {

  const [guide, setGuide] = useState(null)
  const [selectGuide, setSelectGuide] = useState('')
  const { id } = useParams();
  const { electronics } = props;

  useEffect(() => {
    const fetchGuide = async () => {
      const guideData = await getOneRepairGuide(id);
      setGuide(guideData)
    }
    fetchGuide()
}, [id])



  

  return (
    <div>
      
    </div>
  )
}
