import React from "react";

export interface IAlertContext {
  isShown: boolean;
  setAlert: (isShown: boolean) => void;
}

const defaultState = {
  isShown: false,
  setAlert: (isShown: boolean) => {},
};

export const AlertContext = React.createContext<IAlertContext>(defaultState);
