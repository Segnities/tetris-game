import { useState } from "react";

import { useStage } from "../hooks/useStage";
import { usePlayer } from "../hooks/usePlayer"

import Display from "./Display";
import Stage from "./Stage";
import StartButton from "./StartButton";


import { StyledTetris, StyledTetrisWrapper, StyledTetrisAside } from "./styles/StyledTetris";

function Tetris() {
    const [dropTime, setDropTime] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    const [stage, setStage] = useStage();
    const [player] = usePlayer();

    return (
        <StyledTetrisWrapper>
            <StyledTetris>
                <Stage stage={stage} />
                <StyledTetrisAside>
                    {
                        gameOver ? <Display gameOver={gameOver} text="Game over" /> : (
                            <>
                                <div>
                                    <Display text="Score" />
                                    <Display text="Rows" />
                                    <Display text="Level" />
                                </div>
                                <StartButton />
                            </>
                        )
                    }

                </StyledTetrisAside>
            </StyledTetris>

        </StyledTetrisWrapper>
    );
}

export default Tetris;