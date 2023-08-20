import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { useRemoveCheckedTasksMutation } from '../store/api';
import { cleanCheckedTassk, getAllTasks, setErrorMessage, setSuccessMessage } from '../store/tasksReducer';
import { memo } from 'react';

function Confirm(props) {
    const checkedTasks = useSelector((state) => state.tasksReducer.checkedTasks);
    const toDoList = useSelector((state) => state.tasksReducer.toDoList);
    const dispatch = useDispatch();
    const [deleteMultipleTask, response] = useRemoveCheckedTasksMutation();

    const handleRemovedCheckedTasks = () => {
        let newToDoLiST = [...toDoList];
        deleteMultipleTask(checkedTasks)
            .then((obj) => {
                if(obj.error) throw new Error('Tasks did not removed !!!')
                console.log('obj response', obj);
                checkedTasks.forEach(itemId => {
                    newToDoLiST = newToDoLiST.filter(item => item.id !== itemId)
                })
                dispatch(getAllTasks(newToDoLiST));
                dispatch(cleanCheckedTassk());
                dispatch(setSuccessMessage('Tasks successfuly removed !!!'))
                props.onHide();

            })
            .catch((err) => {
                dispatch(setErrorMessage('Tasks did not removed !!!'))
                console.log(err)});
    }



    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Are you sure to remove {props.count} count of tasks ?
                </Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <Button variant='warning' onClick={handleRemovedCheckedTasks}>Confirm</Button>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}


export default memo(Confirm);