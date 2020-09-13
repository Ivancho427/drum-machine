import React, { Component } from 'react'
import Header from './Header';
import Drum from './Drum';

const drumAudio = [
    {
    id: 'Q',
    keyBoard: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  }, 
  {
    id: 'W',
    keyBoard: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  }, 
  {
    id: 'E',
    keyBoard: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    id: 'A',
    keyBoard: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    id: 'S',
    keyBoard: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  }, 
  {
    id: 'D',
    keyBoard: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    id: 'Z',
    keyBoard: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    id: 'X',
    keyBoard: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    id: 'C',
    keyBoard: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  },
];


export default class Machine extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: "Click en cualquier boton"
        }
    }
        handleText = (text) => {
            this.setState({
                text
            })
        
    }

    render() {
      return (
        <div id="drum-machine">
          <Header />
            <hr />
              <h1 id="display">{this.state.text}</h1>
              <div className="tabla">
                  {drumAudio.map(item => (
                      <Drum 
                       id={item.id}
                       keyBoard={item.keyBoard}
                       url={item.url}
                       handleText={this.handleText}/>
                  ))}
                
              </div>
            </div>
        )
    }
}

