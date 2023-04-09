import { useState } from "react";

import { useStage } from "../hooks/useStage";
import { usePlayer } from "../hooks/usePlayer"

import { createStage } from "../helpers/gameHelpers";

import Display from "./Display";
import Stage from "./Stage";
import StartButton from "./StartButton";


import { StyledTetris, StyledTetrisWrapper, StyledTetrisAside } from "./styles/StyledTetris";

function Tetris() {
    const [dropTime, setDropTime] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    const [player, updatePlayerPos, resetPlayer] = usePlayer();

    const [stage, setStage] = useStage(player);

    const movePlayer = (direction) => {
        updatePlayerPos({ x: direction, y: 0 });
    }

    const startGame = () => {
        //reset everything
        setStage(createStage());
        resetPlayer();
    }

    const drop = () => {
        updatePlayerPos({ x: 0, y: 1, collided: false });
    }

    const dropPlayer = () => {
        drop();
    }

    const move = ({ keyCode }) => {
        if (gameOver != false) {
            if (keyCode === 47) {
                movePlayer(-1);
            } else if (keyCode === 39) {
                movePlayer(1);
            } else if (keyCode === 40) {
                dropPlayer();
            }
        }
    }

    return (
        <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={(e) => move(e)}>
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
                                <StartButton onClick={startGame} />
                            </>
                        )
                    }

                </StyledTetrisAside>
            </StyledTetris>

        </StyledTetrisWrapper>
    );
}

export default Tetris;