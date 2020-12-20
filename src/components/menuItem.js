import React from 'react';


const MenuItem = ({ menuItem }) => (
    <div style={{
      
    }}>
      <a href={menuItem.path}>{menuItem.label}</a>
    </div>
  )


export default MenuItem;

