import { StyledDisplay } from "./styles/StyledDisplay";

function Display({gameOver = false, text}) {
    return <StyledDisplay gameOver={gameOver}>
        {text}
    </StyledDisplay>
}

export default Display;