import React from "react";

import { StyledCell } from "./styles/StyledCell";
import { TETROMINOS } from "../helpers/tetrominos";
import { string } from "prop-types";

function Cell({ type }) {
    return <StyledCell type={type} color={TETROMINOS[type].color} />
}

export default Cell;

Cell.propTypes = {
    type:string
}