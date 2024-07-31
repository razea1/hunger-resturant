import React, { useState } from "react";
import Button from "./Button";

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
              <div>
                <input type="checkbox" id="option1" />
                <label htmlFor="option1" className="pl-2">
                  חסה
                </label>
              </div>
              <div>
                <input type="checkbox" id="option2" />
                <label htmlFor="option2" className="pl-2">
                  מלפפון חמוץ
                </label>
              </div>
              <div>
                <input type="checkbox" id="option3" />
                <label htmlFor="option3" className="pl-2">
                  עגבניה
                </label>
              </div>
              <div>
                <input type="checkbox" id="option4" />
                <label htmlFor="option4" className="pl-2">
                  בצל
                </label>
              </div>
              <div>
                <input type="checkbox" id="option5" />
                <label htmlFor="option5" className="pl-2">
                  סלט קרוב
                </label>
              </div>
              <div>
                <input type="checkbox" id="option6" />
                <label htmlFor="option6" className="pl-2">
                  צימצורי
                </label>
              </div>
            </div>
            <h1 className="font-semibold mb-2">: תוספת למנה רגילה</h1>
            <div className="space-y-2">
              <div>
                <input type="checkbox" id="option1" />
                <label htmlFor="option1" className="pl-2">
                  חריפות 15
                </label>
              </div>
              <div>
                <input type="checkbox" id="option2" />
                <label htmlFor="option2" className="pl-2">
                  15 צלי כתף
                </label>
              </div>
              <div>
                <input type="checkbox" id="option3" />
                <label htmlFor="option3" className="pl-2">
                  אונטרייב 15
                </label>
              </div>
              <div>
                <input type="checkbox" id="option4" />
                <label htmlFor="option4" className="pl-2">
                  ביקון טלה 15
                </label>
              </div>
              <div>
                <input type="checkbox" id="option5" />
                <label htmlFor="option5" className="pl-2">
                  אסאדו 18
                </label>
              </div>
              <div>
                <input type="checkbox" id="option6" />
                <label htmlFor="option6" className="pl-2">
                  רוטב גבינה 8
                </label>
              </div>
              <div>
                <input type="checkbox" id="option7" />
                <label htmlFor="option7" className="pl-2">
                  פטריות 5
                </label>
              </div>
              <div>
                <input type="checkbox" id="option8" />
                <label htmlFor="option8" className="pl-2">
                  ג׳בטה 5
                </label>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DishesCard;
