import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router';
import { useUserRegistrationMutation } from '../../redux/services/users/usersApi';

export default function Registration() {
    const [submitRegistration] = useUserRegistrationMutation();
    const navigate = useNavigate();


    const handleSubmit = () => {
        const userInfo = {
            userName: 'Armen',
            email: 'armen@mail.com',
            password: '123456',
        }

        submitRegistration(userInfo)
            .then((res) => {
                if (res.error) throw new Error('User did not sign up !!!')
                console.log(res);
                navigate('/')
            })
            .catch((err) => console.log(err))

    }
    return (
        <Form className="mt-3 p-5">
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                    Name
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="text" placeholder="Username" />

                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">Email address</Form.Label>
                <Col sm="10">
                    <Form.Control type="email" placeholder="name@example.com" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                    Password
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="password" placeholder="Password" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                    Confirm Password
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="password" placeholder="Password" />
                </Col>
            </Form.Group>
            <Button variant="info" onClick={handleSubmit}>Sign Up</Button>
        </Form>
    );
}
