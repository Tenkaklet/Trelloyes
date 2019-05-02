import React , { Component } from 'react';



class Card extends Component {

    removeCard = (e) => {
        this.props.onDelete(this.props.cardIndex);
        
    }




    render() {

        return (
            <div className="Card">
                <h3>{this.props.title}</h3>
                <p>{this.props.content}</p>
                <button onClick={() => this.removeCard(this.props.cardIndex)}>Delete</button>
            </div>
        )
    }
}

export default Card;