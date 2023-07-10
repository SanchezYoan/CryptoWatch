import React from "react";

const TableFilter = () => {
  return (
    <div className="table-filters">
      <div className="table-filters-container">
        <div className="stable-checkbox-container">
          <input type="checkbox" id="stableCoin" defaultChecked={true} />
          <label htmlFor="stableCoin">Avec stable coin</label>
        </div>
        <div className="no-list-btn">
          <p>Ancune liste</p>
        </div>
        <div className="fav-list">
          <p>Liste des favoris</p>
          <img src="./assets/star-full.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default TableFilter;
