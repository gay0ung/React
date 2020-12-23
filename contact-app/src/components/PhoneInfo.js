import React, { Component, Fragment } from 'react';

class PhoneInfo extends Component {
  state = {
    editing: false,
    name: '',
    phone: ''
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state !== nextState) {
      return true;
    }
    return this.props.info !== nextProps.info;
  }

  handleRemove = () => {
    const { info, onRemove } = this.props;
    onRemove(info.id);
  };

  // 수정
  handleToggleEdit = () => {
    const { info, onUpdate } = this.props;

    if (this.state.editing) {
      onUpdate(info.id, {
        name: this.state.name,
        phone: this.state.phone
      });
    } else {
      this.setState({
        name: info.name,
        phone: info.phone
      });
    }

    this.setState({
      editing: !this.state.editing
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { name, phone } = this.props.info;
    const { editing } = this.state;

    // const style = {
    //   width: '50px',
    //   height: '50px',
    //   display: 'block'
    // };
    return (
      <div className="phone-info">
        {editing ? (
          <Fragment>
            <div>
              <input
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                placeholder="이름"
              />
              <input
                onChange={this.handleChange}
                name="phone"
                value={this.state.phone}
                placeholder="전화번호"
              />
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <div className="address">
              <div className="profile-img">이미지 나올자리</div>
              <div>
                <p>{name}</p>
                <p>{phone}</p>
              </div>
            </div>
          </Fragment>
        )}
        <button onClick={this.handleToggleEdit}>
          {editing ? (
            <i className="fas fa-check"></i>
          ) : (
            <i className="far fa-edit"></i>
          )}
        </button>
        <button onClick={this.handleRemove}>
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
    );
  }
}

export default PhoneInfo;
