// import React, { useEffect } from "react";
// // import {OlaMaps} from '../public/dist/olamaps-js-sdk.es.js'
// // import { OlaMaps } from "olamaps-web-sdk";
// import { cn } from "@/lib/utils";

import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

// const OLA_API_KEY = "wK829Ehvq1i7fVyVQTyDJfsHfRNPEfy9n34xh7kH";

// const MiniMap = ({
//   width,
//   height,
//   position,
//   className,
// }: {
//   width: string | number;
//   height: number;
//   position: number[];
//   className: string;
// }) => {
//   useEffect(() => {
//     import("olamaps-web-sdk").then((module) => {
//       const { OlaMaps } = module;
//       const olaMaps = new OlaMaps({
//         apiKey: OLA_API_KEY,
//       });
//       // initialize and render map here
//       const myMap = olaMaps.init({
//         style:
//           "https://api.olamaps.io/tiles/vector/v1/styles/default-light-standard/style.json",
//         container: "map",
//         center: position,
//         zoom: 16,
//       });

//       olaMaps
//         .addMarker({ offset: [0, 0], anchor: "bottom" })
//         .setLngLat(position)
//         .addTo(myMap);
//     });
//   }, [position]);

//   return (
//     <div id="map" className={cn(className)} style={{ width, height }}></div>
//   );
// };

// export default MiniMap;

export default function MiniMap(props: HTMLAttributes<HTMLIFrameElement>) {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.627906620592!2d77.0384531!3d28.6109375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05dd375e5a13%3A0x108adaa3abe4bd07!2sNetaji%20Subhas%20University%20of%20Technology!5e0!3m2!1sen!2sin!4v1740415271171!5m2!1sen!2sin"
      style={{ border: 0 }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      {...props}
      className={cn("w-10/12 md:w-8/12 max-w-3xl min-h-64 aspect-[6/4] mx-auto mt-12 rounded-lg")}
    ></iframe>
  );
}
