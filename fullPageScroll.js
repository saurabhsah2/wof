import { React } from "react";
//import ReactFullpage from "@fullpage/react-fullpage";
import "./style.css";
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";
import Background1 from "../assets/backgroundImages/Background1.jpg";
import Background2 from "../assets/backgroundImages/Background2.png";
// import Background3 from '../assests/backgroundImages/background3.png'
// import Background4 from '../assests/backgroundImages/background4.png'
// import { styled } from '@mui/material/styles';
import Box from "@mui/material/Box";
// import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";
// import Harish from '../assess/2021/choice/Harish.png'
import Tippy from "@tippy.js/react";
import "./style.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { useState } from "react";
import IndividualAward from "./IndividualAward";
import CoreValue from "./CoreValue";
import Jury_Award from "./JuryAward";
import Managed_Service from "./ManagedServices";
import Sale_Awards from "./Sales_Award";
import Shared_Services from "./SharedServices";
import Tm_Support from "./TmSupportProjectStarPerformer";
import True_Champion from "./TrueChampion";
//import { ResultType } from "@remix-run/router/dist/utils";
// import { margin } from '@mui/system';

const FullpageScroll = (props) => {
  const {
    results,
    coreValueAward,
    individualAward,
    juryAward,
    ManagedService,
    MostValuabePlayers,
    projectAwardStarPerformer,
    projectAwardStarFixedPerformer,
    projectAwardStarStratagicPerformers,
    salesAwards,
    sharedService,
    tmSupportProjectsStarPerformers,
    trueChampions,
  } = props;

  console.log(results, "insideFullpagesecrion");
  // console.log(results[1].Core_Value_awards.length,"Valueone")
  console.log(coreValueAward.length, "ValueTwo");
  console.log(MostValuabePlayers.length, "valuetwo");
  // console.log(results[1].Core_Value_awards,"Valuetwo")

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Simple
    </Tooltip>
  );

  const sectionStyle = {
    height: "100vh",
    width: "100vw",
    display: "Flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundSize: "cover",
    // backgroundImage : `url(${Background1})`
    font: "white",
  };
  const Corevalue = ()=>
  {
    return 
  }
  return (
    <Fullpage>
      <FullpageNavigation />
      <FullPageSections>
        {/* <IndividualAward individualAward={individualAward}/> */}
        <CoreValue coreValueAward={coreValueAward}/>
        {/* <Jury_Award juryAward={juryAward}/>
        <Managed_Service ManagedService={ManagedService}/> */}
        <Sale_Awards salesAwards={salesAwards}/>
        <Shared_Services sharedService={sharedService}/>
        <Tm_Support tmSupportProjectsStarPerformers = {tmSupportProjectsStarPerformers}/>
        <True_Champion trueChampions = {trueChampions}/>
      
{/* 
        {ManagedService.length > 0 && (
          <FullpageSection
            style={{ ...sectionStyle, backgroundImage: `url(${Background1})` }}
          >
            <Box
              className="fullbox"
              style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundSize: "cover",
                overflow: "hidden",
                padding: "100px",
              }}
            >
              <Grid
                container
                spacing={3}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  flexDirection: "row",
                  margin: "10px",
                  textAlign: "center",
                  border: "10px",
                }}
              >
                <>
                  <Grid item xs="12">
                    <div className="navigators">Managed Services</div>
                  </Grid>
                  {ManagedService.map((each) => {
                    console.log(each, "valueThree");
                    // console.log(each.award_name, "798987")
                    const images = each.image_urls;
                    console.log(images, "imagesurl");
                    return (
                      <Grid item xs="auto">
                        <div>
                          {images.map((eachImg) => {
                            console.log(eachImg, "0909098");
                            return (
                              <img
                                src={require(`../${eachImg}`)}
                                className="c-class-margin c-class-image"
                                alt=""
                              />
                            );
                          })}
                        </div>
                        <h1
                          style={{
                            fontFamily: "Rochester",
                            color: "white",
                            fontSize: "30px",
                          }}
                        >
                          {each.award_name}
                        </h1>
                      </Grid>
                    );
                  })}
                </>
              </Grid>
            </Box>
          </FullpageSection>
        )} */}

        {/* {MostValuabePlayers.length > 0 && (
          <>
          <FullpageSection
            style={{ ...sectionStyle, backgroundImage: `url(${Background1})` }}
          >
            <Box
              className="fullbox"
              style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundSize: "cover",
                overflow: "hidden",
                padding: "100px",
              }}
            >
              <Grid
                container
                spacing={3}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  flexDirection: "row",
                  margin: "10px",
                  textAlign: "center",
                  border: "10px",
                }}
              >
                <>
                  <Grid item xs="12">
                    <div className="navigators">MostValuabe Players</div>
                  </Grid>
                  {MostValuabePlayers.map((each) => {
                    console.log(each, "valueThree");
                    // console.log(each.award_name, "798987")
                    const images = each.image_urls;
                    console.log(images, "imagesurl");
                    return (
                      <Grid item xs="auto">
                        <div>
                          {images.map((eachImg) => {
                            console.log(eachImg, "0909098");
                            return (
                              <img
                                src={require(`../${eachImg}`)}
                                className="c-class-margin c-class-image"
                                alt=""
                              />
                            );
                          })}
                        </div>
                        <h1
                          style={{
                            fontFamily: "Rochester",
                            color: "white",
                            fontSize: "30px",
                          }}
                        >
                          {each.award_name}
                        </h1>
                      </Grid>
                    );
                  })}
                </>
              </Grid>
            </Box>
          </FullpageSection>
          </>
          
        )} */}

      //   {projectAwardStarPerformer.length > 0 && (
      //   <FullpageSection
      //     style={{ ...sectionStyle, backgroundImage: `url(${Background1})` }}
      //   >
      //     <Box
      //       className="fullbox"
      //       style={{
      //         height: "100vh",
      //         display: "flex",
      //         flexDirection: "column",
      //         justifyContent: "center",
      //         alignItems: "center",
      //         backgroundSize: "cover",
      //         overflow: "hidden",
      //         padding: "100px",
      //       }}
      //     >
      //       <Grid
      //         container
      //         spacing={3}
      //         style={{
      //           display: "flex",
      //           alignItems: "center",
      //           justifyContent: "space-around",
      //           flexDirection: "row",
      //           margin: "10px",
      //           textAlign: "center",
      //           border: "10px",
      //         }}
      //       >
      //         <>
      //           <Grid item xs="12">
      //             <div className="navigators">Core Value Awards</div>
      //           </Grid>
      //           {projectAwardStarPerformer.map((each) => {
      //             console.log(each, "valueThree");
      //             // console.log(each.award_name, "798987")
      //             const images = each.image_urls;
      //             console.log(images, "imagesurl");
      //             return (
      //               <Grid item xs="auto">
      //                 <div>
      //                   {images.map((eachImg) => {
      //                     console.log(eachImg, "0909098");
      //                     return (
      //                       <img
      //                         src={require(`../${eachImg}`)}
      //                         className="c-class-margin c-class-image"
      //                         alt=""
      //                       />
      //                     );
      //                   })}
      //                 </div>
      //                 <h1
      //                   style={{
      //                     fontFamily: "Rochester",
      //                     color: "white",
      //                     fontSize: "30px",
      //                   }}
      //                 >
      //                   {each.award_name}
      //                 </h1>
      //               </Grid>
      //             );
      //           })}
      //         </>
      //       </Grid>
      //     </Box>
      //   </FullpageSection>
      // )}

        // {/* {projectAwardStarFixedPerformer.length > 0 && (
        //   <FullpageSection
        //     style={{ ...sectionStyle, backgroundImage: `url(${Background1})` }}
        //   >
        //     <Box
        //       className="fullbox"
        //       style={{
        //         height: "100vh",
        //         display: "flex",
        //         flexDirection: "column",
        //         justifyContent: "center",
        //         alignItems: "center",
        //         backgroundSize: "cover",
        //         overflow: "hidden",
        //         padding: "100px",
        //       }}
        //     >
        //       <Grid
        //         container
        //         spacing={3}
        //         style={{
        //           display: "flex",
        //           alignItems: "center",
        //           justifyContent: "space-around",
        //           flexDirection: "row",
        //           margin: "10px",
        //           textAlign: "center",
        //           border: "10px",
        //         }}
        //       >
        //         <>
        //           <Grid item xs="12">
        //             <div className="navigators">Core Value Awards</div>
        //           </Grid>
        //           {projectAwardStarFixedPerformer.map((each) => {
        //             console.log(each, "valueThree");
        //             // console.log(each.award_name, "798987")
        //             const images = each.image_urls;
        //             console.log(images, "imagesurl");
        //             return (
        //               <Grid item xs="auto">
        //                 <div>
        //                   {images.map((eachImg) => {
        //                     console.log(eachImg, "0909098");
        //                     return (
        //                       <img
        //                         src={require(`../${eachImg}`)}
        //                         className="c-class-margin c-class-image"
        //                         alt=""
        //                       />
        //                     );
        //                   })}
        //                 </div>
        //                 <h1
        //                   style={{
        //                     fontFamily: "Rochester",
        //                     color: "white",
        //                     fontSize: "30px",
        //                   }}
        //                 >
        //                   {each.award_name}
        //                 </h1>
        //               </Grid>
        //             );
        //           })}
        //         </>
        //       </Grid>
        //     </Box>
        //   </FullpageSection>
        // )}

        // {projectAwardStarStratagicPerformers.length > 0 && (
        //   <FullpageSection
        //     style={{ ...sectionStyle, backgroundImage: `url(${Background1})` }}
        //   >
        //     <Box
        //       className="fullbox"
        //       style={{
        //         height: "100vh",
        //         display: "flex",
        //         flexDirection: "column",
        //         justifyContent: "center",
        //         alignItems: "center",
        //         backgroundSize: "cover",
        //         overflow: "hidden",
        //         padding: "100px",
        //       }}
        //     >
        //       <Grid
        //         container
        //         spacing={3}
        //         style={{
        //           display: "flex",
        //           alignItems: "center",
        //           justifyContent: "space-around",
        //           flexDirection: "row",
        //           margin: "10px",
        //           textAlign: "center",
        //           border: "10px",
        //         }}
        //       >
        //         <>
        //           <Grid item xs="12">
        //             <div className="navigators">Core Value Awards</div>
        //           </Grid>
        //           {projectAwardStarStratagicPerformers.map((each) => {
        //             console.log(each, "valueThree");
        //             // console.log(each.award_name, "798987")
        //             const images = each.image_urls;
        //             console.log(images, "imagesurl");
        //             return (
        //               <Grid item xs="auto">
        //                 <div>
        //                   {images.map((eachImg) => {
        //                     console.log(eachImg, "0909098");
        //                     return (
        //                       <img
        //                         src={require(`../${eachImg}`)}
        //                         className="c-class-margin c-class-image"
        //                         alt=""
        //                       />
        //                     );
        //                   })}
        //                 </div>
        //                 <h1
        //                   style={{
        //                     fontFamily: "Rochester",
        //                     color: "white",
        //                     fontSize: "30px",
        //                   }}
        //                 >
        //                   {each.award_name}
        //                 </h1>
        //               </Grid>
        //             );
        //           })}
        //         </>
        //       </Grid>
        //     </Box>
        //   </FullpageSection>
        // )} */}

        //  {salesAwards.length > 0 && (
        //   <FullpageSection
        //     style={{ ...sectionStyle, backgroundImage: `url(${Background1})` }}
        //   >
        //     <Box
        //       className="fullbox"
        //       style={{
        //         height: "100vh",
        //         display: "flex",
        //         flexDirection: "column",
        //         justifyContent: "center",
        //         alignItems: "center",
        //         backgroundSize: "cover",
        //         overflow: "hidden",
        //         padding: "100px",
        //       }}
        //     >
        //       <Grid
        //         container
        //         spacing={3}
        //         style={{
        //           display: "flex",
        //           alignItems: "center",
        //           justifyContent: "space-around",
        //           flexDirection: "row",
        //           margin: "10px",
        //           textAlign: "center",
        //           border: "10px",
        //         }}
        //       >
        //         <>
        //           <Grid item xs="12">
        //             <div className="navigators">Core Value Awards</div>
        //           </Grid>
        //           {salesAwards.map((each) => {
        //             console.log(each, "valueThree");
        //             // console.log(each.award_name, "798987")
        //             const images = each.image_urls;
        //             console.log(images, "imagesurl");
        //             return (
        //               <Grid item xs="auto">
        //                 <div>
        //                   {images.map((eachImg) => {
        //                     console.log(eachImg, "0909098");
        //                     return (
        //                       <img
        //                         src={require(`../${eachImg}`)}
        //                         className="c-class-margin c-class-image"
        //                         alt=""
        //                       />
        //                     );
        //                   })}
        //                 </div>
        //                 <h1
        //                   style={{
        //                     fontFamily: "Rochester",
        //                     color: "white",
        //                     fontSize: "30px",
        //                   }}
        //                 >
        //                   {each.award_name}
        //                 </h1>
        //               </Grid>
        //             );
        //           })}
        //         </>
        //       </Grid>
        //     </Box>
        //   </FullpageSection>
        // )}

        // {sharedService.length > 0 && (
        //   <FullpageSection
        //     style={{ ...sectionStyle, backgroundImage: `url(${Background1})` }}
        //   >
        //     <Box
        //       className="fullbox"
        //       style={{
        //         height: "100vh",
        //         display: "flex",
        //         flexDirection: "column",
        //         justifyContent: "center",
        //         alignItems: "center",
        //         backgroundSize: "cover",
        //         overflow: "hidden",
        //         padding: "100px",
        //       }}
        //     >
        //       <Grid
        //         container
        //         spacing={3}
        //         style={{
        //           display: "flex",
        //           alignItems: "center",
        //           justifyContent: "space-around",
        //           flexDirection: "row",
        //           margin: "10px",
        //           textAlign: "center",
        //           border: "10px",
        //         }}
        //       >
        //         <>
        //           <Grid item xs="12">
        //             <div className="navigators">Core Value Awards</div>
        //           </Grid>
        //           {sharedService.map((each) => {
        //             console.log(each, "valueThree");
        //             // console.log(each.award_name, "798987")
        //             const images = each.image_urls;
        //             console.log(images, "imagesurl");
        //             return (
        //               <Grid item xs="auto">
        //                 <div>
        //                   {images.map((eachImg) => {
        //                     console.log(eachImg, "0909098");
        //                     return (
        //                       <img
        //                         src={require(`../${eachImg}`)}
        //                         className="c-class-margin c-class-image"
        //                         alt=""
        //                       />
        //                     );
        //                   })}
        //                 </div>
        //                 <h1
        //                   style={{
        //                     fontFamily: "Rochester",
        //                     color: "white",
        //                     fontSize: "30px",
        //                   }}
        //                 >
        //                   {each.award_name}
        //                 </h1>
        //               </Grid>
        //             );
        //           })}
        //         </>
        //       </Grid>
        //     </Box>
        //   </FullpageSection>
        // )}

        // {tmSupportProjectsStarPerformers.length > 0 && (
        //   <FullpageSection
        //     style={{ ...sectionStyle, backgroundImage: `url(${Background1})` }}
        //   >
        //     <Box
        //       className="fullbox"
        //       style={{
        //         height: "100vh",
        //         display: "flex",
        //         flexDirection: "column",
        //         justifyContent: "center",
        //         alignItems: "center",
        //         backgroundSize: "cover",
        //         overflow: "hidden",
        //         padding: "100px",
        //       }}
        //     >
        //       <Grid
        //         container
        //         spacing={3}
        //         style={{
        //           display: "flex",
        //           alignItems: "center",
        //           justifyContent: "space-around",
        //           flexDirection: "row",
        //           margin: "10px",
        //           textAlign: "center",
        //           border: "10px",
        //         }}
        //       >
        //         <>
        //           <Grid item xs="12">
        //             <div className="navigators">Core Value Awards</div>
        //           </Grid>
        //           {tmSupportProjectsStarPerformers.map((each) => {
        //             console.log(each, "valueThree");
        //             // console.log(each.award_name, "798987")
        //             const images = each.image_urls;
        //             console.log(images, "imagesurl");
        //             return (
        //               <Grid item xs="auto">
        //                 <div>
        //                   {images.map((eachImg) => {
        //                     console.log(eachImg, "0909098");
        //                     return (
        //                       <img
        //                         src={require(`../${eachImg}`)}
        //                         className="c-class-margin c-class-image"
        //                         alt=""
        //                       />
        //                     );
        //                   })}
        //                 </div>
        //                 <h1
        //                   style={{
        //                     fontFamily: "Rochester",
        //                     color: "white",
        //                     fontSize: "30px",
        //                   }}
        //                 >
        //                   {each.award_name}
        //                 </h1>
        //               </Grid>
        //             );
        //           })}
        //         </>
        //       </Grid>
        //     </Box>
        //   </FullpageSection>
        // )}

        // {trueChampions.length > 0 && (
        //   <FullpageSection
        //     style={{ ...sectionStyle, backgroundImage: `url(${Background1})` }}
        //   >
        //     <Box
        //       className="fullbox"
        //       style={{
        //         height: "100vh",
        //         display: "flex",
        //         flexDirection: "column",
        //         justifyContent: "center",
        //         alignItems: "center",
        //         backgroundSize: "cover",
        //         overflow: "hidden",
        //         padding: "100px",
        //       }}
        //     >
        //       <Grid
        //         container
        //         spacing={3}
        //         style={{
        //           display: "flex",
        //           alignItems: "center",
        //           justifyContent: "space-around",
        //           flexDirection: "row",
        //           margin: "10px",
        //           textAlign: "center",
        //           border: "10px",
        //         }}
        //       >
        //         <>
        //           <Grid item xs="12">
        //             <div className="navigators">Core Value Awards</div>
        //           </Grid>
        //           {trueChampions.map((each) => {
        //             console.log(each, "valueThree");
        //             // console.log(each.award_name, "798987")
        //             const images = each.image_urls;
        //             console.log(images, "imagesurl");
        //             return (
        //               <Grid item xs="auto">
        //                 <div>
        //                   {images.map((eachImg) => {
        //                     console.log(eachImg, "0909098");
        //                     return (
        //                       <img
        //                         src={require(`../${eachImg}`)}
        //                         className="c-class-margin c-class-image"
        //                         alt=""
        //                       />
        //                     );
        //                   })}
        //                 </div>
        //                 <h1
        //                   style={{
        //                     fontFamily: "Rochester",
        //                     color: "white",
        //                     fontSize: "30px",
        //                   }}
        //                 >
        //                   {each.award_name}
        //                 </h1>
        //               </Grid>
        //             );
        //           })}
        //         </>
        //       </Grid>
        //     </Box>
        //   </FullpageSection>
        // )} 
      </FullPageSections>
    </Fullpage>
  );
};

export default FullpageScroll;
