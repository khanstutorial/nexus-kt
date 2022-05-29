import React from 'react';

const UptimeGraphBar = props => {
  return (
    <>
      {props.value == 1 ? (
        <div
          style={{
            borderLeft: '6px solid #2cfa2c',
            height: '40px',
            float: 'left',
            paddingRight: '2px',
          }}
        ></div>
      ) : (
        <div
          style={{
            borderLeft: '6px solid red',
            height: '40px',
            float: 'left',
            paddingRight: '2px',
          }}
        ></div>
      )}
    </>
  );
};

export default UptimeGraphBar;
