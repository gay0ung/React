import React, { useEffect, useRef, useState } from 'react';

const PhoneInfo = ({ info, onRemove, onUpdate }) => {
  const spanEl = useRef();
  const { name, phone, id } = info;
  const [editing, setEditing] = useState(false);
  const [inputVal, setInputVal] = useState({
    name: '',
    phone: ''
  });

  const handleToggleEdit = () => {
    if (editing) {
      onUpdate(id, {
        name: inputVal.name,
        phone: inputVal.phone
      });
    } else {
      setInputVal({ name, phone });
    }
    setEditing(!editing);
  };

  const handleChange = (e) =>
    setInputVal({
      ...inputVal,
      [e.target.name]: e.target.value
    });

  useEffect(() => {
    if (!spanEl.current) return;
    if (spanEl.current) {
      return !spanEl.current
        ? false
        : (spanEl.current.style.hieght = spanEl.current.clientWidth);
    }
  });

  return (
    <div className={`address ${editing ? 'edit' : ''}`}>
      {editing ? (
        <>
          <div>
            이름 :
            <input name="name" onChange={handleChange} value={inputVal.name} />
          </div>
          <div>
            번호 :
            <input
              name="phone"
              onChange={handleChange}
              value={inputVal.phone}
            />
          </div>
        </>
      ) : (
        <div className="address-info">
          <span
            className="address-icon"
            ref={spanEl}
            number={Math.floor(Math.random() * 50)}
          />
          <b>{name}</b>
          <p>{phone}</p>
        </div>
      )}
      <button onClick={() => onRemove(id, name)} className="delete-btn">
        X
      </button>
      <button onClick={handleToggleEdit} className="edit-btn">
        {editing ? '적용' : '수정'}
      </button>
    </div>
  );
};

export default PhoneInfo;
