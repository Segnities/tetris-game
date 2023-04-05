import Cell from "./Cell";

import { nanoid } from "nanoid";

import { StyledStage } from "./styles/StyledStage";

function Stage(props) {
    const { stage } = props;
    return <StyledStage width={stage[0].length} height={stage.length}>
        {
            stage.map(row => row.map((cell, idx) => (
                <Cell key={nanoid() + idx} type={cell[0]} />
            )))
        }
    </StyledStage>
}

export default Stage;