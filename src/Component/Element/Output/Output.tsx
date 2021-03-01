import React from "react";
import "./Output.css";

interface ProppsFunc {
  getEvent: (e: any) => void;
}

export const Output: React.FC<ProppsFunc> = ({ getEvent }) => {
  return (
    <div className="exitConteiner">
      <p className="exit-befor">
        {" "}
        .class &ensp;&#123; <br />
        display: flex;{" "}
      </p>
      <textarea
        className="exitInput"
        placeholder="поле ввода"
        onChange={(e) => {
          getEvent(e.target.value);
        }}
        id="txtarea"
      ></textarea>
      <p className="exit-after"> &#125;</p>
    </div>
  );
};
