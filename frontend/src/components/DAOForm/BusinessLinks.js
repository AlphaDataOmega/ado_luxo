import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FieldArray, ErrorMessage } from 'formik';
import InputGroup from 'react-bootstrap/InputGroup';

const BusinessLinks = ({BusinessLinks, handleChange, handleBlur, errors, touched}) => {

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
                                        isInvalid={'business' in errors ? 'links' in errors.business ? index in errors.business.links ? 'name' in errors.business.links[index] : false : false : false && 'business' in touched ? 'links' in touched.business ? index in touched.business.links ? 'name' in touched.business.links[index] : false : false : false}
                                        isValid={'business' in errors ? 'links' in errors.business ? index in errors.business.links ? !'name' in errors.business.links[index] : true : true : true && 'business' in touched ? 'links' in touched.business ? index in touched.business.links ?  'name' in touched.business.links[index] : false : false : false }
                                    />
                                    <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid"><ErrorMessage name={`business.links.${index}.name`}/></Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId={`business.links.${index}.url`} >
                                    <Form.Label>Link URL</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text>
                                            https://
                                        </InputGroup.Text>
                                        <Form.Control 
                                            type="text" 
                                            name={`business.links.${index}.url`} 
                                            onChange={handleChange} 
                                            value={BusinessLinks[index].url}
                                            isInvalid={'business' in errors ? 'links' in errors.business ? index in errors.business.links ? 'url' in errors.business.links[index] : false : false : false && 'business' in touched ? 'links' in touched.business ? index in touched.business.links ? 'url' in touched.business.links[index] : false : false : false}
                                            isValid={'business' in errors ? 'links' in errors.business ? index in errors.business.links ? !'url' in errors.business.links[index] : true : true : true && 'business' in touched ? 'links' in touched.business ? index in touched.business.links ?  'url' in touched.business.links[index]: false : false : false}
                                        />
                                        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid"><ErrorMessage name={`business.links.${index}.url`}/></Form.Control.Feedback>
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