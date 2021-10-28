import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";

function Alert() {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;
  console.log(alertContext);

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
