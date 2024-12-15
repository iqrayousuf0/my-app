import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function MapComponent() {
  const position = [51.505, -0.09]; // Latitude and longitude for map center

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <MapContainer center={position} zoom={13} style={{ height: "100%", width: "100%" }}>
        {/* Tile Layer from OpenStreetMap */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Marker Example */}
        <Marker position={position}>
          <Popup>
            A simple example of a map without an API key!
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default MapComponent;
