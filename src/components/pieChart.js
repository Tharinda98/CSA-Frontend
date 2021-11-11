import React from "react";
import { Pie } from "react-chartjs-2";
	
const SummaryChart = ({value}) => {
	
// Sample data
const data = {
	labels: ["New Work","On-going Work","Finished Work"],
	datasets: [
		{
		label: "Works status",
		data: value,
		backgroundColor: [ "#c04000","#f4c22b", "#1de9b6"],
		}
	]
}
	
return (


    <div className="" >
        <div className="card yearly-sales chartCard">
            <div className="card-block" style={{padding:"0px"}}>
                <Pie data={data} 
                    option={{maintainAspectRatio:false,responsive:true}}
                    
                />
            </div>
        </div>
    </div>
	

	
);
}
	
export default SummaryChart;
