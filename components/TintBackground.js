import React from "react";

export default function TintBackground(props) {
  return (
    <div
      className={props.act ? "tintBackground active" : "tintBackground z-50"}
      onClick={props.button}
    ></div>
  );
}
