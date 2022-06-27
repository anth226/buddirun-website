import React from "react";
import BuddiesList from "../../assets/buddi-list-home.json"

console.log(BuddiesList)

export default function Buddi(props) {
  return (
        <img src={props.imgUrl} />
  );
}
