import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { GOOGLE_API_KEY } from "../config";

const map2d = () => {
  const center = {
    lat: 55.714,
    lng: 12.568728,
  };
  return (
    <>
      <LoadScript googleMapsApiKey={GOOGLE_API_KEY}>
        <GoogleMap mapContainerStyle={style} center={center} zoom={16}>
          {/* Child components, such as markers, info windows, etc. */}
        </GoogleMap>
      </LoadScript>
    </>
  );
};

export default map2d;

const style = {
  height: "100vh",
  width: "100vw",
};
