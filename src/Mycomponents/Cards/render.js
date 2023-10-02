import React from "react";
import Card from "./card";
import { useState } from "react";
import Data from ".//cardData";

const Render = () => {
  const [menuData] = useState(Data);

  return (
    <>
      <Card userData={menuData} />
    </>
  );
};

export default Render;
