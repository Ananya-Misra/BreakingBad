import React from "react";
function Popup({ popData, name, closePopup }) {
  const main = [];
  if (name.length === 0) {
    main[0] = "N/A";
    popData[0].nickname = "N/A";
  }

  for (var i = 0; i < name.length; i++) {
    main[i] = name[i].quote;
  }
  return (
    <>
      <div className="popup">
        <div className="content">
          <h2 data-aos="fade-down" className="text-center mt-5 mb-5 pophead">
            {popData[0].name}
          </h2>
          <div className="plot">
            <div className="plot1">
              <div data-aos="fade-right" className="effect">
                <img src={popData[0].img} alt="Retry" />
              </div>
            </div>
            <div className="plot2">
              <h3 data-aos="fade-left">
                D.O.B:<span> {popData[0].birthday}</span>
              </h3>
              <h3 data-aos="fade-left">
                Seasons: <span>{popData[0].appearance.join(", ")}</span>
              </h3>
              <h3 data-aos="fade-left">
                Occupation: <span>{popData[0].occupation.join(", ")}</span>
              </h3>
              <h3 data-aos="fade-left">
                Status: <span>{popData[0].status}</span>
              </h3>
              <h3 data-aos="fade-left">
                Nickname:<span> {popData[0].nickname}</span>
              </h3>
              <h3 data-aos="fade-left">
                Portrayed: <span> {popData[0].portrayed}</span>
              </h3>
              <h3 data-aos="fade-left">Quotes</h3>
              <div data-aos="fade-left">
                {main.map((curr) => {
                  return <li>{curr}</li>;
                })}
              </div>
              <br />
              <button
                data-aos="fade-right"
                className="closed"
                onClick={closePopup}
              >
                Close
              </button>
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Popup;
