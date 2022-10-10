// import logo from './logo.svg';
import React,{useState, setEffect, useEffect} from 'react';
import './App.css';
import Buttons from './components/Buttons';
import { buttonData } from './components/buttonData';
import FullpageScroll from './components/fullPageScroll';
// import FullPage from './components/fullPage';
import VariableWidthGrid from './components/grid';
import Home from './components/Home';
import Aawrds from './components/Awards11-14';
import axios, { Axios } from 'axios';
import { json } from 'react-router-dom';
// import FullpageScroll from './components/fullPageScroll';



// function App() {


//   // const getYearData = ()=>{
     
//   // }
//   return (
//     <div>
//       <Buttons />
//       <FullpageScroll/>
//     </div>
//     // <VariableWidthGrid/>
//     // <Home/>
//     // <Aawrds/>
//   );
// }

function App(){

  const[yeardata,SetyearData] = useState()



  const isDefault = yeardata == 'default'? true : false;
  const isStaticPage= yeardata =='0' ? true :false;
  
  const Index = ()=>{
    
    if(isDefault)
    {
      return <Home/>
    }
    else if(isStaticPage)
    {
      return <Aawrds/>
    }
    else 
    {
      // const pass=React.cloneElement(<FullpageScroll/>,yeardata)
      
      return <FullpageScroll/>
    }
  }


  // const [data,setData] = useState([])
  // useEffect(() => {
  //   fetch('https://wall-of-fame.herokuapp.com/getyeardata?year=4')
  //   .then(response => response.json()).then(
  //   json => setData(json))
  // },[]) 
  // return(
  //   <div>
  //       {data.map(item => <li>{item.}</li>)}
  //   </div>
  // );
  const [choice,setChoice] = useState([])
  const [coreValueAwards,setCoreValueAwards] = useState([]);
  const [individualAwards,setIndividualawards] = useState([]);
  const [JuryAwards,setJuryAwards] = useState([]);
  const [ManagedServices,setManagedServices] = useState([]);
  const [MostValuabePlayer,setMostValuabePlayer] = useState([]);
  const [projectAwardStarPerformers,setProjectAwardStarPerformers] = useState([]);
  const [projectAwardStarFixedPerformers,setProjectAwardStarFixedPerformers] = useState([]);
  const [projectAwardStarStratagicPerformer,setprojectAwardStarStratagicPerformer] = useState([]);
  const [salesAward,setSalesAward] = useState([]);
  const [sharedServices,setSharedServices] = useState([])
  const [tmSupportProjectsStarPerformer,setTmSupportProjectsStarPerformer] = useState([]);
  const [trueChampion,setTrueChampion] = useState([]);
     const [result, setResult] = useState([])

  // useEffect(() => {
  // getFormData();
  // },[])

  const getFormData = async(id) => {
    // e.preventDefault()
    console.log(id, "bahjbahjb")
    await axios(`https://wall-of-fame.herokuapp.com/getyeardata?year=${id}`, {
      method: "GET"
    })
    .then(function(response){
     console.log(response.data.result, "responseOfapi")
      setResult(response.data.result)
      // console.log(response.data.result[1].Core_Value_awards,"187987")
      //console.log(response.data.result.Choice,"2")
      //console.log(response.data.result[1]["Core Value awards"])
      setChoice(response.data.result[0].choice)
      setCoreValueAwards(response.data.result[1].Core_Value_awards)
      //console.log(response.data.result[1]["Core_Value_awards"], "corevalue")
      //setCore_value(response.data.result[1])
      //console.log(core_value)   
      setIndividualawards(response.data.result[2].Individual_awards)
      setJuryAwards(response.data.result[3].Jury_awards)
      setManagedServices(response.data.result[4].Managed_Services)
      setMostValuabePlayer(response.data.result[5].Most_valuable_player)
      setProjectAwardStarPerformers(response.data.result[8].Project_Awards_Star_Performers)
      // setProjectAwardStarFixedPerformers(response.data.result[6].Project_Awards_(Fixed)_Star Performers"])
      // setprojectAwardStarStratagicPerformer(response.data.result[7].Project_wards_(Strategic)_Star_Performers"])
      setSalesAward(response.data.result[9].Sales_awards)
      setSharedServices(response.data.result[10].Shared_Services)
      setTmSupportProjectsStarPerformer(response.data.result[11].TMSupport_Projects_Star_Performers)
      setTrueChampion(response.data.result[12].True_Champion)


    })

    
  }
  

  console.log(choice,"choice")
  console.log(coreValueAwards,"980989898")
  console.log(individualAwards,"individualAwards")
  console.log(JuryAwards,"JuryAwards")
  console.log(ManagedServices,"ManagedServices")
  console.log(MostValuabePlayer,"MostValuabePlayer")
  console.log(projectAwardStarPerformers,"projectAwardStarPerformers")
  console.log(projectAwardStarFixedPerformers,"projectAwardStarFixedPerformers")
  console.log(projectAwardStarStratagicPerformer,"projectAwardStarStratagicPerformer")
  console.log(salesAward,"salesAward")
  console.log(sharedServices,"sharedServices")
  console.log(tmSupportProjectsStarPerformer,"tmSupportProjectsStarPerformer")
  console.log(trueChampion,"trueChampion")
  console.log(result, "result")
  
  return(
    
    <div>
    <Buttons getData={getFormData} />
    <FullpageScroll results={result} choices = {choice}
    coreValueAward = {coreValueAwards}
    individualAward = {individualAwards}
    juryAward = {JuryAwards} 
    ManagedService = {ManagedServices}
    MostValuabePlayers ={MostValuabePlayer}
    projectAwardStarPerformer = {projectAwardStarPerformers}
    // projectAwardStarFixedPerformer = {projectAwardStarFixedPerformers}
    // projectAwardStarStratagicPerformers = {projectAwardStarStratagicPerformer}
    salesAwards = {salesAward}
    sharedService = {sharedServices}
    tmSupportProjectsStarPerformers = {tmSupportProjectsStarPerformer}
    trueChampions = {trueChampion}

    />
    </div>
  )





}

export default App;
