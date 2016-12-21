import React, { PropTypes } from 'react';
import s from './simpleLoader.css';

const statusClass = (indicator) => {
  switch (indicator) {
    case "loading":
      return s["simple-indicator__loading"]
    case "success":
      return s["simple-indicator__success"]
    case "error":
      return s["simple-indicator__error"]
    case "warning":
      return s["simple-indicator__warning"]
    case "disable":
      return s["simple-indicator__disable"]
    default:
      return s["simple-indicator__default"]
  }
}

const StatusIndicator = ({indicator,tooltips,overrideTip}) => {
  return (
    <div className={`${s["simple-indicator"]} ${statusClass(indicator)}`}></div>
  )
}

export default StatusIndicator;
