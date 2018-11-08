import React, { Component } from 'react';

import './App.css';
import { connect } from  'react-redux';

class App extends Component {


  
  render() {
    return (
      <div className="App">
        <div className="col">
          <div> <span>A:</span><span>{this.props.a}</span></div>
          <button onClick={() => this.props.updateA(this.props.b)}>Update A</button>         
        </div>
        <div className="col">
          <div> <span>B:</span><span>{this.props.b}</span></div>
          <button onClick={() => this.props.updateB(this.props.a)}>Update B</button>         
        </div>



        {/* <div className="age">Age: <span>{this.props.age}</span></div>
        <button className="ageUp" onClick={this.props.onAgeUp}>Age UP</button>
        <button className="ageDown" onClick={this.props.onAgeDown}>Age Down</button>
        <hr></hr>
     

     
        <div>History</div>
        <div>
          <ul>
            {
              this.props.history.map(el =>(
                <li className="historyItem" key={el.id} onClick={() => this.props.onDeleteItem(el.id)}>
                  {el.age}
                </li>

              ))
            }
          </ul>
        </div> */}
      </div>
    );
  }
}


  const mapStateToProps = (state) => {
    return {
      a: state.rA.a,
      b: state.rB.b

    }

  };

  const mapDispatchToProps= (dispatch) => {
    return {
      updateA: (b) => dispatch({type:'UPDATE_A', b:b}),
      updateB: (a) => dispatch({type:'UPDATE_B', a:a})
    }
  };
// const mapStateToProps = (state) => {
//   return {
//     age: state.age,
//     history: state.history
//   }
// }

// const mapDispachToProps = (dispach) => {
//   return {
//     onAgeUp: () => dispach({type:'AGE_UP', value: 1}),
//     onAgeDown: () => dispach({type:'AGE_DOWN', value: 1}),
//     onDeleteItem: (id) => dispach({type:'DEL_ITEM', key: id})
//   }

export default connect(mapStateToProps,mapDispatchToProps)(App);
