import React from "react";

function Alert({ alert }) {
  //   if (!alert) return null;

  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className='fas fa-info-circle' /> {alert.msg}
      </div>
    )
  );
}

export default Alert;
