import React from 'react';

const PageA  = () => <div style={{ width: 300, height: 500, background: 'pink' }}>
  {
    new Array(400).fill('xxxxxx').map((item,index) => <div><span key={index}>{item}</span></div>)
  }
</div>;

export default PageA;