import Card from 'react-bootstrap/Card'

export const Debug = (props) => {
    return(
        <Card style={{ margin: "1rem 0" }}>
            
            <Card.Header>
                <Card.Title>DEBUG</Card.Title>
            </Card.Header>
            <Card.Body>
                <pre
                    style={{
                        background: "#f6f8fa",
                        fontSize: ".65rem",
                        padding: ".5rem",
                    }}
                >
                    <strong>props</strong> ={" "}
                    {JSON.stringify(props, null, 2)}
                </pre>                               
            </Card.Body>                                
        </Card>
    )
}