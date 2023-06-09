import React from "react";

import { StyledCell } from "./styles/StyledCell";
import { TETROMINOS } from "../helpers/tetrominos";
import { number } from "prop-types";

function Cell({ type }) {
    return <StyledCell type={type} color={TETROMINOS[type].color} />
}

export default React.memo(Cell);

Cell.propTypes = {
    type: number
}