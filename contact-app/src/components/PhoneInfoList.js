import React from 'react';
import PhoneInfo from './PhoneInfo';
import '../assets/sass/phoneInfoList.scss';

const PhoneInfoList = ({ data, onRemove, onUpdate, keyword }) => {
  if (!data) return null;

  return (
    <div className="list-wrap">
      {data.length < 1 ? (
        <div>'{keyword}' 검색 결과가 없습니다.</div>
      ) : (
        data.map((info) => {
          return (
            <PhoneInfo
              onRemove={onRemove}
              info={info}
              key={info.id}
              onUpdate={onUpdate}
            />
          );
        })
      )}
    </div>
  );
};

export default PhoneInfoList;
