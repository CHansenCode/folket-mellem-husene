import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { GOOGLE_API_KEY } from "../config";

export default function Home() {
  const center = {
    lat: 55.714,
    lng: 12.568728,
  };

  return (
    <>
      <LoadScript googleMapsApiKey={GOOGLE_API_KEY}>
        <GoogleMap mapContainerStyle={style} center={center} zoom={18}>
          {/* Child components, such as markers, info windows, etc. */}
        </GoogleMap>
      </LoadScript>
    </>
  );
}

const style = {
  height: "100vh",
  width: "100vw",
};
