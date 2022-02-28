import React from "react";

const CreateCountDown = () => {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <label>Title:</label>
          <input type="text" />
        </div>
        <div>
          <label>URL:</label>
          <input type="text" />
        </div>
        <div>
          <label>Genre:</label>
          <input type="text" />
        </div>
        <div>
          <label>About:</label>
          <textarea id="" cols="30" rows="10"></textarea>
        </div>
        <div>
          <label>Youtube URL:</label>
          <input type="text" />
        </div>
        <div>
          <label>ImdbScore:</label>
          <input type="number" />
        </div>
        <div>
          <h3>Air Date:</h3>
        </div>
        <div>
          <input type="date" />
        </div>
      </div>
      <button>Subbmit</button>
    </div>
  );
};

export default CreateCountDown;
