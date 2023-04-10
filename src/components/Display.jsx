import React from "react";

import { StyledDisplay } from "./styles/StyledDisplay";
import { bool, string } from "prop-types";

function Display({gameOver = false, text}) {
    return <StyledDisplay gameOver={gameOver}>
        {text}
    </StyledDisplay>
}

export default Display;

Display.propTypes = {
    gameOver: bool,
    text: string
}