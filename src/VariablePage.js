import React from 'react';

class VariablePage extends React.Component {

  goToHome = () => {
    this.props.history.push(`/`);
  }

  render() {
    return (
      <div className="page-variable">
        <h1>You Clicked on { this.props.match.params.id }</h1>
        <button onClick={this.goToHome}>Go To Home</button>
      </div>
    );
  }
}

export default VariablePage;