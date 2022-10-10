import React from "react";
import Buttons from "./Buttons";
import Anshul from "../assets/intro/anshul.png";
import Balesh from "../assets/intro/balesh.png";
import Shubham from "../assets/intro/shubham.png";
import Background from "../assets/backgroundImages/Background1.jpg"
import './style.css'
const Aawrds =()=>
{
    return (
        <>


        <div className='bg awards11' >
     
        <div className="d-flex flex-column align-items-center" style={{width:"100%",justifyContent:"space-around",flexWrap:"wrap",marginTop:"20vh"}} >
         
        <div className="jury-flex" id="starPerformerAwards">
            <div className="img-brick">
                <div className="img-space">
                    <img src={Anshul} alt=""/>
                </div>
                <div className="img-info">
                    <span>Anshul</span>
                </div>
            </div>
            <div className="img-brick">
                <div className="img-space">
                    <img src={Balesh} alt=""/>
                </div>
                <div className="img-info">
                    <span>Balesh</span>
                </div>
            </div>
            <div className="img-brick">
                <div className="img-space">
                    <img src={Shubham} alt=""/>
                </div>
                <div className="img-info">
                    <span>Shubham</span>
                </div>
            </div>
          
        </div>
        <div className="journey-block">
            <span className="journey-rich">Journey of ABSYZ till 2014</span>
            <span className="journey-text">
                The foundation of ABSYZ was laid on 18-11-2011, and then there was a journey of three passionate persons who had a dream to make it big and create a niche for the company in the market.
     The technology was bound to impact, and there was a clear vision for future success.  Also, there was a steady scaling up of operations, professionalism, and commitment.
     It was a confluence of expertise, experience, and the burning desire to make a mark and emerge as a winner. Till 2014 there were endless efforts, cooperation, coordination, and tenacity in acquiring the deals.
     Cloud Technology indeed had a silver lining, and all the sincere efforts received a reward. New roles, new talents, and new teams joined and created a spark within them. This was how the decade-long journey commenced and yielded one of the best results in the IT Sector in Hyderabad.
     The idea, grandeur, and vision had made substantial progress. It was utterly a journey marked with understanding, learnings, and finding the apt solutions. ABSYZ had known where it was standing and where it needed to go in the next few years. 
            </span>
        </div>
         </div>
        </div>
     </>
    )
}
export default Aawrds;