import React, { useState } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import { Debug } from './Debug';
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Image from 'react-bootstrap/Image'
import Founders from './FoundersSection';
import Divisions from './DivisionSection';
import BusinessLinks from './BusinessLinks';
import * as IPFS from 'ipfs-core'
import Autocomplete from 'react-google-autocomplete'
import * as Yup from 'yup';

const businessSchema = Yup.object().shape({
    business: Yup.object().shape({
        name: Yup.string().min(2, 'Too Short').required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        // phone: Yup.string().phone('Invalid phone').required('Required'),
        links: Yup.array().of( Yup.object().shape({
            name: Yup.string().min(2, 'Too Short').required('Required'),
            url: Yup.string().email('Invalid email').required('Required'),
        })),
    }),
 });

const initialValues = {
    business: {
        logoHash: '',
        logoFile: '',
        name: '',
        description: '',
        email: '',
        phone: '',
        links: [{
            name: '',
            url: '',
        }],
        address: {
            country: 'United States',
            address1: '',
            address2: '',
            city: '',
            state: '',
            zip: '',
        }
    },
    organizer: {
        name: '',
        email: ''
    },
    preferredToken: '',
    nft: {
        enabled: false,
        allocation: '',
        docHash: '',
        description: '',
    },
    founders: [{
        name: '',
        bio:'',
        role:'',
        email: '',
    }],
    divisions: [{
        name:'',
        description:'',
        leader:'',
        email:''
    }]
};

