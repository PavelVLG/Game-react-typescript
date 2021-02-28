import React from "react";
import "./LevelChange.css";

interface PropsFunc {
  changeLevel: (e: any) => void;
}

export const LevelChange: React.FC<PropsFunc> = ({ changeLevel }) => {
  return (
    <div className="textButton-conteiner">
      <div className="textFlex">
        <div className="buttonText">
          <p>Уровень </p>
        </div>
        <div className="battonItem">
          <div>
            <button
              className="button-1"
              type="button"
              id="down"
              onClick={changeLevel}
            >
              назад
            </button>
          </div>
          <div>
            <button
              className="button-2"
              type="button"
              id="up"
              onClick={changeLevel}
            >
              вперед
            </button>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
