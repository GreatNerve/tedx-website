import React, { useEffect } from "react";
// import {OlaMaps} from '../public/dist/olamaps-js-sdk.es.js'
// import { OlaMaps } from "olamaps-web-sdk";
import { cn } from "@/lib/utils";

const OLA_API_KEY = "wK829Ehvq1i7fVyVQTyDJfsHfRNPEfy9n34xh7kH";

const MiniMap = ({
  width,
  height,
  position,
  className,
}: {
  width: string | number;
  height: number;
  position: number[];
  className: string;
}) => {
  useEffect(() => {
    import("olamaps-web-sdk").then((module) => {
      const { OlaMaps } = module;
      const olaMaps = new OlaMaps({
        apiKey: OLA_API_KEY,
      });
      // initialize and render map here
      const myMap = olaMaps.init({
        style:
          "https://api.olamaps.io/tiles/vector/v1/styles/default-light-standard/style.json",
        container: "map",
        center: position,
        zoom: 16,
      });

      olaMaps
        .addMarker({ offset: [0, 0], anchor: "bottom" })
        .setLngLat(position)
        .addTo(myMap);
    });
  }, []);

  return (
    <div id="map" className={cn(className)} style={{ width, height }}></div>
  );
};

export default MiniMap;
