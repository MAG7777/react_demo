import ListGroup from 'react-bootstrap/ListGroup';


function BasicExample({ tasks }) {
    return (


        <ListGroup>
            {
                tasks?.map((item) => {
                    return (
                        <ListGroup.Item key={item.id}>{item.title}</ListGroup.Item>

                    )
                })
            }
        </ListGroup>
    );
}

export default BasicExample;