import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FieldArray } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import InputGroup from 'react-bootstrap/InputGroup';

function BusinessLinks({BusinessLinks, handleChange, handleBlur, errors, touched}) {
        return ( 
            <FieldArray name="business.links">
                {({ insert, remove, push }) => (
                <div>
                    {BusinessLinks.length > 0 &&
                    BusinessLinks.map((link, index) => (
                        <Card key={index} style={{ margin: '0px 0px 10px 0px' }}>
                            <Card.Body>
                                <Form.Group className="mb-3" controlId={`business.links.${index}.name`} >
                                    <Form.Label>Link Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name={`business.links.${index}.name`}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={BusinessLinks[index].name}
                                        isValid={ Object.hasOwn(errors[index], 'name') ? true : false }
                                        //isInvalid={Object(errors.business).hasOwnProperty('links') ? true:false}
                                    />
                                    <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">YOu SUkc!</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId={`business.links.${index}.url`} >
                                    <Form.Label>Link URL</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text>
                                            https://
                                        </InputGroup.Text>
                                        <Form.Control type="text" name={`business.links.${index}.url`} onChange={handleChange} value={BusinessLinks[index].url}/>
                                    </InputGroup>
                                </Form.Group>
                            </Card.Body>
                        </Card> 
                        
                    ))}
                    <Button
                    type="button"
                    className="btn-success"
                    onClick={() => push({ name: '' })}
                    >
                    Add Link
                    </Button>
                </div>
                )}
            </FieldArray>

            
        )
}

export default BusinessLinks