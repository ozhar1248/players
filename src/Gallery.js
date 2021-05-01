import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import CardPlayer from "./cardPlayer";
import React from 'react';
import players from "./players";

function initialIndexArray(arr)
{
    let len = players.length;
    for (let i=0; i<len; ++i)
    {
        arr.push(i);
    }
}

class Gallery extends React.Component {
    constructor() {
        super();
        this.initialIndexes = [];
        initialIndexArray(this.initialIndexes);
        this.fnameIndexes = this.initialIndexes;
        this.lnameIndexes = this.initialIndexes;
        this.lenIndexes = this.initialIndexes.length;
        this.state = {
            validIndexes: this.initialIndexes
        }
    }
    chgFname= () =>
    {
        let name = this.fnameInput.value.toLowerCase();
        this.fnameIndexes = this.initialIndexes.filter( i => players[i].fName.toLowerCase().startsWith(name));
        this.setState({
            validIndexes: this.fnameIndexes.filter(x => this.lnameIndexes.includes(x))
        })
    }
    chgLname = () =>
    {
        let name = this.lnameInput.value.toLowerCase();
        this.lnameIndexes = this.initialIndexes.filter( i => players[i].lName.toLowerCase().startsWith(name));
        this.setState({
            validIndexes: this.lnameIndexes.filter(x => this.fnameIndexes.includes(x))
        })
    }
    saveFname = (input) => {
        this.fnameInput= input;
    }
    saveLname = (input) => {
        this.lnameInput= input;
    }
    render() {
        
        let cols=[];
        let len = this.state.validIndexes.length;
        for (let i=0; i<len; ++i)
        {
            cols.push(<Col xs={6} md={4}><CardPlayer key={i} index={this.state.validIndexes[i]}></CardPlayer></Col>);
        }
        return (
            <div>
                <div>
                    <input type="text" onChange={this.chgFname} ref={this.saveFname} placeholder="First Name"></input>
                    <input type="text" onChange={this.chgLname} ref={this.saveLname} placeholder="Last Name"></input>
                </div>
                <Container>
                    <Row>
                        {cols}
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Gallery;