function DAOForm() {

    const [nftDoc, setIPFS_01] = useState('Upload your image to retrieve IPFS Hash...');
    const [ipfsLogoHash, setIPFS_02] = useState('Upload your image to retrieve IPFS Hash...');
    const [disableAddress, setDisableAddress] = useState(true)

    async function ipfsUpload(file, setIPFS='' ) {
        setIPFS_01("Loading...");
        setIPFS_02("Loading...");
        let ipfs = await IPFS.create({repo: 'ok' + Math.random()})
        let data = await ipfs.add(file)
        if (setIPFS === '') {
            return data.cid
        } else if ( setIPFS === 'ipfs_01') {
            setIPFS_01(data.cid)
        } else if ( setIPFS === 'ipfs_02') {
            setIPFS_02(data.cid)
        }
    }
    
    return (
        <div>
        <Formik
        initialValues={initialValues}
        validationSchema={businessSchema}
        onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
        }}
        >
        {({ values, handleChange, setFieldValue, errors, touched, handleBlur }) => (
            <Form noValidate>

                <Container className='business'>
                    <Row>
                        <Col></Col>
                        <Col sm="4">
                            <Image style={{width: "100%", padding: "2em"}} fluid="true" src="https://randomuser.me/api/portraits/women/29.jpg" roundedCircle="true"></Image>
                        </Col>
                        <Col></Col>
                    </Row>

                    <h3 style={{ margin: '20px 0px 0px 0px' }}>
                        Business Information
                    </h3>

                    <hr></hr>
                    
                    <Form.Group className="mb-3" controlId="business.logoFile">
                        <Form.Label>Business Logo</Form.Label>
                        <Row>
                            <Col xs="10">
                                <Form.Control
                                    type="file"
                                    name="business.logoFile"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isInvalid={Object(errors.business).hasOwnProperty('logoFile') && Object(touched.business).hasOwnProperty('logoFile')}
                                    isValid={!Object(errors.business).hasOwnProperty('logoFile') && Object(touched.business).hasOwnProperty('logoFile')}
                                />
                                <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid"><ErrorMessage name="business.logoFile"/></Form.Control.Feedback>
                            </Col>
                            <Col>
                                <Button onClick={async()=>{ipfsUpload(values.business.logoFile, 'ipfs_02')}}>Upload Logo</Button> 
                            </Col>
                        </Row>

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="business.logoHash">
                        <Form.Label>IPFS Logo Hash</Form.Label>
                        <Form.Control
                            type="text"
                            disabled
                            name="business.logoHash"
                            value={ipfsLogoHash}
                            isInvalid={Object(errors.business).hasOwnProperty('logoHash') && Object(touched.business).hasOwnProperty('logoHash')}
                            isValid={!Object(errors.business).hasOwnProperty('logoHash') && Object(touched.business).hasOwnProperty('logoHash')}
                        />
                        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid"><ErrorMessage name="business.logoHash"/></Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="business.name">
                        <Form.Label>Business Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="business.name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={Object(errors.business).hasOwnProperty('name') && Object(touched.business).hasOwnProperty('name')}
                            isValid={!Object(errors.business).hasOwnProperty('name') && Object(touched.business).hasOwnProperty('name')}
                        />
                        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid"><ErrorMessage name="business.name"/></Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="business.description">
                        <Form.Label>Business Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            name="business.description"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={Object(errors.business).hasOwnProperty('description') && Object(touched.business).hasOwnProperty('description')}
                            isValid={!Object(errors.business).hasOwnProperty('description') && Object(touched.business).hasOwnProperty('description')}
                        />
                        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid"><ErrorMessage name="business.description"/></Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="business.email">
                        <Form.Label>Business Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="business.email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={Object(errors.business).hasOwnProperty('email') && Object(touched.business).hasOwnProperty('email')}
                            isValid={!Object(errors.business).hasOwnProperty('email') && Object(touched.business).hasOwnProperty('email')}
                        />
                        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid"><ErrorMessage name="business.email"/></Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="business.phone">
                        <Form.Label>Business Phone</Form.Label>
                        <Form.Control
                            type="phone"
                            name="business.phone"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={Object(errors.business).hasOwnProperty('phone') && Object(touched.business).hasOwnProperty('phone')}
                            isValid={!Object(errors.business).hasOwnProperty('phone') && Object(touched.business).hasOwnProperty('phone')}
                        />
                        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid"><ErrorMessage name="business.phone"/></Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="businessLink">
                        <Form.Label>Business Links</Form.Label>
                        <BusinessLinks BusinessLinks={values.business.links} handleChange={handleChange} handleBlur={handleBlur} errors={errors} touched={touched} ></BusinessLinks>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="addressSearch">
                        <Form.Label>Address Search</Form.Label>
                        <Autocomplete className="form-control"
                            placeholder="Google Assisted Search"
                            apiKey="AIzaSyDWPivBIcbMLFzdLETjDYeaQTscsC4uDeE"
                            options={{
                                fields: ["address_components", "geometry"],
                                types: ["address"],
                                componentRestrictions: { country: "usa" },
                            }} 
                            onPlaceSelected={(place) => {
                                var components = {};
                                for (var i = 0; i < place.address_components.length; i++) {
                                    var c = place.address_components[i];
                                    components[c.types[0]] = c;
                                }
                                setDisableAddress(false)
                                setFieldValue("businessAddress1", `${components['street_number'].long_name} ${components['route'].long_name}` );
                                setFieldValue("businessAddress2", components['subpremise'] ? components['subpremise'] : '' );
                                setFieldValue("businessCity", `${components['locality'].long_name}`)
                                setFieldValue("businessState", `${components['administrative_area_level_1'].long_name}`)
                                setFieldValue("businessZip", `${components['postal_code'].long_name}`)
                            }}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="businessAddress1">
                            <Form.Label>Address</Form.Label>
                            <Field className="form-control" disabled={disableAddress} onChange={handleChange} name="businessAddress1"  value={values.business.address1} placeholder="1234 Main St" />
                        </Form.Group>

                    <Form.Group className="mb-3" controlId="businessAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Field className="form-control" disabled={disableAddress} onChange={handleChange} name="businessAddress2" value={values.business.address2} placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="businessCity">
                        <Form.Label>City</Form.Label>
                        <Field className="form-control" disabled={disableAddress} onChange={handleChange} name="businessCity" value={values.business.city} placeholder="Metropolis" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="businessState">
                        <Form.Label>State</Form.Label>
                        <Field className="form-control" disabled={disableAddress} onChange={handleChange} name="businessState" value={values.businessState} placeholder="New York"/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="businessZip">
                        <Form.Label>Zip</Form.Label>
                        <Field className="form-control" disabled={disableAddress} onChange={handleChange} name="businessZip" value={values.businessZip} placeholder="54321" />
                        </Form.Group>
                    </Row>

                </Container>

                <Container className="organizer">
                    <h3 style={{ margin: '20px 0px 0px 0px' }}>
                        Organizer Information
                    </h3>

                    <hr></hr>

                    <Form.Group className="mb-3" controlId="businessName">
                        <Form.Label>Organizer Name</Form.Label>
                        <Field name="organizerName" type="text" className="form-control"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="businessName">
                        <Form.Label>Organizer Email</Form.Label>
                        <Field name="organizerEmail" type="email" className="form-control"/>
                    </Form.Group>
                </Container>
                    
                <Container className="preferred-token">
                    <h3 style={{ margin: '20px 0px 0px 0px' }}>Token Option</h3><hr></hr>
                    <Form.Group className="mb-3" controlId="businessName">
                        <Form.Label>Preferred Token</Form.Label>
                        <Field name="preferredToken" className="form-control" type="text"/>
                        <Form.Text className="text-muted">
                            Tokens recieved by your business account will be automatically swapped to your perferred Token.
                        </Form.Text>
                    </Form.Group>
                </Container>

                <Container className='investor-nft'>
                    <h3 style={{ margin: '20px 0px 0px 0px' }}>Investor NFT</h3><hr></hr>

                    <Card>
                        <Card.Body>
                            <Card.Title>What is an Investor NFT?</Card.Title> 
                            <Card.Text>
                                Publicly traded compnaies offer equity or a percentage of 
                                earnings to owners of their stock. Thier stock is divided,
                                and the funds are distributed, increasing the value
                                of the stock. 
                            </Card.Text>
                            <Card.Text> 
                                Companies that are funded by investors are under contract
                                to provide initial funds that push the business forward in
                                an effort to earn either a percentage of equity or return
                                on their initial investment.
                            </Card.Text> 
                            <Card.Text>
                                Investor NFTs combine the two without the necessary litigations
                                for either as all applicable logic between the investor and
                                the company are handled Autonomously. Investor NFTs are purchased
                                and sold with specific immutable options that both the seller
                                and the Invester both must agree to prior to NFT Purchase.
                            </Card.Text>
                            <Card.Text>
                                Everytime the investors division recieves tokens, they are 
                                automatically distributed to holders of the Investor NFTs.
                            </Card.Text>   
                            <Card.Text>
                                Investor NFTs can be traded and after purchase accrue their
                                own market value. However they are minted originally during 
                                the first sale of the NFT for a price that matches the expected
                                value of the earnings. 
                            </Card.Text>
                            <Card.Text>
                                Each collection is created with 100 NFTs allowing for easy 
                                allowcation of Funds. You are able to set your price below.
                                We encourage you upload a completed presentation file as a 
                                PDF. <strong>This file is permanent.</strong>
                                This document should be able to entice investors to purchase
                                the NFT.
                            </Card.Text>    
                            <Card.Text>
                                NFTs are minted as a qr_code that brings the scanner to a 
                                corresponding webpage where information about that NFT and
                                it's owner, creator and dividends are accesible. As well as 
                                an interface for it's owner to transfer thier NFT.
                            </Card.Text>    
                            <Card.Text>
                                We recommend scaling your business investments over time by 
                                creating new divisions per collection.
                            </Card.Text>    
                        </Card.Body>
                    </Card>

                    <Form.Group className="mb-3 custom-control custom-switch" controlId="businessName" style={{ margin: '20px 0px 0px 0px' }}>
                        <Form.Label className="custom-control-label">Enable Investor NFT</Form.Label>
                        <Form.Check name="enableNFT" onChange={handleChange} type="switch"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="nftAllocation">
                        <Form.Label>NFT Allocation {values.nftAllocation}%</Form.Label>
                        <Form.Range name="nftAllocation" onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="businessName">
                        <Form.Label>Investor NFT Name</Form.Label>
                        <Form.Control type="text"/>
                        <Form.Text className="text-muted">
                            A division account will be created using this name. You will be
                            able to set the allocation in the divisions section of this form.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="businessName">
                        <Form.Label>Investor NFT Offer Details</Form.Label>
                        <Row>
                            <Col xs="10">
                                <Form.Control name="nftDocFile" onChange={handleChange} type="file"/>
                            </Col>
                            <Col>
                                <Button onClick={async()=>{ipfsUpload(values.nftDocFile, 'ipfs_01')}}>Convert IPFS Hash</Button> 
                            </Col>
                        </Row>
                        <Form.Text className="text-muted">
                            Upload a PDF with the specific details about this company and how
                            selling this NFT will create opportunities for success, and why 
                            it is worth the price requested. 
                        </Form.Text>
                        <InputGroup>
                            <Form.Control disabled type="text" name="nftDocHash" placeholder={nftDoc} value={nftDoc}/>
                            <InputGroup.Text>
                                <div>View Doc</div>
                            </InputGroup.Text>
                        </InputGroup>
                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="businessName">
                        <Form.Label>NFT Collection Description</Form.Label>
                        <Form.Control as="textarea"/>
                    </Form.Group>
                </Container>

                <Container className="founders">
                    <h3 style={{ margin: '20px 0px 0px 0px' }}>Founders</h3><hr></hr>
                    {/* <Founders Founders={values.Founders} handleChange={handleChange}></Founders> */}
                </Container>

                <Container className="divisions">
                    <h3 style={{ margin: '20px 0px 0px 0px' }}>Divisions</h3><hr></hr>
                    {/* <Divisions Divisions={values.Divisions} handleChange={handleChange}></Divisions> */}
                </Container>

            
            <Button type="submit">Submit</Button>

            <div>
                <Debug touched={touched} errors={errors} values={values}> </Debug>
            </div>

            
            </Form>
        )}
        
        </Formik>
        
    </div>
    );
}


export default DAOForm
