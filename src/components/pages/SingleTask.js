import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import request from '../../utils/apis';

const REACT_APP_URL_API = process.env.REACT_APP_URL_API;


export default function SingleTask() {
    const [taskData, setTaskData] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();


    useEffect(() => {

        request(`${REACT_APP_URL_API}/tasks/${id}`)
            .then(task => {
                setTaskData({
                    ...taskData,
                    ...task
                })

            })
            .catch(error => console.log(error))

    }, [])


    const handleRemoveSingleTask = (taskId) => {

        request(`${REACT_APP_URL_API}/tasks/${taskId}`, 'DELETE')
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