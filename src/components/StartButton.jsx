import React from "react";
import { StyledStartButton } from "./styles/StyledStartButton";
import { func } from "prop-types";

function StartButton(props) {
    const {handleClick} = props;
    return <StyledStartButton onClick={handleClick}>Start</StyledStartButton>
}

export default StartButton;

StartButton.propTypes = {
    handleClick: func,
}