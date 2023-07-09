import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';

class EditModal extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            ...props.editTask
        }
    }

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })

    }

    handleRadioChange = (event) => {
        console.log(event.target.value)
        this.setState({ importance: event.target.value })
    }

    handleSelectChange = (event) => {
        this.setState({
            developer: event.target.value
        })
    }

    handleSaveEditedTask = (event) => {
        event.preventDefault();

        const { title, description, importance, developer } = this.state;
        if (!title || !description || !importance || !developer) {

         return;
        }

        let neweObj = {
            id: this.state.id,
            title,
            description,
            importance,
            developer,
        }

        this.props.onSave(neweObj);

    //     let toDoList = [...this.state.toDoList];
    //     toDoList.push(neweObj);
    //     this.setState({
    //         toDoList,
    //         title: '',
    //         description: '',
    //         importance: '',
    //         developer: '',
    //     })

 }

 handleKeyDown = (event) => {
        if (event.key === 'Enter')
            this.handleSaveEditedTask(event);
    }



    render() {

        const { title, description, importance, developer } = this.state;
        const { onCancel } = this.props;

        return (
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={true}
                onHide={onCancel}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Edit task.
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onKeyDown={this.handleKeyDown}>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail" >
                            <Form.Label column sm={2}>
                                Title
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" placeholder="Email" value={title} name="title" onChange={this.handleInputChange}/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                            <Form.Label column sm={2}>
                                Description
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control as="textarea" placeholder="Description" value={description} name="description" onChange={this.handleInputChange} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                            <Form.Label column sm={2}>
                                Developer
                            </Form.Label>

                            <Col sm={10}>

                                <Form.Select aria-label="Floating label select example" value={developer} onChange={this.handleSelectChange}>
                                    <option value="Aksana">Aksana</option>
                                    <option value="Hovo">Hovo</option>
                                    <option value="Vazgen">Vazgen</option>
                                    <option value="Armen">Armen</option>
                                    <option value="ELizabet">Elizabet</option>
                                </Form.Select>
                            </Col>
                        </Form.Group>
                        <fieldset>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label as="legend" column sm={2}>
                                    Importance
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                        type="radio"
                                        label="low"
                                        name="low"
                                        id="low"
                                        value="low"
                                        checked={importance === "low"}
                                        onChange={this.handleRadioChange}
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="medium"
                                        name="medium"
                                        id="medium"
                                        value="medium"
                                        checked={importance === "medium"}
                                        onChange={this.handleRadioChange}
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="high"
                                        name="high"
                                        id="high"
                                        value="high"
                                        checked={importance === "high"}
                                        onChange={this.handleRadioChange}
                                    />
                                </Col>
                            </Form.Group>
                        </fieldset>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='primary' onClick={this.handleSaveEditedTask}>Save</Button>
                    <Button  variant="secondary" onClick={onCancel}>Close</Button>
                </Modal.Footer>
            </Modal>
        );

    }

}


export default EditModal;