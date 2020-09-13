import React, { Component } from 'react'


 export default class Drum extends Component {
    handleClick = () => {
        this.audio.play();
        this.audio.currentTime = 0;
        this.props.handleText(this.props.id);
    }

    handleKeyDown = (e) => {
        if(e.keyCode === this.props.id.charCodeAt() ) {}
        this.audio.play();
        this.audio.currentTime = 0;
        this.props.handleText(this.props.keyBoard)
    }
   componentDidMount () {
       document.addEventListener('keydown', this.handleKeyDown);
   }

   componentWillMount () {
       document.removeEventListener('keydown', this.handleKeyDown);
   
}

render () {
    return (
        <div className="tabla_letras" id={ this.props.id } onClick={ this.handleClick }>
        <p>{this.props.id}</p>
        <audio className="sonidos" ref={ input => this.audio = input } id={this.props.id} src={this.props.url}></audio>
        </div>
    )
}

 }