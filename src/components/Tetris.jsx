import { useStage } from "../hooks/useStage";
import Display from "./Display";
import Stage from "./Stage";
import StartButton from "./StartButton";


import { StyledTetris, StyledTetrisWrapper, StyledTetrisAside } from "./styles/StyledTetris";

function Tetris() {
    const [stage, setStage] = useStage();

    return (
        <StyledTetrisWrapper>
            <StyledTetris>
                <Stage stage={stage} />
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