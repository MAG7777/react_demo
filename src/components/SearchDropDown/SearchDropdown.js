import Dropdown from 'react-bootstrap/Dropdown';

function BasicExample({ tasks }) {
    return (
        <Dropdown.Menu show>
            {
                tasks?.map((item) => {
                    return (
                        <h6 key={item.id} className='mt-2' style={{position:'none', textAlign:'center'}}>{item.title}</h6>

                    )
                })
            }
        </Dropdown.Menu>
    );
}

export default BasicExample;