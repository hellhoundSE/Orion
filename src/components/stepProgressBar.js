import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

export const StepProgressBar = (props) => {
  /*const [progress, setProgress] = useState(50);
  if (this.props.progressPercent) {
    setProgress((prev) =>  this.props.progressPercent)
  }*/
    return (

      <ProgressBar
          percent={props.progressPercent}
          fillBackground="linear-gradient(to right, red, red)"
          filledBackground="linear-gradient(to right, #ff9296, #ff9296)"
          unfilledBackground="linear-gradient(to right, #999999, #aaaaaa)"
        >
          <Step transition="scale">
            {({ accomplished }) => (
              <img
                style={{ filter: `grayscale(${accomplished ? 0 : 100}%)` }}
                width="30"
                src="/img/koloCzerwone.png"
              />
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished }) => (
              <img
                style={{ filter: `grayscale(${accomplished ? 0 : 100}%)` }}
                width="30"
                src="/img/koloCzerwone.png"
              />
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished }) => (
              <img
                style={{ filter: `grayscale(${accomplished ? 0 : 100}%)` }}
                width="30"
                src="/img/koloCzerwone.png"
              />
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished }) => (
              <img
                style={{ filter: `grayscale(${accomplished ? 0 : 100}%)` }}
                width="30"
                src="/img/koloCzerwone.png"
              />
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished }) => (
              <img
                style={{ filter: `grayscale(${accomplished ? 0 : 100}%)` }}
                width="30"
                src="/img/koloCzerwone.png"
              />
            )}
          </Step>
        </ProgressBar>
    )
};


export default StepProgressBar
