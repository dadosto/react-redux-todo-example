import React from 'react';

export default function LinkComponent(props) {
  
  const {
    active,
    url,
    onClick,
    children
  } = props;
  
  let linkStyle = {
    fontSize: '16px',
    paddingRight: '6px', 
    textDecoration: 'underline',
    color: '#69b'
  };
  
  let spanStyle= {
    fontSize: '16px',
    paddingRight: '6px', 
    color: '#333'
  };
  
  if (active) {
    return <span style={spanStyle}> {children} </span>    
  }
  
  return (
    <a href={url} style={linkStyle} onClick={(e) => {e.preventDefault(); onClick()}}>   
      {children}
    </a>
  );
}

LinkComponent.propTypes = {
  active: React.PropTypes.bool,
  url: React.PropTypes.string,
  onClick: React.PropTypes.func
};