import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

const Calculator =() => {
    

    return(
            <>
                <Screens/>
                <ButtonGroup  size="lg" className="mb-2" aria-label="Basic example">
                    <Button  variant="primary">1</Button>
                    <Button variant="secondary">2</Button>
                    <Button variant="secondary">3</Button>
                </ButtonGroup>
                <br></br>
                <ButtonGroup  size="lg" className="mb-2" aria-label="Basic example">
                    <Button variant="secondary">4</Button>
                    <Button variant="secondary">5</Button>
                    <Button variant="secondary">6</Button>
                </ButtonGroup>
                <br></br>
                <ButtonGroup  size="lg" className="mb-2" aria-label="Basic example">
                    <Button variant="secondary">7</Button>
                    <Button variant="secondary">8</Button>
                    <Button variant="primary">9</Button>
                </ButtonGroup>
            </>

    )
    
}


export default Calculator;