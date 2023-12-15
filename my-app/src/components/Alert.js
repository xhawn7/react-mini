import React, { useEffect } from 'react';

const Alert = ({ body,type,showTips }) => {

  useEffect(()=>{
    const tipsTimeout = setTimeout(()=>{
      showTips(false,'','')
    },1000)
    return ()=>clearTimeout(tipsTimeout)
  },[body])
  return <p className={`alert alert-${type}`}>{body}</p>;
};

export default Alert;
