import React from 'react'
import './Fourtest.css'

export default function Fourtest(props) {
    const{text1, text2, imgfourtest, bgcolors} = props
    return (
        <div className={`fourtestClass-${bgcolors}`} >
            <h2> {text1} FIRST</h2>
            <h2> {text2} SECOND</h2>
            <img src={imgfourtest}/>
        </div>
    )
}
Fourtest.defaultProps ={
    text1: "blank",
    text2: "blank 2",
    imgfourtest: './imges/star.png',
    bgcolors: 'red'
}