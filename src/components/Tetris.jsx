import Display from "./Display";
import Stage from "./Stage";
import StartButton from "./StartButton";

import { createStage } from "../helpers/gameHelpers";

import { StyledTetris, StyledTetrisWrapper, StyledTetrisAside } from "./styles/StyledTetris";

function Tetris() {
    return (
        <StyledTetrisWrapper>
            <StyledTetris>
                <Stage stage={createStage()} /> 
                <StyledTetrisAside>
                    <div>
                        <Display text="Score" />
                        <Display text="Rows" />
                        <Display text="Level" />
                    </div>
                    <StartButton />
                </StyledTetrisAside>
            </StyledTetris>

        </StyledTetrisWrapper>
    );
}

export default Tetris;