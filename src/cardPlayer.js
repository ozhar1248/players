import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React from 'react';
import players from './players.js'

class CardPlayer extends React.Component {
    render() {
        this.index = this.props.index;
        this.imgSrc = players[this.index].imgURL;
        this.fname = players[this.index].fName;
        this.lname = players[this.index].lName;
        this.bday = players[this.index].bday;
        this.link = players[this.index].link;
        return (
            <div className="card">
            <Card>
            <Card.Img variant="top" src={this.imgSrc} />
            <Card.Body>
                <Card.Title>{this.fname} {this.lname}</Card.Title>
                <Card.Text>
                Birth Day: {this.bday}
                </Card.Text>
                <a href={this.link} target="_blank" rel="noreferrer"><Button variant="primary">Read about me</Button></a>
            </Card.Body>
            </Card>
            </div>
        )
    }
}

export default CardPlayer;