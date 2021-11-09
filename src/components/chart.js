import React from 'react';
import {Line} from 'react-chartjs-2';


function Chart({ArrayX,Request,ArrayY}) {

  const state = {
    labels: ArrayX,
    datasets: [
      {
        label: Request,
        fill: false,
        lineTension: 0,
        backgroundColor: '#1de9b6',
        borderColor: '#1de9b6',
        borderWidth: 1,
        display:false,
        data: ArrayY
      }
    ]
  }

    return (
      <div className="col-sm-12 col-md-6 col-xl-6" >
        <div className="card yearly-sales chartCard">
          <div className="card-block" style={{padding:"0px"}}>
        <Line
          data={state}
          options={{
            title:{
              display:true,
              text:'New Messages',
              fontSize:20
            },
            
            scales : {
              
              x: {
                  ticks: {
                      display: false
                  }
                ,
                grid: {
                  display: false
                },
                title:{
                  display:true,
                  text:'In a Day',
                  font:{
                   
                  }
                }        
              },
              y:{
                title:{
                  display:true,
                  text:Request,
                  font:{
                   
                  }
                } 
              }
            },
            // responsive:true,
            // maintainAspectRatio:false,
            // scales : {
            //   y: [{
            //     title: {
            //       display: true,
            //       text: 'Days'
            //     },

        
            //   }]
            // },
            // scales: {
            //   yAxes:[{
            //     scaleLabel:{
            //       display:true,
            //       labelString:'Message'
            //     }
            //   }]
            // }
            // legend:{
            //   display:true,
            //   position:'right'
            // },
            animationEnabled: true,
			      exportEnabled: true,
          }}
        />
      </div>
      </div>
      </div>
    );
  
}

export default Chart;