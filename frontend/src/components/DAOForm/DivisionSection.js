import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FieldArray } from 'formik';

function Divisions({Divisions, handleChange}) {
        return ( 
            <FieldArray name="Divisions">
                {({ insert, remove, push }) => (
                <div>
                    {Divisions.length > 0 &&
                    Divisions.map((division, index) => (
                        <Card key={index} style={{ margin: '0px 0px 10px 0px' }}>
                            <Card.Body>
                                <Form.Group className="mb-3" controlId={`Divisions.${index}.name`} >
                                    <Form.Label>Division Name</Form.Label>
                                    <Form.Control type="text" name={`Divisions.${index}.name`} onChange={handleChange} value={Divisions[index].name} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId={`Divisions.${index}.description`}>
                                    <Form.Label>Division Description</Form.Label>
                                    <Form.Control as="textarea" name={`Divisions.${index}.bio`} onChange={handleChange} value={Divisions[index].bio}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId={`Divisions.${index}.leader`} >
                                    <Form.Label>Division Leader</Form.Label>
                                    <Form.Control type="text" name={`Divisions.${index}.role`} onChange={handleChange} value={Divisions[index].role}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId={`Divisions.${index}.email`}>
                                    <Form.Label>Division Contact Email</Form.Label>
                                    <Form.Control type="email" name={`Divisions.${index}.email`} onChange={handleChange} value={Divisions[index].email}/>
                                </Form.Group> 
                            </Card.Body>
                        </Card> 
                        
                    ))}
                    <Button
                    type="button"
                    className="btn-success"
                    onClick={() => push({ name: '' })}
                    >
                    Add Division
                    </Button>
                </div>
                )}
            </FieldArray>

            
        )
}

export default Divisions