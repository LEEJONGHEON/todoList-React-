
import {ListItem, ListItemText, InputBase, Checkbox} from "@mui/material";
import { useState } from "react";

const Todo = (props) => {
    const [state, SetState] = useState({item: props.item});

    const {id,title,done} = state.item;

    return (
        <ListItem>
            <Checkbox Checkbox={done}/>
            <ListItemText>
                <InputBase
                        inputProps={{"aria-label" : "naked"}}
                        type="text"
                        id={id}
                        name={id}
                        value={title}
                        multiline={true}
                        fullWidth={true}
                    />
            </ListItemText>
        </ListItem>
    );
}

export default Todo;