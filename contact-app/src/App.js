import React, { useEffect, useState } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';
import './assets/sass/style.scss';

const App = () => {
  const [information, setInformation] = useState(
    () => JSON.parse(window.localStorage.getItem('phoneList')) || []
  );
  const [id, setId] = useState(() =>
    JSON.parse(window.localStorage.getItem('phoneId') || 0)
  );

  const [keyword, setKeyword] = useState('');

  const handleCreate = (data) => {
    setId(id + 1);

    setInformation(
      information.concat({
        ...data,
        id
      })
    );
  };

  const handleChange = (e) => setKeyword(e.target.value);

  const handleRemove = (id, name) => {
    if (window.confirm(`'${name}' 님을 정말 삭제 하시겠습니까?`) === true) {
      setInformation(information.filter((info) => info.id !== id));
    } else {
      return false;
    }
  };

  const handleUpdate = (id, data) =>
    setInformation(
      information.map((info) => {
        if (info.id === id) {
          return { id, ...data };
        }
        return info;
      })
    );

  useEffect(() => {
    window.localStorage.setItem('phoneList', JSON.stringify(information));
    window.localStorage.setItem('phoneId', JSON.stringify(id));
  });

  return (
    <div className="address-wrap">
      <h1>주소록</h1>
      <PhoneForm onCreate={handleCreate} value={keyword} />
      <input
        placeholder="검색하기"
        onChange={handleChange}
        className="search-number"
      />
      {information.length < 1 ? (
        <div className="list-wrap">전화번호를 추가해 주세요.</div>
      ) : (
        <>
          <PhoneInfoList
            data={information
              .filter(({ name }) => name.indexOf(keyword) > -1)
              .sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0))}
            onRemove={handleRemove}
            onUpdate={handleUpdate}
            keyword={keyword}
          />
          <p>({information.length})개의 연락처</p>
        </>
      )}
    </div>
  );
};

export default App;
