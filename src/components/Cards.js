import React from 'react'
import '../App.css'

const Cards = () => {
    return (
        <div className="card_wrapper"> 
            <div className="card infected">
                <h3>Infected</h3>
                <h1>904,210</h1>
                <h4>wed apr 1 2020</h4>
                <p>Number of active cases of COVID-19</p>
            </div>
            <div className="card recovered">
                <h3>Recovered</h3>
                <h1>904,210</h1>
                <h4>wed apr 1 2020</h4>
                <p>Number of recovered from COVID-19</p>
            </div>
            <div className="card death">
                <h3>Deaths</h3>
                <h1>904,210</h1>
                <h4>wed apr 1 2020</h4>
                <p>Number of deaths caused by COVID-19</p>
            </div>
        </div>
    )
}

export default Cards
