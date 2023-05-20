import React, { Component } from "react";
import Cell from "./Cell";
import './Game.css'


export default class MainComponent extends Component {

  state = {
    xIsNext: true,
    stepNumber: 0,
    squares: [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    status: '',
  };


  handleClick(i) {
    let s1 = { ...this.state };
    const squares = [...this.state.squares];
    if (squares[i] !== -1 || this.calculateWinner(squares)) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
      stepNumber: this.state.stepNumber + 1,
    });
  }


  reset = () => {
    let s1 = { ...this.state };
    s1.xIsNext = true;
    s1.stepNumber = 0;
    s1.squares = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
    s1.status = '';
    this.setState(s1)
  }

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] !== -1 &&
        squares[a] === squares[b] &&
        squares[b] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  render() {
    const currentSquares = this.state.squares;
    const winner = this.calculateWinner(currentSquares);
    let { status } = this.state;

    if (winner) {
      status = "Winner is " + winner;
    } else if (this.state.stepNumber === 9 || currentSquares.indexOf(-1) === -1) {
      status = "Game Over";
    } else {
      status = "Move: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="container text-center game">
        <div className="game-info">
          <h3 className="fw-bold">{status}</h3>
        </div>
        <div className="d-flex justify-content-center">
          <Cell onClick={(i) => this.handleClick(i)} squares={currentSquares} />
        </div>
        <button type="button" className="btn btn-primary mt-3" onClick={this.reset}>{currentSquares.indexOf(-1) !== -1 ? 'Reset Game' : 'New Game'}
        </button>
      </div>
    );
  }
}