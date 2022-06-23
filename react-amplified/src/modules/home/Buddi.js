import React from "react";
import BuddiesList from "../../assets/buddis.json"

console.log(BuddiesList)

export default function Buddi(props) {
  return (
    <div className="" id="">
      <div className="model">
        <img src={props.imgUrl} style={{ width: "100%", marginTop: "2rem" }} />
      </div>
    </div>
  );
}
