import Display from "./Display";
import Stage from "./Stage";
import StartButton from "./StartButton";

function Tetris() {
    return (
        <div>
            <Stage />
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