import React,{ Component } from 'react'
import { Button } from '@material-ui/core'
import { Grid } from '@material-ui/core'


class Roll extends Component {
  state = { 
    Dice1:1,
    Dice2:2
   }

  handleClick = () => {
 
  let randomDice1= Math.floor(6*Math.random())+1
  let randomDice2= Math.floor(6*Math.random())+1
  this.setState({
    Dice1:randomDice1,
    Dice2:randomDice2
  },()=>console.log(this.state))
    
  }
  render() { 
    const {Dice1,Dice2}=this.state

    return (  
    <div className='DiceRoll'>
      <Grid container>
        <Grid md={6} xs={12} item>
          <img src={require(`../images/dice-${Dice1}.png`)} alt ={Dice1}/>
        </Grid>
        <Grid md={6} xs={12} item>
        <img src={require(`../images/dice-${Dice2}.png`)} alt={Dice2}/>
        </Grid>

      </Grid>
      <Button color='primary' variant="contained" onClick={this.handleClick}>
      RollTheDices
      </Button>
    </div>);
  }
}
 
export default Roll;