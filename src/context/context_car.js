import React from "react";
import localsCarUrl from "../url/localsCarUrl";

export const CarContext = React.createContext();

export default function CarProvider({ children }) {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState(localsCarUrl);

  React.useEffect(() => {
    return () => {
      // setData();
    };
  }, []);

  return <CarContext.Provider value={{ data }}>{children}</CarContext.Provider>;
}
