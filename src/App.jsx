import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue: '',
      amountReceived: '',
      changeDue: 0,
      twenties: 0,
      tens: 0,
      fives: 0,
      ones: 0,
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0
    };
    this.calculate = this.calculate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (event.target.value < 0) return;
    this.setState({
      changeDue: 0,
      twenties: 0,
      tens: 0,
      fives: 0,
      ones: 0,
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0
    });
    switch (event.target.name) {
      case 'amountDue':
        this.setState({
          amountDue: event.target.value
        });
        break;
      case 'amountReceived':
        this.setState({
          amountReceived: event.target.value
        });
        break;
      default:
        break;
    }
  }

  calculate() {
    let changeDue = (this.state.amountReceived - this.state.amountDue);
    const change = {};
    this.setState({
      changeDue: changeDue.toFixed(2),
      twenties: 0,
      tens: 0,
      fives: 0,
      ones: 0,
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0
    });
    if (changeDue < 0) return;
    const money = [
      ['twenties', 20],
      ['tens', 10],
      ['fives', 5],
      ['ones', 1],
      ['quarters', 0.25],
      ['dimes', 0.1],
      ['nickels', 0.05],
      ['pennies', 0.01]
    ];
    for (let i = 0; i < money.length; i++) {
      const currChange = Math.floor(changeDue.toFixed(2) / money[i][1]);
      change[money[i][0]] = currChange;
      changeDue -= currChange * money[i][1];
    }

    this.setState({
      twenties: change.twenties,
      tens: change.tens,
      fives: change.fives,
      ones: change.ones,
      quarters: change.quarters,
      dimes: change.dimes,
      nickels: change.nickels,
      pennies: change.pennies
    });
  }

  render() {
    const whiteText = {
      color: 'white'
    };
    const lightGray = {
      backgroundColor: 'lightgray'
    };
    const white = {
      backgroundColor: 'white'
    };
    const rounded = {
      borderRadius: '10px'
    };
    return (
      <div className='container'>
        <h1 style={ whiteText } className='mt-4'>Change Calculator</h1>
        <hr style={ white } />
        <div className='row'>
          <div className='col-md-4'>
            <div className='panel panel-default rounded' style={ white }>
              <div className='panel-heading p-2 rounded' style={ lightGray }><strong>Enter Information</strong></div>
              <div className='panel-body p-3'>
                <div className='mt-3 ml-2'><label htmlFor='amountDue'><strong>How much is due?</strong></label></div>
                <div className='ml-2'><input type='number' name='amountDue' value={ this.state.amountDue } onChange={ this.handleChange } /></div>
                <div className='mt-3 ml-2'><label htmlFor='amountReceived'><strong>How much was received?</strong></label></div>
                <div className='ml-2'><input type='number' name='amountReceived' value={ this.state.amountReceived } onChange={ this.handleChange } /></div>
              </div>
              <div className='panel-footer rounded' style={ lightGray }>
                <button onClick={ this.calculate } name='submit' className='btn btn-primary btn-block p-2'>Calculate</button>
              </div>
            </div>
          </div>
          <div className='col-md-8 text-center rounded' style={ white }>
            <div className={ this.state.changeDue > 0 ? 'alert alert-success rounded mt-2' : 'invisible' }>The total change due is ${ this.state.changeDue }</div>
            <div className={ this.state.changeDue < 0 ? 'alert alert-danger rounded' : 'invisible' }>Additional money due.</div>
            <div className='row'>
              <div className='col-md-2 m-4 ml-5 p-3 rounded' style={ lightGray }>
                <h4>Twenties</h4>
                <Slide top when={ this.state.twenties > 0 }>
                  <img src='./images/twentydollars.jpg' alt='twenty dollar bill' width='75' />
                  <p className='change'>{ this.state.twenties }</p>
                </Slide>
              </div>
              <div className='col-md-2 m-4 p-3 rounded' style={ lightGray }>
                <h4>Tens</h4>
                <Slide top when={ this.state.tens > 0 }>
                  <img src='./images/tendollars.jpg' alt='twenty dollar bill' width='75' />
                  <p className='change'>{ this.state.tens }</p>
                </Slide>
              </div>
              <div className='col-md-2 m-4 p-3 rounded' style={ lightGray }>
                <h4>Fives</h4>
                <Slide top when={ this.state.fives > 0 }>
                  <img src='./images/fivedollars.jpg' alt='twenty dollar bill' width='75' />
                  <p className='change'>{ this.state.fives }</p>
                </Slide>
              </div>
              <div className='col-md-2 m-4 p-3 rounded' style={ lightGray }>
                <h4>Ones</h4>
                <Slide top when={ this.state.ones > 0 }>
                  <img src='./images/dollars.jpg' alt='twenty dollar bill' width='75' />
                  <p className='change'>{ this.state.ones }</p>
                </Slide>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-2 m-4 ml-5 p-3 rounded' style={ lightGray }>
                <h4>Quarters</h4>
                <Slide top when={ this.state.quarters > 0 }>
                  <img src='./images/quarters.jpg' alt='twenty dollar bill' width='75' />
                  <p className='change text-center'>{ this.state.quarters }</p>
                </Slide>
              </div>
              <div className='col-md-2 m-4 p-3 rounded' style={ lightGray }>
                <h4>Dimes</h4>
                <Slide top when={ this.state.dimes > 0 }>
                  <img src='./images/dimes.jpg' alt='twenty dollar bill' width='75' />
                  <p className='change text-center'>{ this.state.dimes }</p>
                </Slide>
              </div>
              <div className='col-md-2 m-4 p-3 rounded' style={ lightGray }>
                <h4>Nickels</h4>
                <Slide top when={ this.state.nickels > 0 }>
                  <img src='./images/nickels.jpg' alt='twenty dollar bill' width='75' />
                  <p className='change text-center'>{ this.state.nickels }</p>
                </Slide>
              </div>
              <div className='col-md-2 m-4 p-3 rounded' style={ lightGray }>
                <h4>Pennies</h4>
                <Slide top when={ this.state.pennies > 0 }>
                  <img src='./images/pennies.jpg' alt='twenty dollar bill' width='75' />
                  <p className='change text-center'>{ this.state.pennies }</p>
                </Slide>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
