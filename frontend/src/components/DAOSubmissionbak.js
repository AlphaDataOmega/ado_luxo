// import React, {useState} from 'react';
// import { Formik } from 'formik';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Autocomplete from "react-google-autocomplete";

// // const formik = useFormik({
// //  initialValues: {
// //  email: "",
// //  password: "",
// //  },
// //  onSubmit: values => {
// // // handle form submission
// //  },
// // });

// class Division extends React.Component {
//     constructor(props) {
    
//     super(props);
//     this.state = {values: []};

//     this.handleChange = this.handleChange.bind(this);
//   }

//    handleInputChange(event) {
//     const target = event.target;
//     const value = target.type === 'checkbox' ? target.checked : target.value;
//     const name = target.name;
    
//     this.setState({
//          values: { [name]: value }
//         });
//     }

//     render() {
//         return ( 
//             <Card key={this.key}>
//                 <Card.Body>
//                     <Form.Group className="mb-3" controlId="name" >
//                         <Form.Label>Founder Name</Form.Label>
//                         <Form.Control type="text" name="name" onChange={this.handleChange} value={this.state.name} />
//                     </Form.Group>

//                     <Form.Group className="mb-3" controlId="businessName">
//                         <Form.Label>Founder Bio</Form.Label>
//                         <Form.Control as="textarea" onChange={this.handleChange} />
//                     </Form.Group>

//                     <Form.Group className="mb-3" controlId="" >
//                         <Form.Label>Founder Role</Form.Label>
//                         <Form.Control type="text" onChange={this.handleChange}/>
//                     </Form.Group>

//                     <Form.Group className="mb-3" controlId="businessName">
//                         <Form.Label>Founder Email</Form.Label>
//                         <Form.Control type="email" onChange={this.handleChange}/>
//                     </Form.Group>
//                 </Card.Body>
//             </Card> 
//         )
//     }
        
// }


// class DAOSubmission extends React.Component {

//     constructor(props) {
//         super(props)

        
//         this.state = {
//             divisions: [],
//             founders: [],
//             value: ''
//         }

//         this.addDivision = this.addDivision.bind(this);
//         this.handleChange = this.handleChange.bind(this);
//     }

//     addDivision() {
//         let ar = this.state.divisions
//         let c = this.state.divisions.length
//         ar.push(<Division key={c++}></Division>)
//         this.setState({divisions: ar })
//         console.log(this.state.divisions)
//     }

//     handleChange(event) {
//     this.setState({value: event.target.value});
//   }

    
        
//     render() {
        
//         return (
//             <div>
//                 <Formik initialValues={{ email: '' }} onSubmit={values => console.log(values)} >
                    
//                         <Form>

//                             <h3 style={{ margin: '20px 0px 0px 0px' }}>
//                                 Business Details
//                             </h3>

//                             <hr></hr>

//                             <Form.Group className="mb-3" controlId="businessName">
//                                 <Form.Label>Business Name</Form.Label>
//                                 <Form.Control type="text" name="businessName" onChange={this.handleChange} value={this.state.value}/>
//                             </Form.Group>

//                         <Form.Group className="mb-3" controlId="businessName">
//                             <Form.Label>Business Description</Form.Label>
//                             <Form.Control as="textarea"  />
//                             <Form.Text className="text-muted">
//                                 Tell the world about your business.
//                             </Form.Text>
//                         </Form.Group>

//                         <Form.Group className="mb-3" controlId="businessName">
//                             <Form.Label>Business Address</Form.Label>
//                             <Autocomplete className="form-control"
//                                 placeholder="Google Assisted Search"
//                                 apiKey="AIzaSyDWPivBIcbMLFzdLETjDYeaQTscsC4uDeE"
//                                 options={{
//                                     fields: ["address_components", "geometry"],
//                                     types: ["address"],
//                                     componentRestrictions: { country: "usa" },
//                                 }} 
//                                 onPlaceSelected={(place) => {
//                                     this.placeSelected(place);
//                                 }}
//                             />
//                         </Form.Group>

//                         <Form.Group className="mb-3" controlId="formGridAddress1">
//                             <Form.Label>Address</Form.Label>
//                             <Form.Control placeholder="1234 Main St" />
//                         </Form.Group>

