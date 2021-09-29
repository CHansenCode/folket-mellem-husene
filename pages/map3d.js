import { useEffect } from "react";
import { initMap } from "../util/initMap";

const map3d = () => {
  //   useEffect(() => {
  //     initMap();
  //   }, []);
  return (
    <div style={style}>
      <div id="map"></div>
    </div>
  );
};

export default map3d;

const style = {
  height: "100%",
  width: "100%",
  backgroundColor: "red",
};
