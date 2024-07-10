import React from 'react';
import {TodoIcons} from './index.js';

function CompleteIcon(props) {
    return (
        <TodoIcons
            type="check"
            color={props.completed ? "green" : "gray"}
            onClick={props.onComplete}
        />
    );
}

export{ CompleteIcon };