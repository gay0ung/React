import React, { Component } from 'react';

class PhoneForm extends Component {
  input = React.createRef();
  state = {
    name: '',
    phone: ''
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSumbmit = (e) => {
    e.preventDefault();

    this.props.onCreate(this.state);
    this.setState({
      name: '',
      phone: ''
    });

    this.input.current.focus();
  };
  static defaultProps = {
    data: []
  };
  render() {
    return (
      <form onSubmit={this.handleSumbmit}>
        <input
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          type="text"
          placeholder="이름"
          ref={this.input}
        />
        <input
          name="phone"
          value={this.state.phone}
          onChange={this.handleChange}
          type="text"
          placeholder="전화번호"
        />
        <button type="submit">등록</button>
      </form>
    );
  }
}

export default PhoneForm;
