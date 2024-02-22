import React from "react";

interface IProps {
  className: string;
}

function BottomRect(props: IProps) {
  const { className } = props;
  return (
    <div className={`${className}`}>
      <svg width="100%" height="" viewBox="0 0 893 72">
        <path
          fill="#fff"
          d="M892.25 71.7201L0 71.7199L892.25 3.41805e-06L892.25"
        />
      </svg>
    </div>
  );
}

export default BottomRect;
