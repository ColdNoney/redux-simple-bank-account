import React, { Component } from "react";
import NumberFormat  from "react-number-format";
import photographer from "./images/girl.png";
import "./App.css";
import { store } from './store'
import { withdraw } from './actions'

class App extends Component {
  render() {
    const { totalAmount, username } = store.getState();
    return (
      <div className="App">
        <img className="App__userpic" src={photographer} alt="user" />
        <p className="App__username">Hello, {username}! </p>
        <div className="App__amount">
          <span>$</span>{formatNumber(totalAmount, '')}
          <p className="App__amount--info">Total Amount</p>
        </div>

        <section className="App__buttons">
          <button data-amount="10000" onClick={dispatchBtnAction}>WITHDRAW $10,000</button>
          <button data-amount="5000" onClick={dispatchBtnAction}>WITHDRAW $5,000</button>
        </section>

        <p className="App__giveaway">Give away all your cash to charity</p>
      </div>
    );
  }
}

function dispatchBtnAction(e) {
  const amount = e.target.dataset.amount
  store.dispatch(withdraw(amount))
}

function formatNumber(n, currency) {
  return currency + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
}

export default App;
