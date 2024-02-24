import React from "react";

interface IProps {
  className: string;
}

function BottomRect(props: IProps) {
  const { className } = props;
  return (
    <div className={`${className}`}>
      {/* <svg viewBox="0 0 2880 250" xmlns="http://www.w3.org/2000/svg">
        <path d="M720 125L2160 0H2880V250H0V125H720Z" fill="white"></path>
      </svg> */}
      <svg viewBox="0 0 1920 150">
        <polygon fill="#F3F4F6" points="0 150 1920 150 1920 0 0 150" />
      </svg>
    </div>
  );
}

export default BottomRect;
