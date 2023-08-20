import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';


function BasicExample({ tasks }) {
    return (


        <ListGroup>
            <h1>Result</h1>
            {
                tasks?.map((item) => {
                    return (
                        <ListGroup.Item key={item.id}>
                            <Link to={`/task/${item.id}`}>
                                {item.title}
                            </Link>
                        </ListGroup.Item>

                    )
                })
            }
        </ListGroup>
    );
}

export default BasicExample;