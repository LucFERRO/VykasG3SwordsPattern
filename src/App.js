import React, { useState , useEffect } from 'react';
// import uuidv4 from 'uuid/v4';

import Pattern from './components/Pattern';
import Pattern2 from './components/Pattern2';
import './assets/css/Pattern.css';

function App(props) {
    const patternList = [
        [false,true,false,true,true,true,false,true],
        [true,false,true,false,true,false,true,true],
        [true,true,false,true,false,true,false,true],
        [false,false,true,false,true,true,true,true],
        [true,false,false,true,true,false,true,true],
        [false,true,true,true,true,false,false,true],
        [true,true,false,true,true,false,false,true],
    ]

    const patternListObj = [
        {pattern: [false,true,false,true,true,true,false,true], safe: [4] },
        {pattern: [true,false,true,false,true,false,true,true], safe: [7] },
        {pattern: [true,true,false,true,false,true,false,true], safe: [0] },
        {pattern: [false,false,true,false,true,true,true,true], safe: [5] },
        {pattern: [true,false,false,true,true,false,true,true], safe: [6] },
        {pattern: [false,true,true,true,true,false,false,true], safe: [3] },
        {pattern: [true,true,false,true,true,false,false,true], safe: [3] },
        {pattern: [false,true,true,false,true,false,true,true], safe: [1,2] }
    ]

    const [position, setPosition] = useState(() => {return {pattern: [true,true,true,true,true,true,true,true], safe:[0,1,2,3,4,5,6,7]}})
    const [showButton, setShowButton] = useState(true);
    const [clickableIcons, setclickableIcons] = useState(false);
    const [totalTries, setTotalTries] = useState(() => {return 0})
    const [successfulTries, setsuccessfulTries] = useState(() => {return 0})

    let accuracy = Math.floor(((successfulTries+1) / totalTries)*100)

    const randomPattern = () => {
        let randNum = Math.floor(Math.random()*patternList.length)
        let newPattern = patternList[randNum]
        while (JSON.stringify(newPattern)==JSON.stringify(position)) {
            newPattern = patternList[Math.floor(Math.random()*patternList.length)]
        }
        return newPattern
    }

    const randomPatternObj = () => {
        let randNum = Math.floor(Math.random()*patternListObj.length)
        let newPattern = patternListObj[randNum].pattern
        let safeSpots = patternListObj[randNum].safe
        while (JSON.stringify(newPattern)==JSON.stringify(position)) {
            newPattern = patternListObj[Math.floor(Math.random()*patternListObj.length)]
        }
        return {pattern: newPattern, safe: safeSpots}
    }

    const random = (guess) => {
        setPosition(randomPatternObj())
        if (guess) setsuccessfulTries(successfulTries+1)
        setTotalTries(totalTries+1)
        console.log(`Total number of tries: ${totalTries}`)
    }

    return (
        <div id="home">
            { showButton ? <button onClick={() => {random(false); setShowButton(false); setclickableIcons(true)}}>Start</button> : <p className='accuracy'>Accuracy: {accuracy}%</p>}
            <Pattern2 positions={position.pattern} safeSpots={position.safe} clickableIcons={clickableIcons} random={random} />
        </div>
    )
}

export default App;