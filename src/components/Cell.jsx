import { StyledCell } from "./styles/StyledCell";
import { TETROMINOS } from "../helpers/tetrominos";

function Cell({ type }) {
    return <StyledCell type={type} color={TETROMINOS[type].color} />
}

export default Cell;