//                         <Form.Group className="mb-3" controlId="formGridAddress2">
//                             <Form.Label>Address 2</Form.Label>
//                             <Form.Control placeholder="Apartment, studio, or floor" />
//                         </Form.Group>

//                         <Row className="mb-3">
//                             <Form.Group as={Col} controlId="formGridCity">
//                             <Form.Label>City</Form.Label>
//                             <Form.Control />
//                             </Form.Group>

//                             <Form.Group as={Col} controlId="formGridState">
//                             <Form.Label>State</Form.Label>
//                             <Form.Select defaultValue="Choose...">
//                                 <option>Choose...</option>
//                                 <option>...</option>
//                             </Form.Select>
//                             </Form.Group>

//                             <Form.Group as={Col} controlId="formGridZip">
//                             <Form.Label>Zip</Form.Label>
//                             <Form.Control />
//                             </Form.Group>
//                         </Row>

//                         <Form.Group className="mb-3" controlId="businessName">
//                             <Form.Label>Business Website</Form.Label>
//                             <Form.Control type="text"/>
//                             <Form.Text className="text-muted">
//                                 Enter either a link to your business website, github, or social profile.
//                             </Form.Text>
//                         </Form.Group>

//                         <Form.Group className="mb-3" controlId="businessName">
//                             <Form.Label>Business Email</Form.Label>
//                             <Form.Control type="email"/>
//                         </Form.Group>

//                         <Form.Group className="mb-3" controlId="businessName">
//                             <Form.Label>Business Phone Number</Form.Label>
//                             <Form.Control type="tel"/>
//                         </Form.Group>

                        
//                         <h3 style={{ margin: '20px 0px 0px 0px' }}>
//                             Organizer Information
//                         </h3>

//                         <hr></hr>

//                         <Form.Group className="mb-3" controlId="businessName">
//                             <Form.Label>Organizer Name</Form.Label>
//                             <Form.Control type="text"/>
//                         </Form.Group>

//                         <Form.Group className="mb-3" controlId="businessName">
//                             <Form.Label>Organizer Email</Form.Label>
//                             <Form.Control type="email"/>
//                         </Form.Group>

//                         <h3 style={{ margin: '20px 0px 0px 0px' }}>
//                             Founders Information
//                         </h3>

//                         <hr></hr>

//                         <div>
//                             {this.founders}
//                         </div>

//                         <Button variant="outline-primary" onClick="" style={{ margin: '20px 0px 0px 0px' }}>
//                             Add Founder
//                         </Button>

//                         <h3 style={{ margin: '20px 0px 0px 0px' }}>
//                             Financial Allocation
//                         </h3>

//                         <hr></hr>

//                         <Form.Group className="mb-3" controlId="businessName">
//                             <Form.Label>Preferred Token</Form.Label>
//                             <Form.Control type="text"/>
//                             <Form.Text className="text-muted">
//                             Tokens recieved by your business account will be automatically swapped to your perferred Token.
//                             </Form.Text>
//                         </Form.Group>

//                         <h5>
//                             Divisions
//                         </h5>
                        
//                         <Card>
//                             <Card.Body>
//                                 <Card.Title>What are business divisions?</Card.Title> 
//                                 <Card.Text>
//                                     Think of a Business Division as a specific cause for your 
//                                     organization. For example an important part of your 
//                                     business is paying back investments with your Profits. 
//                                     Another could be used for Utility Payments, Handle Payroll,
//                                     Fund Research, Marketing Budgets and More.
//                                 </Card.Text>
//                                 <Card.Text> 
//                                     Just like in a regular business most payments are recieved 
//                                     into an accountReceivable account. Once deployed, you can 
//                                     immediately start to send crypto-currency directly to your 
//                                     Business Account Profile Address.
//                                 </Card.Text> 
//                                 <Card.Text>
//                                     When tokens are deposited into the Business Account Profile 
//                                     Address, the transaction works like any other to a customer,
//                                     however the business profile will immediately allocate the 
//                                     newly recieved funds to each of the divisions according to
//                                     the settings found below.
//                                 </Card.Text>
//                                 <Card.Text>
//                                     Use the slider to set the percentage of each incoming
//                                     transaction to reciecve individually by division.
//                                 </Card.Text>   
//                             </Card.Body>
//                         </Card>

//                         <div>
//                             {this.state.divisions}
//                         </div>
//                             <Button variant="outline-primary" onClick={this.addDivision} style={{ margin: '20px 0px 0px 0px' }}>
//                                 Add Division
//                             </Button>

