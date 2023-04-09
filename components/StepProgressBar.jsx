import React, { useState } from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import { useSelector } from "react-redux";

const StepProgressBar = () => {

  const color = 'black'
  let [percentage, setPercentage] = useState(50)

 return (
    <ProgressBar
    filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
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

          }} />
        </div>
        )}
      </Step>
    </ProgressBar>
  );
}

export default StepProgressBar