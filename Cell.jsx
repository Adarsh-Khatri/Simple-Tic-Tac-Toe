import React, { Component } from "react";

export default class Cell extends Component {
  renderSquare(i) {
    return (
      <button
        className="cell border-0 bg-success rounded"
        onClick={() => this.props.onClick(i)}
      >
        {this.props.squares[i] === -1 ? "" : this.props.squares[i]}
      </button>
    );
  }

  render() {
    return (
      <div>
        <div>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
