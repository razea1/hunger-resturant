import React, { useState } from "react";
import Button from "./Button";
import "../layouts/DishesCard.css"; // Import the CSS file

const DishesCard = (props) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleButtonClick = () => {
    if (props.toggleOptions) {
      setShowOptions(!showOptions);
    }
  };

  return (
    <div className="w-full lg:w-1/4 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg">
      <img className="rounded-xl" src={props.img} alt="img" />
      <div className="space-y-4">
        <h3 className="font-semibold text-center text-xl pt-6">{props.title}</h3>
        <div className="flex flex-row justify-center"></div>
        <div className="flex flex-row items-center justify-center gap-4">
          <h3 className="font-semibold text-lg">{props.price}</h3>
          <Button title="הוספה לעגלה" onClick={handleButtonClick} />
        </div>
        {props.toggleOptions && showOptions && (
          <div className="pt-4 space-y-2" style={{ textAlign: "right" }}>
            <h1 className="font-semibold mb-2">: ירקות על המנה</h1>
            <div className="space-y-2">
              {["חסה", "מלפפון חמוץ", "עגבניה", "בצל", "סלט קרוב", "צימצורי"].map((option, index) => (
                <div className="checkbox-wrapper-30 checkbox-container" key={index}>
                  <label htmlFor={`option-${props.id}-${index}`} className="pl-2">
                    {option}
                  </label>
                  <span className="checkbox">
                    <input type="checkbox" id={`option-${props.id}-${index}`} />
                    <svg>
                      <use xlinkHref="#checkbox-30" className="checkbox"></use>
                    </svg>
                  </span>
                </div>
              ))}
            </div>
            <h1 className="font-semibold mb-2">: תוספת למנה רגילה</h1>
            <div className="space-y-2">
              {["הקפצת בלסמי 5", "12 צלי כתף", "אונטרייב 12", "ביקון טלה 10", "אסאדו 15", "רוטב גבינה 8", "פטריות 5", "ג׳בטה 5"].map(
                (option, index) => (
                  <div className="checkbox-wrapper-30 checkbox-container" key={index}>
                    <label htmlFor={`extraOption-${props.id}-${index}`} className="pl-2">
                      {option}
                    </label>
                    <span className="checkbox">
                      <input type="checkbox" id={`extraOption-${props.id}-${index}`} />
                      <svg>
                        <use xlinkHref="#checkbox-30" className="checkbox"></use>
                      </svg>
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        )}
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
        <symbol id="checkbox-30" viewBox="0 0 22 22">
          <path
            fill="none"
            stroke="currentColor"
            d="M5.5,11.3L9,14.8L20.2,3.3l0,0c-0.5-1-1.5-1.8-2.7-1.8h-13c-1.7,0-3,1.3-3,3v13c0,1.7,1.3,3,3,3h13 c1.7,0,3-1.3,3-3v-13c0-0.4-0.1-0.8-0.3-1.2"
          />
        </symbol>
      </svg>
    </div>
  );
};

export default DishesCard;
