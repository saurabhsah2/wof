import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {buttonData } from './buttonData';
import { Button } from 'react-bootstrap';

const Buttons = ({getData}) => {
  //const [year,setYear]=useState("")
  // const getYearData=(event,data)=>{
  //    props.addYearData(data); 
  // }
  // const handleOnClick = (id) =>{
  //   // e.preventDefault()
  //   getData(id)
  //   console.log(id, "buttonsid")
  // }
  return (
    <>
      <div className="heading" id="heading">
        <div className="d-flex justify-content-center">
          <div>
            {buttonData.map((each) => (
              <button
                key={each.value}
                className="btn ml-2 ml-md-3 year-btn"
                style={{ marginLeft: "20px" }}
                
                onClick={() => getData(each.value)}
              >
                {each.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );

  // return (

  //   <div className='heading' id='heading'>
         
  //           <div className='d-flex justify-content-center'>
  //               <div>
                    
  //                   <Button className='btn ml-2-md-3 year-btn' id='btn-0' onClick={event=>getYearData(event,"working")}>2011-14</Button>
  //                   {/* <button className='btn ml-2 ml-md-3 year-btn' id='btn--1'onClick={()=>{}}>2011-2014</button> */}
  //                   <button className='btn ml-2 ml-md-3 year-btn' id='btn-0' onClick={console.log(10)}>2015</button>
  //                   <button className='btn ml-2 ml-md-3 year-btn' id='btn-1' onClick={console.log('Hello')}>2016</button>
  //                   <button className='btn ml-2 ml-md-3 year-btn' id='btn-2' onClick={console.log('Hello')}>2017</button>
  //                   <button className='btn ml-2 ml-md-3 year-btn' id='btn-3' onClick={console.log('Hello')}>2018</button>
  //                   <button className='btn ml-2 ml-md-3 year-btn' id='btn-4' onClick={console.log('Hello')}>2019</button>
  //                   <button className='btn ml-2 ml-md-3 year-btn' id='btn-5' onClick={console.log('Hello')}>2020</button>
  //                   <button className='btn ml-2 ml-md-3 year-btn' id='btn-6' onClick={console.log('Hello')}>2021</button>
  //               </div>
  //          </div>
  //        </div>
  // )
}

export default Buttons