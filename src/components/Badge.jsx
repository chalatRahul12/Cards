import React, {useState, useEffect} from 'react'
import '../App.css'
import { sizes } from '../../Utils/data'
import { variants } from '../../Utils/data'

function Badge({ role, variant, size }) {
    const [color, setColor] = useState('')
    const [badgeSize, setBadgeSize] = useState('')
    const [fontSize,setFontSize] = useState('')
    const checkColor = (name) => {
        const resColor = variants.find((item) => item.name === name.toLowerCase())
        if (resColor) {

            setColor(resColor.color)
        }
        else {
            setColor('blue')
        }
    }
    const checkSize = (name) => {
        const resSize = sizes.find((item) => item.name === name.toLowerCase())
        if (resSize) {
            setBadgeSize(resSize.size)
            setFontSize(resSize.fontSize)
        }
        else {
            setBadgeSize('25px')
            setFontSize('12px')
        }
        
    }
   
    useEffect(() => {
        checkColor(variant)
        checkSize(size)
    }, [])

    
    return (
        <>
            {
                role.toLowerCase() === 'software developer' ? <span className='role-title' style={{ backgroundColor: color, width: badgeSize, fontSize: fontSize }}>SD</span>
                    : <span className='role-title st' style={{ backgroundColor: color, width: badgeSize, fontSize: fontSize }}>ST</span>
            }
            
        </>
        )
}


export default Badge;