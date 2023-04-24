import React, { useState } from 'react';
import Styles from './tooltip.module.scss';

const Tooltip = ({ children, tooltipText }:any) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const onMouseEnter = () => {
    setShowTooltip(true);
  };

  const onMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className={Styles.container}>
      <div
       className={showTooltip ? Styles.tooltipShow : Styles.tooltipHide}
      >
        {tooltipText}
      </div>
      {React.cloneElement(children, {
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
      })}
    </div>
  );
};

export default Tooltip;
