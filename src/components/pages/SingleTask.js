import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router';
import Tasks from '../Tasks/Tasks';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

const REACT_APP_URL_API = process.env.REACT_APP_URL_API;


export default function SingleTask() {
    const [taskData, setTaskData] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    console.log(useState())


    useEffect(() => {

        fetch(`${REACT_APP_URL_API}/tasks/${id}`, {
            method: 'GET',
        })
            .then(response => {
                if (!response.ok) {
                    throw response.error
                }
                return response.json()
            })
            .then(task => {
                console.log('DDDDDD====>>>>', task);

                setTaskData({
                    ...taskData,
                    ...task
                })

            })
            .catch(error => console.log(error))

    }, [])


    const handleRemoveSingleTask = (taskId) => {

        fetch(`${REACT_APP_URL_API}/tasks/${taskId}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (!response.ok) {
                    throw response.error
                }
                return response.json()
            })
            .then(navigate('/'))
            .catch(error => console.log(error))


    }



    return (


        <>
            {
                taskData &&
                <>
                    <h6>{taskData.title}</h6>
                    <p>{taskData.description}</p>
                    <h5>{taskData.developer}</h5>
                </>
            }
            <Button
                className='m-2'
                variant="danger"
                onClick={() => handleRemoveSingleTask(id)}>
                <FontAwesomeIcon icon={faTrash} />
            </Button>
        </>

    )
}