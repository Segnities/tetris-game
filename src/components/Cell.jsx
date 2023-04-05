import { StyledCell } from "./styles/StyledCell";
import { TETROMINOS } from "../helpers/tetrominos";

function Cell({ type }) {
    return <StyledCell type={'L'} color={TETROMINOS['L'].color}>Cell</StyledCell>
}

export default Cell;