import Cell from "./Cell";

import { nanoid } from "nanoid";

function Stage(props) {
    const { stage } = props;
    return <div>
        {
            stage.map(row => row.map((cell, idx) => (
                <Cell key={nanoid() + idx} type={cell[0]} />
            )))
        }
    </div>
}

export default Stage;