import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

export const StepProgressBar = () => {
    return (

      <ProgressBar
          percent={25}
          filledBackground="linear-gradient(to right, #ff9296, #ff9296)"
        >
          <Step transition="scale">
            {({ accomplished }) => (
              <img
                style={{ filter: `grayscale(${accomplished ? 0 : 100}%)` }}
                width="30"
                src="img/koloCzerwone.png"
              />
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished }) => (
              <img
                style={{ filter: `grayscale(${accomplished ? 0 : 100}%)` }}
                width="30"
                src="img/koloCzerwone.png"
              />
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished }) => (
              <img
                style={{ filter: `grayscale(${accomplished ? 0 : 100}%)` }}
                width="30"
                src="img/koloCzerwone.png"
              />
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished }) => (
              <img
                style={{ filter: `grayscale(${accomplished ? 0 : 100}%)` }}
                width="30"
                src="img/koloCzerwone.png"
              />
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished }) => (
              <img
                style={{ filter: `grayscale(${accomplished ? 0 : 100}%)` }}
                width="30"
                src="img/koloCzerwone.png"
              />
            )}
          </Step>
        </ProgressBar>
    )
};


export default StepProgressBar
