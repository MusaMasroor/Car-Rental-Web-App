"use client";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import store from "./Store";

interface CustomProviderProps {
  children: ReactNode;
}

const Prvider: React.FC<CustomProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Prvider;
