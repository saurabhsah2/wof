import { FullpageSection } from "@ap.cx/react-fullpage";
import React from "react";
import Box from "@mui/material/Box";
import Background1 from "../assets/backgroundImages/Background1.jpg";
// import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";
import "./style.css";

const  Tm_Support= (props) =>{
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
   return  <>
        {props.tmSupportProjectsStarPerformers.length > 0 && (
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
                    <div className="navigators">Core Value Awards</div>
                  </Grid>
                  {props.tmSupportProjectsStarPerformers.map((each) => {
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
        )}
  </>
}

export default Tm_Support;