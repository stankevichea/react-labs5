import React from 'react';


class AppPlayer2 extends React.Component {
  constructor(props) {
    super(props);
    
  }


  what_to_display_on_button(){
    if(this.props.button_click)
    return "This user is playing now"

    else
    return "Play"
    };


    render() {
      return (
        <div>
          <h2>Player Two</h2>
          <h3>Name:</h3><text >{this.props.name}</text>
          
          <h3>Played number of times</h3><text>{this.props.games}</text>
          <p><button title='Play' onClick={this.props.click}> {this.what_to_display_on_button().toString()}</button></p>
         
        </div>
      )
    }
  }
  export default AppPlayer2