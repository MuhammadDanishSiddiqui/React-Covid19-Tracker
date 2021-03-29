import React from "react";
import CountUp from "react-countup";
import "../App.css";

const Cards = ({ lastUpdated, isloading, infected, recovered, deaths }) => {
  return (
    <div className="card_wrapper">
      <div className="card infected">
        <h3>Infected</h3>
        {isloading ? (
          "Loading..."
        ) : (
          <>
            <h1>
              <CountUp start={0} end={infected} duration={2.75} separator="," />
            </h1>
            <h4>{new Date(lastUpdated).toDateString()}</h4>
          </>
        )}
        <p>Number of active cases of COVID-19</p>
      </div>
      <div className="card recovered">
        <h3>Recovered</h3>
        {isloading ? (
          "Loading..."
        ) : (
          <>
            <h1>
              <CountUp
                start={0}
                end={recovered}
                duration={2.75}
                separator=","
              />
            </h1>
            <h4>{new Date(lastUpdated).toDateString()}</h4>
          </>
        )}
        <p>Number of recovered from COVID-19</p>
      </div>
      <div className="card death">
        <h3>Deaths</h3>
        {isloading ? (
          "Loading..."
        ) : (
          <>
            <h1>
              <CountUp start={0} end={deaths} duration={2.75} separator="," />
            </h1>
            <h4>{new Date(lastUpdated).toDateString()}</h4>
          </>
        )}
        <p>Number of deaths caused by COVID-19</p>
      </div>
    </div>
  );
};

export default Cards;
