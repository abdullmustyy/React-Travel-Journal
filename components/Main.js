import React from "react";
import Travel from "./Travel";
import data from "../data";

export default function Main(props) {
  const travelLog = data.map((data) => <Travel {...data} />);

  return <main className="main">{travelLog}</main>;
}
