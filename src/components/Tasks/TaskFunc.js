import React, { useState } from "react";
import { useRemoveSingleTaskMutation, useSearchTaskQuery } from "../../store/api";
import { Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import classes from './tasks.module.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {
    removeSingleTask,
    editTask,
    saveCheckedTasks,
    setErrorMessage,
    setSuccessMessage
} from "../../store/tasksReducer";

export default function TaskFunc({ item }) {
    const checkedTasks = useSelector(state => state.tasksReducer.checkedTasks);
    const [isChecked, setIsChecked] = useState(false);
    const dispatch = useDispatch();
    const [deleteTasks, { isLoading, isError, data }] = useRemoveSingleTaskMutation();

    const handleRemoveSingleTask = (id) => {

        deleteTasks(id)
        // .unwrap(id)
            .then((res) => {
                console.log('RRRR=====>>', res);
                console.log('RESONSE DATA----->>>', data);
                if (res.error) throw new Error('Task did not delete !!!');
                dispatch(removeSingleTask(id));
                dispatch(setSuccessMessage(`Task ${res.title} successfuly deleted !!!`))
            })
            .catch((err) => {
                dispatch(setErrorMessage('Task did not delete !!!'))
                console.log(err)
            })
            
    }

    const toggleCheckbox = (id) => {
        dispatch(saveCheckedTasks(id))
    }

    return (
        <Card className={`${classes.card} ${isChecked ? classes.checkedTaskCard : ''}`}>
            <input
                onChange={() => toggleCheckbox(item.id)}
                className={`${classes.cardCeckbox} m-2`}
                type="checkbox"
            />
            <Card.Body>
                <Card.Title>
                    <Link to={`/task/${item.id}`}>
                        {item.title}
                    </Link>
                </Card.Title>
                <Card.Text>
                    {item.description}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>{item.importance}</ListGroup.Item>
                <ListGroup.Item>{item.developer}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Button
                    className='m-2'
                    disabled={checkedTasks.length > 0}
                    variant="danger"
                    onClick={() => handleRemoveSingleTask(item.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                </Button>
                <Button
                    className='m-2'
                    disabled={checkedTasks.length > 0}
                    variant="info"
                    onClick={() => dispatch(editTask(item))}
                >
                    <FontAwesomeIcon icon={faEdit} />
                </Button>

            </Card.Body>
        </Card>
    )
}