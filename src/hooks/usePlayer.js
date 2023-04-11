import { useState, useCallback } from 'react';

import { TETROMINOS, randomTetromino } from '../helpers/tetrominos';
import { STAGE_WIDTH, checkCollision } from '../helpers/gameHelpers';

export const usePlayer = () => {
    const [player, setPlayer] = useState({
        pos: { x: 0, y: 0 },
        tetromino: TETROMINOS[0].shape,
        collided: false,
    });

    const updatePlayerPos = ({ x, y, collided }) => {
        setPlayer(prev => ({
            ...prev,
            pos: { x: prev.pos.x + x, y: prev.pos.y + y },
            collided,
        }));
    };

    const rotate = (matrix, direction) => {
        //Rows become cols
        const rotatedTetromino = matrix.map((_rw, index) => matrix.map((col) => col[index]));
        //Reverse each row to get rotated matrix
        if (direction > 0) {
            return rotatedTetromino.map(row => row.reverse());
        }
        return rotatedTetromino.reverse();
    };

    const tetrominoRotate = (stage, direction) => {
        const playerClone = Object.assign({}, player);

        playerClone.tetromino = rotate(playerClone.tetromino, direction);

        const posX = playerClone.pos.x;
        let offset = 1;

        while(checkCollision(playerClone, stage, {x: 0, y: 0})) {
            playerClone.pos.x += offset;
            offset = - (offset + (offset > 0 ? 1 : -1));
            
            if(offset > playerClone.tetromino[0].length) {
                rotate(playerClone.tetromino, -direction);
                playerClone.pos.x = posX;
                return;
            }
        }

        setPlayer(playerClone);
    };

    const resetPlayer = useCallback(() => {
        setPlayer({
            pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
            tetromino: randomTetromino().shape,
            collided: false,
        });
    }, []);

    return [player, updatePlayerPos, resetPlayer, tetrominoRotate];
};