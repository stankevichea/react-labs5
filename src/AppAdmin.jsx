

import React from 'react';
import AppPlayer1 from './AppPlayer1'
import AppPlayer2 from './AppPlayer2'

class AppAdmin extends React.Component 
{
 
    constructor() {
        super();
       
        this.changeHandlerName_1 = this.changeHandlerName_1.bind(this);
        this.changeHandlerName_2 = this.changeHandlerName_2.bind(this);
        this.changeHandlerClick_1 = this.changeHandlerClick_1.bind(this);
        this.changeHandlerClick_2 = this.changeHandlerClick_2.bind(this);
        this.state={
          name_of_player_1:"",
          name_of_player_2:"",
          click_1:false,
          click_2:true,
          number_of_games_1:0,
          number_of_games_2:0,
      }}
        
      changeHandlerName_1 = event => {
        this.setState({
          name_of_player_1: event.target.value
        })}
        changeHandlerName_2 = event => {
            this.setState({
              name_of_player_2: event.target.value
            })}
           

            changeHandlerClick_1 = event => {
              if(!this.state.click_1)
              this.setState({
               number_of_games_1:this.state.number_of_games_1+1
              })

              this.setState({
                click_1: true,
                click_2: false,

              })
            
            
            }
              changeHandlerClick_2 = event => {
              if(!this.state.click_2)
              this.setState({
               number_of_games_2:this.state.number_of_games_2+1
              })
                this.setState({
                  click_1: false,
                click_2: true
                })}

       
        

    render() {
      const { name_of_player_1, name_of_player_2 } = this.state;
        return (
          <div>
    <h3>
        Minimal React
    <AppPlayer1 name={name_of_player_1} click={this.changeHandlerClick_1} button_click={this.state.click_1} games={this.state.number_of_games_1}/>
    <AppPlayer2 name={name_of_player_2} click={this.changeHandlerClick_2} button_click={this.state.click_2} games={this.state.number_of_games_2}/>
  
  
  <text>Input name of player one           </text>
  <input
      type="text"
      className="form-control"
      id="formGroupExampleInput"
      value={this.state.name_of_player_1} 
      onChange={this.changeHandlerName_1} 
    />
    
    
     <text>Input name of player two </text>
     <input
      type="text"
      className="form-control"
      id="formGroupExampleInput2"
      value={this.state.name_of_player_2} 
      onChange={this.changeHandlerName_2} 
    />
   
</h3>
</div>
)
    }
}
export default AppAdmin;