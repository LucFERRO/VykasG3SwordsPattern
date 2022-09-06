import React from 'react'
import Vykas from '../assets/img/VykasPortrait.png'
import Mine from '../assets/img/Mine.jpg'

export default function Pattern({positions}) {

    let vykas = 'url("https://images-ext-1.discordapp.net/external/R9PKrKA0hCp8dOVoDD_bX1Z1WOmsxkBG2KSd3N9T8ww/%3Fcb%3D20220216075400/https/static.wikia.nocookie.net/lostark_gamepedia/images/4/4d/Vykas_Card_Portrait.png/revision/latest/top-crop/width/360/height/360")'
    let placement = '50% 35%'

    return (
        <div className="container">
            <span className="position one" style={{background: positions[0] ? `${placement} ${vykas}` : '' }}></span>
            <span className="position two" style={{background: positions[1] ? `${placement} ${vykas}` : '' }}></span>
            <span className="position three" style={{background: positions[2] ? `${placement} ${vykas}` : '' }}></span>
            <span className="position four" style={{background: positions[3] ? `${placement} ${vykas}` : '' }}></span>
            <span className="position five" style={{background: positions[4] ? `${placement} ${vykas}` : '' }}></span>
            <span className="position six" style={{background: positions[5] ? `${placement} ${vykas}` : '' }}></span>
            <span className="position seven" style={{background: positions[6] ? `${placement} ${vykas}` : '' }}></span>
            <span className="position eight" style={{background: positions[7] ? `${placement} ${vykas}` : '' }}></span>
        </div>
    )
}
