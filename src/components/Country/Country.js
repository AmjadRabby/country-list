import React from 'react';
import { Link, useHistory, withRouter} from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';


const Country = (props) => {
    const {name} = props.country;
    // console.log(props);

    const history = useHistory();
    const handleClick = (countryName) =>  {
        // console.log(countryName, props)
        props.history.push(`/country/${countryName}`);
    };
    const countryStyle = {
        width: '30%', 
        height: '200px', 
        backgroundColor: 'lightGray',
        textAlign: 'center',
        lineHeight: '50px',     
        margin: '8px',
        padding: '10px',
        float: 'left',
        borderRadius: '20px',
        border: 'none',
        boxShadow: '5px 5px 10px gray'
    }
    return (
         <Card style={countryStyle}>
            <Card.Body>
                <Card.Title style={{fontWeight: 'bold'}} className="text-dark"> {name}</Card.Title>                
                <Link to={`/country/${name}`}>Country Information</Link>
                <br/>
                <Button style={{borderRadius: '20px', width: '100%', fontWeight: 'bold'}}  className="btn btn-secondary text-light" onClick={() => handleClick(name)}>Details</Button> 
            </Card.Body>
         </Card>
    );
};

export default withRouter(Country);