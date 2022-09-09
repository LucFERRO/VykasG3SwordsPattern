import React from 'react'
import Vykas from '../assets/img/VykasPortrait.png'
import Mine from '../assets/img/Mine.jpg'
import { click } from '@testing-library/user-event/dist/click'

export default function Pattern2({clickableIcons,positions,random,safeSpots}) {

    let vykas = 'url("https://images-ext-1.discordapp.net/external/R9PKrKA0hCp8dOVoDD_bX1Z1WOmsxkBG2KSd3N9T8ww/%3Fcb%3D20220216075400/https/static.wikia.nocookie.net/lostark_gamepedia/images/4/4d/Vykas_Card_Portrait.png/revision/latest/top-crop/width/360/height/360")'
    let placement = '50% 35%'
    let onlyOneSafeSpot = !(safeSpots.length-1)

    const clickSafeSpot = (e) => {
        let clickedSpot = parseInt(getComputedStyle(e.target).getPropertyValue('--i'))
        let guess = safeSpots.includes(clickedSpot)

        let message =  guess ? 'SUCCESS!' : `YOU DIED : You clicked ${clickedSpot} but the safe spot was ${onlyOneSafeSpot ? safeSpots : 'at '+safeSpots[0]+' or '+safeSpots[1]}`
        // if (safeSpots.includes(clickedSpot)) console.log('GOT EEEEM')
        
        console.log(message)
        random(guess)

    }

    return (
        <div className="container2">
            <div style={{ '--i': 0 }}><span className={`position2 ${!clickableIcons ? ' unclickable ' : ''} ${ positions[0]? '' : 'ninja'}`} onClick={clickSafeSpot} style={{'--i':0, background: positions[0] ? `${placement} ${vykas}` : '' }}></span></div>
            <div style={{ '--i': 1 }}><span className={`position2 ${!clickableIcons ? ' unclickable ' : ''} ${ positions[1]? '' : 'ninja'}`} onClick={clickSafeSpot} style={{'--i':1, background: positions[1] ? `${placement} ${vykas}` : '' }}></span></div>
            <div style={{ '--i': 2 }}><span className={`position2 ${!clickableIcons ? ' unclickable ' : ''} ${ positions[2]? '' : 'ninja'}`} onClick={clickSafeSpot} style={{'--i':2, background: positions[2] ? `${placement} ${vykas}` : '' }}></span></div>
            <div style={{ '--i': 3 }}><span className={`position2 ${!clickableIcons ? ' unclickable ' : ''} ${ positions[3]? '' : 'ninja'}`} onClick={clickSafeSpot} style={{'--i':3, background: positions[3] ? `${placement} ${vykas}` : '' }}></span></div>
            <div style={{ '--i': 4 }}><span className={`position2 ${!clickableIcons ? ' unclickable ' : ''} ${ positions[4]? '' : 'ninja'}`} onClick={clickSafeSpot} style={{'--i':4, background: positions[4] ? `${placement} ${vykas}` : '' }}></span></div>
            <div style={{ '--i': 5 }}><span className={`position2 ${!clickableIcons ? ' unclickable ' : ''} ${ positions[5]? '' : 'ninja'}`} onClick={clickSafeSpot} style={{'--i':5, background: positions[5] ? `${placement} ${vykas}` : '' }}></span></div>
            <div style={{ '--i': 6 }}><span className={`position2 ${!clickableIcons ? ' unclickable ' : ''} ${ positions[6]? '' : 'ninja'}`} onClick={clickSafeSpot} style={{'--i':6, background: positions[6] ? `${placement} ${vykas}` : '' }}></span></div>
            <div style={{ '--i': 7 }}><span className={`position2 ${!clickableIcons ? ' unclickable ' : ''} ${ positions[7]? '' : 'ninja'}`} onClick={clickSafeSpot} style={{'--i':7, background: positions[7] ? `${placement} ${vykas}` : '' }}></span></div>
        </div>
    )
}
