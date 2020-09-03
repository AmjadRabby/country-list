import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const CountryDetail = () => {
    const {countryName} = useParams();

    const [countrys, setCountrys] = useState({});

    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCountrys(data[0]))
       
    }, [])

console.log(countrys)
    
    const { name, area, flag, region, population, capital} = countrys;
     return (
        <Card className="text-center">
        <Card.Header><h4> {name} </h4></Card.Header>
        <Card.Body>
        <Card.Title>City: {capital}</Card.Title>
            <Card.Text>
              
                <p>Area: {area}</p>
                <p>Region: {region}</p>
            </Card.Text>
            <Card.Img style={{width: '400px'}} variant="top" src={flag} />
        </Card.Body>
     <Card.Footer className="text-muted">Population: {population}</Card.Footer>
        </Card>
    );
};

export default CountryDetail;