import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FieldArray } from 'formik';

function Founders({founders, handleChange}) {
        return ( 
            <FieldArray name="founders">
                {({ insert, remove, push }) => (
                <div>
                    {founders.length > 0 &&
                    founders.map((founder, index) => (
                        <Card key={index} style={{ margin: '0px 0px 10px 0px' }}>
                            <Card.Body>
                                <Form.Group className="mb-3" controlId={`founders.${index}.name`} >
                                    <Form.Label>Founder Name</Form.Label>
                                    <Form.Control type="text" name={`founders.${index}.name`} onChange={handleChange} value={founders[index].name} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId={`founders.${index}.bio`}>
                                    <Form.Label>Founder Bio</Form.Label>
                                    <Form.Control as="textarea" name={`founders.${index}.bio`} onChange={handleChange} value={founders[index].bio}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId={`founders.${index}.role`} >
                                    <Form.Label>Founder Role</Form.Label>
                                    <Form.Control type="text" name={`founders.${index}.role`} onChange={handleChange} value={founders[index].role}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId={`founders.${index}.email`}>
                                    <Form.Label>Founder Email</Form.Label>
                                    <Form.Control type="email" name={`founders.${index}.email`} onChange={handleChange} value={founders[index].email}/>
                                </Form.Group> 
                            </Card.Body>
                        </Card> 
                        
                    ))}
                    <Button
                    type="button"
                    className="btn-success"
                    onClick={() => push({ name: '' })}
                    >
                    Add Founder
                    </Button>
                </div>
                )}
            </FieldArray>

            
        )
}

export default Founders