import React, { useState } from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import { useDispatch, useSelector } from "react-redux";
import Theme from "./theme";
import { setFontSize } from "@/features/theme";

const StepProgressBar = () => {
  const dispatch = useDispatch()
  const color = useSelector(state => state.theme.color)
  let [percentage, setPercentage] = useState(50)
  const { fontSize } = Theme()

 return (
    <ProgressBar
    filledBackground={color}
    percent={percentage}
    height="4px"
    >
      <Step transition="scale">
        {({ accomplished, index }) => (
          <div
            className={`transitionStep ${accomplished ? "accomplished" : null}`}
          >
            <div className={`${percentage === 0 ? 'w-4 h-4' : 'w-3 h-3'} cursor-pointer rounded-full`} style={{ background: color }} onClick={() => {
              setPercentage(0)
              dispatch(setFontSize(fontSize[0]))
            }} />
          </div>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished }) => (
         <div
         className={`transitionStep ${accomplished ? "accomplished" : null}`}
       >
         <div className={`${percentage === 25 ? 'w-4 h-4' : 'w-3 h-3'} cursor-pointer rounded-full`} style={{ background: color }} onClick={() => {
           setPercentage(25)
           dispatch(setFontSize(fontSize[1]))
         }} />
       </div>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished }) => (
          <div
          className={`transitionStep ${accomplished ? "accomplished" : null}`}
        >
          <div className={`${percentage === 50 ? 'w-4 h-4' : 'w-3 h-3'} cursor-pointer rounded-full`} style={{ background: color }} onClick={() => {
            setPercentage(50)
            dispatch(setFontSize(fontSize[2]))
          }} />
        </div>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished }) => (
          <div
          className={`transitionStep ${accomplished ? "accomplished" : null}`}
        >
          <div className={`${percentage === 75 ? 'w-4 h-4' : 'w-3 h-3'} cursor-pointer rounded-full`} style={{ background: color }} onClick={() => {
            setPercentage(75)
            dispatch(setFontSize(fontSize[3]))
          }} />
        </div>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished }) => (
          <div
          className={`transitionStep ${accomplished ? "accomplished" : null}`}
        >
          <div className={`${percentage === 100 ? 'w-4 h-4' : 'w-3 h-3'} cursor-pointer rounded-full`} style={{ background: color }} onClick={() => {
            setPercentage(100)
            dispatch(setFontSize(fontSize[4]))
          }} />
        </div>
        )}
      </Step>
    </ProgressBar>
  );
}

export default StepProgressBar