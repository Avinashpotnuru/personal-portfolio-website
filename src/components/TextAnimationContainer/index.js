"use client";

import React from "react";
import Reveal from "../Reveal";

const TextContainer = ({ text, className }) => {
  return <Reveal className={className}>{text}</Reveal>;
};

export default TextContainer;
