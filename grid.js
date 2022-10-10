import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Harish from '../assets/2021/choice/Harish.png'
import './style.css'
import { margin } from '@mui/system';
import Background from '../assets/backgroundImages/Background1.jpg'



export default function VariableWidthGrid() {
  const GridStyle ={
//   height :"100vh",
//   width :"100vw",
//   display : "Flex",
//   justifyContent : "center",
//   alignItems : "center",
//   backgroundSize: "cover",
  } 
  return (
    <Box className='fullbox' style={{height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundImage :`url(${Background})`, backgroundSize : "cover" ,overflow : "hidden"}} >
      <Grid container spacing={3} style ={{ display : "flex", alignItems :  "center", justifyContent : "space-around", flexDirection : "row", margin : "10px", textAlign : "center", border : "10px"}}>
        <Grid item xs = "12">
            <div className="navigators">
                Project Star Performer Awards
            </div>
        </Grid>
        <Grid item xs="auto"> 
        <div>
                         <img src={Harish} className="c-class-margin c-class-image"/>
                         <img src={Harish} className="c-class-margin c-class-image"/>
                         <img src={Harish} className="c-class-margin c-class-image"/>
                         
                         </div>
          <h1 style={{fontFamily : "Rochester" , color : "white", fontSize : "30px"}}>Star-performer Non-technical</h1>
        </Grid>
        <Grid item xs="auto">
        <div>
                         <img src={Harish} className="c-class-margin c-class-image"/>
                         <img src={Harish} className="c-class-margin c-class-image"/>
                         <img src={Harish} className="c-class-margin c-class-image"/>
                         <img src={Harish} className="c-class-margin c-class-image"/>
                         </div>
         <h1 style={{fontFamily : "Rochester" , color : "white", fontSize : "30px"}}>Best find of the year - Debutant</h1>
        </Grid>
        <Grid item xs="auto">
        <div>
                         <img src={Harish} className="c-class-margin c-class-image"/>
                         <img src={Harish} className="c-class-margin c-class-image"/>
                         <img src={Harish} className="c-class-margin c-class-image"/>
                         <img src={Harish} className="c-class-margin c-class-image"/>
                         
                         </div>
         <h1 style={{fontFamily : "Rochester" , color : "white", fontSize : "30px"}}>Best find of the year - Lateral</h1>
        </Grid>
        <Grid item xs="auto">
        <div>
                         <img src={Harish} className="c-class-margin c-class-image"/>
                         
                         </div>
         <h1 style={{fontFamily : "Rochester" , color : "white", fontSize : "30px"}}>Most promising-technical</h1>
        </Grid>
        <Grid item xs="auto">
        <div>
                         <img src={Harish} className="c-class-margin c-class-image"/>
                         <img src={Harish} className="c-class-margin c-class-image"/>
                         
                         </div>
         <h1 style={{fontFamily : "Rochester" , color : "white", fontSize : "30px"}}>hypothetical</h1>
        </Grid>
      </Grid>
    </Box>
  );
}
