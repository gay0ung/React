import React, { useRef, useState } from 'react';
import '../assets/sass/phoneForm.scss';

const PhoneForm = ({ onCreate }) => {
  const inputEl = useRef();
  const [inputVal, setInputVal] = useState({
    name: '',
    phone: ''
  });
  const { name, phone } = inputVal;

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const checkEn = /[a-zA-Z]/;
      const checkKo = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
      const checkSc = /[~!@#$%^&*()_+|<>?:{}]/;

      if (checkEn.test(value) || checkKo.test(value) || checkSc.test(value)) {
        alert('숫자만 입력해주세요!');
        return false;
      }
    }
    setInputVal({
      ...inputVal,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === '' || phone === '') {
      alert('이름과 전화번호를 입력하였는지 확인해 주세요.!');
      return false;
    }
    alert(`${name}님 추가가 완료 되었습니다.`);
    onCreate({ name, phone });
    setInputVal({
      name: '',
      phone: ''
    });
    inputEl.current.focus();
  };

  return (
    <form onSubmit={handleSubmit} className="input-form">
      <input
        name="name"
        placeholder="이름"
        onChange={handleChange}
        value={name}
        ref={inputEl}
      />
      <input
        name="phone"
        placeholder="전화번호('-' 없이 입력해주세요)"
        onChange={handleChange}
        value={phone}
      />
      <button type="submit">등록</button>
    </form>
  );
};

export default PhoneForm;
