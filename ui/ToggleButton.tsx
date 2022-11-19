import { IoSunnyOutline } from '@react-icons/all-files/io5/IoSunnyOutline'
import { IoMoonSharp } from '@react-icons/all-files/io5/IoMoonSharp'


import React, { useEffect, useState } from 'react'

type Props = {}

const ToggleButton = (props: Props) => {
    const [mounted, setMounted] = useState(false)

    useEffect(()=>{
        setMounted(true)
    },[])
  return (
    <div>if(!mounted) return null</div>
  )
}

export default ToggleButton