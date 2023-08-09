import React, { useEffect, useState } from "react";
import { useGetAllTasksQuery, useSearchTaskQuery } from "../../store/api";
import { useSelector, useDispatch } from "react-redux";
import { getAllTasks } from "../../store/tasksReducer";
import Loading from "../../components/Loading/Loading";
import TaskFunc from "../../components/Tasks/TaskFunc";
import BasicExample from "../../components/SearchDropDown/SearchDropdown";
import { Container, Row, Col, Button } from "react-bootstrap";
import AddNewTaskModalFunc from "../../components/AddNewTask/AddNewTaskModalFunc";




export default function ToDoFunc() {
    const [showNewTaskModal, setShowNewTaskModal] = useState(false);
    const [searchText, setSearchText] = useState('');
    const { data, isError, isLoading } = useGetAllTasksQuery();

    const { data: searchResults } = useSearchTaskQuery(searchText);
    console.log('SSSSSSSSSSSSSSSS=====>>>', searchResults);
    const dispatch = useDispatch();
    const taskData = useSelector((state) => state.tasksReducer.toDoList);


    useEffect(() => {
        if (data) {
            dispatch(getAllTasks(data));
        }
    }, [data])


    const toogleMOdal = () => {
        setShowNewTaskModal(prev => !prev)
    }

    const handleSearchChange = (event) => {
        setSearchText(event.target.value)
    }

    return (
        <>
            {isLoading && <Loading />}
            <Container fluid>
                <Row className="justify-content-center">
                    <Col className="text-center mt-5">
                        <Button
                            variant="info"
                            className="w-25"
                            onClick={() => { setShowNewTaskModal(prev => !prev) }}
                        // disabled={checkedTasks.size}
                        >
                            Add task
                        </Button>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col className="text-center mt-5">
                        <input type="search" value={searchText} onChange={handleSearchChange} />
                    </Col>
                </Row>
                {
                    searchText.length > 0 &&
                    <Row className="justify-content-center">
                        <Col className="text-center mt-5" lg="6">
                            <BasicExample tasks={searchResults} />
                        </Col>
                    </Row>
                }

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
                {
                    showNewTaskModal &&
                    <AddNewTaskModalFunc
                        onClose={toogleMOdal}
                    />
                }
            </Container>
        </>)
}