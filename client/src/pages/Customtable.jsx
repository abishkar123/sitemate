import React, { useEffect, useState } from 'react'
import { getfrom } from '../helper/axios'

export const Customtable = () => {
    const [showlist, setshowlets] = useState('')

    const fetctData = async ( ) =>{
        try {
            const formdata = await getfrom()
            setshowlets(formdata)
            
        } catch (error) {
            console.error("errror fetchingdata ")
            
        }
    }

    useEffect(()=>{
        fetctData()
    })
  return (
    <div>

    </div>
  )
}
