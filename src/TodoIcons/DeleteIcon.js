import React from 'react';
import { TodoIcons} from './index.js';

function DeleteIcon(props) {
    return (
        <TodoIcons
            type="delete"
            color="gray"
            onClick={props.onDelete}
        />
    );
}

export{ DeleteIcon};