//                         <h3 style={{ margin: '20px 0px 0px 0px' }}>
//                             Investor NFT Collection
//                         </h3>

//                         <hr></hr>

//                         <Card>
//                             <Card.Body>
//                                 <Card.Title>What is an Investor NFT?</Card.Title> 
//                                 <Card.Text>
//                                     Publicly traded compnaies offer equity or a percentage of 
//                                     earnings to owners of their stock. Thier stock is divided,
//                                     and the funds are distributed evenly increasing the value
//                                     of the stock. 
//                                 </Card.Text>
//                                 <Card.Text> 
//                                     Companies that are funded by investors are under contract
//                                     to provide initial funds that push the business forward in
//                                     an effort to earn either a percentage of equity or return
//                                     on their initial investment.
//                                 </Card.Text> 
//                                 <Card.Text>
//                                     Investor NFTs combine the two without the necessary litigations
//                                     for either as all applicable logic between the investor and
//                                     the company are handled Autonomously. Investor NFTs are purchased
//                                     and sold with specific immutable options that both the seller
//                                     and the Invester both must agree to prior to NFT Purchase.
//                                 </Card.Text>
//                                 <Card.Text>
//                                     Everytime the investors division recieves tokens, they are 
//                                     automatically distributed to holders of the Investor NFTs.
//                                 </Card.Text>   
//                                 <Card.Text>
//                                     Investor NFTs can be traded and after purchase accrue their
//                                     own market value. However they are minted originally during 
//                                     the first sale of the NFT for a price that matches the expected
//                                     value of the earnings. 
//                                 </Card.Text>
//                                 <Card.Text>
//                                     Each collection is created with 100 NFTs allowing for easy 
//                                     allowcation of Funds. You are able to set your price below.
//                                     We encourage you upload a completed presentation file as a 
//                                     PDF. <strong>This file is permanent.</strong>
//                                     This document should be able to entice investors to purchase
//                                     the NFT.
//                                 </Card.Text>    
//                                 <Card.Text>
//                                     NFTs are minted as a qr_code that brings the scanner to a 
//                                     corresponding webpage where information about that NFT and
//                                     it's owner, creator and dividends are accesible. As well as 
//                                     an interface for it's owner to transfer thier NFT.
//                                 </Card.Text>    
//                                 <Card.Text>
//                                     We recommend scaling your business investments over time by 
//                                     creating new divisions per collection.
//                                 </Card.Text>    
//                             </Card.Body>
//                         </Card>

//                             <Form.Group className="mb-3" controlId="businessName" style={{ margin: '20px 0px 0px 0px' }}>
//                                 <Form.Label>Enable Investor NFT</Form.Label>
//                                 <Form.Check type="switch"/>
//                             </Form.Group>

//                             <Form.Group className="mb-3" controlId="businessName">
//                                 <Form.Label>NFT Allocation</Form.Label>
//                                 <Form.Range/>
//                             </Form.Group>

//                             <Form.Group className="mb-3" controlId="businessName">
//                                 <Form.Label>Investor NFT Name</Form.Label>
//                                 <Form.Control type="text"/>
//                                 <Form.Text className="text-muted">
//                                     A division account will be created using this name. You will be
//                                     able to set the allocation in the divisions section of this form.
//                                 </Form.Text>
//                             </Form.Group>

//                             <Form.Group className="mb-3" controlId="businessName">
//                                 <Form.Label>Investor NFT Offer Details</Form.Label>
//                                 <Form.Control type="file"/>
//                                 <Form.Text className="text-muted">
//                                     Upload a PDF with the specific details about this company and how
//                                     selling this NFT will create opportunities for success, and why 
//                                     it is worth the price requested. 
//                                 </Form.Text>
//                             </Form.Group>

//                             <Form.Group className="mb-3" controlId="businessName">
//                                 <Form.Label>NFT Collection Description</Form.Label>
//                                 <Form.Control as="textarea"/>
//                             </Form.Group>

//                         <Button variant="primary" type="submit" onClick={handleSubmit} style={{ margin: '20px 0px 0px 0px' }}>
//                             Submit
//                         </Button>

//                         </Form>
                    
//                 </Formik>
//             </div>
//         )
//     }
// }

// export default DAOSubmission