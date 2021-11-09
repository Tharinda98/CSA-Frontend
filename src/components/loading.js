import React from 'react';
// import { BallPulse 	 } from 'react-pure-loaders';
// import ReactLoading from 'react-loading';
// import { ShimmerText } from "react-shimmer-effects";
// import { BallClipRotatePulse ,LineScalePulseOut,CubeTransition 	,BallScaleRipple ,BallPulseSync 		,BallGridPulse ,BallPulseRise 		 	 	 } from 'react-pure-loaders';
import { BarWave } from "react-cssfx-loading";

const Loading = () => {
    return ( 
        <div style={{borderStyle:'dashed',borderWidth:2,padding:70,margin:20,borderRadius:2}}>
        <div className="row" style={{margin:'auto',width:'100%',justifyContent:'center',alignItems:'center'}}>
            <BarWave color="#3f4d67" width="50px" height="20px" duration="3s" />
            
            
        </div>
        <div style={{margin:'auto',width:'100%',textAlign:'center',marginTop:20, color:'#3f4d67'}}>
            Loading ....
        </div>
        </div>
     );
}
 
export default Loading;


{/* <BallClipRotatePulse 		
color={'grey'}
loading={true}
/>

<BallScaleRipple 		 		
color={'grey'}
loading={true}
/>

<BallPulseSync 			 		
color={'grey'}
loading={true}
/>

<BarWave color="grey" width="100px" height="10px" duration="3s" /> */}