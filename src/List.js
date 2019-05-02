import React, { Component } from 'react';
import Card from './Card';
class List extends Component {
    render() {
        

        const cardContent = Object.keys(this.props.cards).map((card,i ) => {        
            return <Card title={this.props.cards[card].title} onDelete={() => this.props.handleDelete(card)} content={this.props.cards[card].content} key={i} cardIndex={card} />
        });
        
        
        
        return(
            <section className="List">
                <header className="List-header">
                    <h2>{this.props.header}</h2>              
                </header>
                <div className="List-cards">
                    
                    { cardContent }
                </div>
            </section>
        )
    }
}

export default List;