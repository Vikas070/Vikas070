import { Routes, Route } from "react-router";
import Home from "../home/Home";

export const RoutesConfig = () => {
  return (
    <Routes>
      {["/", "/home"].map((path, index) => {
        return <Route path={path} element={<Home />} key={index} />;
      })}
    </Routes>
  );
};
