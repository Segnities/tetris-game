import { StyledStartButton } from "./styles/StyledStartButton";

function StartButton({ handleClick }) {
    return <StyledStartButton onClick={handleClick}>Start</StyledStartButton>
}

export default StartButton;