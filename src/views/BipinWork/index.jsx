import React from 'react'
import { Box, Typography } from "@mui/material";
import textureImage from "../../assets/images/textureImage.png";
import BackButton from '../../ui-components/backButton';
import PracticeSteps from '../../ui-components/practiseSteps';
import ProgressBar from '../../ui-components/progressBar';
import WordSentencesMechanics from '../../mechanicsComponent/wordsSentences';
import VoiceAnalyser from '../../utils/VoiceAnalyser';


const BipinWork = () => {
    const stepsArr = [1,2,3,4]
    const currentStep = 2;
    const steps = 4;
    const words = ["Hello", "there" ,"Bipin" ,"how" ,"are" ,"you"];
    const matchedChar = "Hello there, how are you";
    const missingWord = "Bipin"
    const sampleProps = {
      callUpdateLearner: false,
      contentId: '12faa77371-f3e0-4aea-814c-ab5486835dfb345',
      livesData: { totalTargets: 10, totalLives: 5, redLivesToShow: 5, blackLivesToShow: 0, targetsForLives: NaN, targetPerLive: NaN },
      setLivesData: (newData) => console.log(newData),
      setVoiceAnimate: (animate) => console.log('Animating voice:', animate),
      setVoiceText: (text) => console.log('Voice text:', text),
      setRecordedAudio: (audio) => console.log('Recorded audio:', audio),
      setEnableNext: (enable) => console.log('Enable next:', enable),
      setOpenMessageDialog: (dialog) => console.log('Open message dialog:', dialog),
      isShowCase: false,
      dontShowListen: false,
      showOnlyListen: undefined,
      originalText: 'Sabari asked Ammachi if they could make coconut barfi.',
      playTeacherAudio: ()=>{console.log("hello there")},
      contentType: 'sentence',
      currentLine: 0,
      setEnableNext: undefined
    };
    
    const highlightWords =(word) => {
        if (word.includes(missingWord)) {
          return (
            <React.Fragment key={'workd-1'}>
              <Typography
                variant="h5"
                component="h4"
                ml={1}
                sx={{
                  fontSize: `16px`,
                  lineHeight: "normal",
                  fontWeight: 700,
                  fontFamily: "Quicksand",
                  lineHeight: "50px",
                  background: "#FFF0BD",
                }}
              >
                {word}
              </Typography>{" "}
            </React.Fragment>
          );
        } else {
          return (
            <Typography
              variant="h5"
              component="h4"
              ml={1}
              sx={{
                color: "#333F61",
                fontSize: `16px`,
                lineHeight: "normal",
                fontWeight: 700,
                fontFamily: "Quicksand",
                lineHeight: "50px",
              }}
              key={'word-1'}
            >
              {word + " "}
            </Typography>
          );
        }
      };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                // position: "fixed",
                background: "rgba(0, 0, 0, 0.5)",
                zIndex: 9999,
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    borderRadius: "20px",
                    display: "flex",
                    flexDirection: "column",
                    // alignItems: "center",
                    // justifyContent: "center",
                    backgroundImage: `url(${textureImage})`,
                    gap:10,
                    backgroundSize: "contain",
                    backgroundRepeat: "round",
                    boxShadow: "0px 4px 20px -1px rgba(0, 0, 0, 0.00)",
                    backdropFilter: "blur(25px)",
                }}
            >
                <br/>
                <div>
                    <span>Progress Bar:</span>
                    <div style={{position: "relative"}}><ProgressBar {...{stepsArr, currentStep, steps}}/></div>
                </div>
                <div>
                    <span>BackButton Component:</span>
                    <div style={{backgroundColor:"coral"}}><BackButton onClick={()=>null}/></div>
                </div>
                <div>
                    <span>Practice Step:</span>
                    <div><PracticeSteps/></div>
                </div>
                <div>
                    <span>Word sentence</span>
                    <div><WordSentencesMechanics  {...{words, matchedChar, highlightWords}} />
                    <span>Voice Analyzer</span>
                    <div style={{display:'flex', justifyContent:"center"}}><VoiceAnalyser {...sampleProps} /></div>
                    </div>
                </div>
                
            </Box>
        </Box>
    )
}

export default BipinWork;