export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

/*
    original - [];
    original + stage-height - [[] * 20];
    original + stage-height + stage-with - [[[[0, 'clear']] * 12] * 20];
*/

export const createStage = () => {
    return Array.from(Array(STAGE_HEIGHT), () => {
        return new Array(STAGE_WIDTH).fill([0, 'clear']);
    });
};