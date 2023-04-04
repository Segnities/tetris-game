import Display from "./Display";
import Stage from "./Stage";
import StartButton from "./StartButton";

import { createStage } from "../helpers/gameHelpers";

function Tetris() {
    return (
        <div>
            <Stage stage={createStage()}/>
            <div>
                <div>
                    <Display text="Score" />
                    <Display text="Rows" />
                    <Display text="Level" />
                </div>
                <StartButton />
            </div>
        </div>
    );
}

export default Tetris;