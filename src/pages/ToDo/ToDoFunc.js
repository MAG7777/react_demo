import React, { useEffect } from "react";
import { useGetAllTasksQuery } from "../../store/api";
import { useSelector, useDispatch } from "react-redux";
import { getAllTasks } from "../../store/tasksReducer";
import Loading from "../../components/Loading/Loading";
import Tasks from "../../components/Tasks/Tasks";
import TaskFunc from "../../components/Tasks/TaskFunc";
import { Container, Row, Col, Button } from "react-bootstrap";




export default function ToDoFunc() {
    const { data, isError, isLoading } = useGetAllTasksQuery();
    const dispatch = useDispatch();
    const taskData = useSelector((state) => state.tasksReducer.toDoList);


    useEffect(()=>{
        if(data){
            dispatch(getAllTasks(data));
        }
    }, [data])


    return (
        <>
            {isLoading && <Loading />}
            <Container fluid>
                {/* <Row className="justify-content-center">
                    <Col className="text-center mt-5">
                        <Button
                            variant="info"
                            className="w-25"
                            onClick={this.toggleNewTaskModal}
                            disabled={checkedTasks.size}>
                            Add task
                        </Button>
                    </Col>
                </Row> */}

                <Row className="mt-5">
                    {

                        taskData?.map((item) => {
                            return (
                                <Col key={item.id} sm="12" md="6" lg="4" xl="3">
                                    <TaskFunc item={item} />
                                    {/* <Tasks item={item}
                                        handleRemoveSingleTask={this.handleRemoveSingleTask}
                                        handleCheckedTasks={this.handleCheckedTasks}
                                        disabledButton={checkedTasks.size}
                                        handleEditTask={this.handleEditTask}
                                    /> */}
                                </Col>
                            )
                        })
                    }
                </Row>
                {/* <Row className="justify-content-center" >
                    <Button
                        onClick={this.handleToggleShowCofirmModal}
                        variant="danger"
                        className="w-25 mt-5"
                        disabled={!checkedTasks.size}
                    >Remove checked tasks</Button>

                </Row> */}
                {/* <Confirm
                    show={toggleConfirmModal}
                    onHide={this.tooggleHide}
                    handleRemovedCheckedTasks={this.handleRemovedCheckedTasks}
                    count={checkedTasks.size}
                /> */}
                {/* {
                    !!editedTask &&
                    <EditModal
                        onClose={() => this.handleEditTask(null)}
                        editTaskData={editedTask}
                        onSave={this.handleSaveEditedTask}
                    />
                } */}
                {/* {
                    showNewTaskModal &&
                    <AddNewTaskModal
                        handleAddTask={this.handleAddTask}
                        onClose={this.toggleNewTaskModal}
                    />
                } */}
            </Container>
        </>)
}