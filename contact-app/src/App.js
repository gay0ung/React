import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {
  state = {
    information: [],
    keyword: '',
    id: 0
  };
  // 컴포넌트가 마운트 되기전 실행api
  componentWillMount() {
    const addressList = localStorage.addressList;
    const id = localStorage.id;
    if (addressList && id) {
      // 로컬스토리지에 값이 있으면 JSON변환
      this.setState({
        information: JSON.parse(addressList)
        // id: JSON.parse(id)
      });
    }
  }
  // 컴포넌트 업데이트 될때 마다 실행
  componentDidUpdate(prevProps, prevState) {
    if (
      JSON.stringify(prevState.addressList) !==
      JSON.stringify(this.state.information)
    ) {
      localStorage.addressList = JSON.stringify(this.state.information);
    }

    // if (JSON.stringify(prevState) !== JSON.stringify(this.id)) {
    //   localStorage.id = JSON.stringify(this.prevState);
    // }
  }
  handleSearch(e) {
    this.setState({
      keyword: e.target.value
    });
  }

  // 추가
  handleCreate = (data) => {
    const { information, id } = this.state;
    this.setState({
      information: information.concat({
        ...data,
        id: id + 1,
        img: Math.floor(Math.random() * 50) + 1
      })
    });
  };

  // 삭제
  handleRemove = (id) => {
    let { information } = this.state;
    this.setState({
      information: information.filter((info) => info.id !== id)
    });
  };

  // 수정
  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map((info) => {
        if (info.id === id) {
          return {
            id,
            ...data
          };
        }
        return info;
      })
    });
  };
  render() {
    const { information } = this.state;

    return (
      <div className="contact-wrap">
        <PhoneForm onCreate={this.handleCreate} />
        {information.length > 0 ? (
          <input
            value={this.state.keyword}
            onChange={this.handleSearch}
            placeholder="이름을 검색해 주세요"
          />
        ) : (
          <p>주소록을 추가해 주세요</p>
        )}
        <PhoneInfoList
          data={this.state.information.filter(
            (info) => info.name.indexOf(this.state.keyword) > -1
          )}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
