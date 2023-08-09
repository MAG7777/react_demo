import React, { useState } from "react";
import { useRemoveSingleTaskMutation , useSearchTaskQuery} from "../../store/api";
import { Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import classes from './tasks.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { removeSingleTask } from "../../store/tasksReducer";

export default function TaskFunc({ item }) {
    const [isChecked, setIsChecked] = useState(false);
    const dispatch = useDispatch();
    const [deleteTasks, response] = useRemoveSingleTaskMutation();

    const handleRemoveSingleTask = (id) => {
        console.log('RRRRR', response);

        deleteTasks(id)
            .then((resTest) => {
                console.log('RRRRR INSIDE THEN', resTest);
                dispatch(removeSingleTask(id))
            })
            .catch((err) => console.log(err))
    }

    return (
        <Card className={`${classes.card} ${isChecked ? classes.checkedTaskCard : ''}`}>
            <input
                onChange={() => this.toggleCheckbox(item.id)}
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
                    // disabled={disabledButton}
                    variant="danger"
                    onClick={() => handleRemoveSingleTask(item.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                </Button>
                <Button
                    className='m-2'
                    // disabled={disabledButton}
                    variant="info"
                // onClick={() => handleEditTask(item)}
                >
                    <FontAwesomeIcon icon={faEdit} />
                </Button>

            </Card.Body>
        </Card>
    )
}