import React from "react";
import { Bar } from "react-chartjs-2";



const Chart = ({infected,recovered,deaths,isloading}) => {
  const data = {
  labels: ["Corona Report"],
  datasets: [
    {
      label: "Infected",
      backgroundColor: "blue",
      borderColor: "blue",
      borderWidth: 1,
      data: [infected],
    },
    {
      label: "Recovered",
      backgroundColor: "green",
      borderColor: "green",
      borderWidth: 1,
      data: [recovered],
    },
    {
      label: "Deaths",
      backgroundColor: "red",
      borderColor: "red",
      borderWidth: 1,
      data: [deaths],
    }
  ],
};
  return (
    <div style={{width:"90%",height:"400px",margin:"40px auto"}}>
      {isloading?"Loading...":<Bar
        data={data}
        width={100}
        height={50}
        options={{
          maintainAspectRatio: false,
        }}
      />}
    </div>
  );
};

export default Chart;
