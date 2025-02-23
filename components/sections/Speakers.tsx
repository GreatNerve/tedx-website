import React from 'react'
import { GlareCard } from "../ui/CustomCard";
import Card from "react-bootstrap/Card";

export default function Speakers() {
  return (
    <div id="upcoming-speakers" className="speakers section-spacing">
            <h1 className="text-[5rem] uppercase text-center font-bold flex-2">
              Upcoming Speakers
            </h1>
            <div
              className="card-row"
              style={{ display: "flex", gap: "20px", justifyContent: "center" }}
            >
              <Card style={{ width: "25rem" }}>
                <Card.Body>
                  <GlareCard className="flex flex-col items-center justify-center">
                    <img
                      className="h-full w-full absolute inset-0 object-cover"
                      src="/image1.jpeg"
                    />
                  </GlareCard>
                </Card.Body>
              </Card>

              <Card style={{ width: "25rem" }}>
                <Card.Body>
                  <GlareCard className="flex flex-col items-center justify-center">
                    <img
                      className="h-full w-full absolute inset-0 object-cover"
                      src="/image2.jpeg"
                    />
                  </GlareCard>
                </Card.Body>
              </Card>

              <Card style={{ width: "25rem" }}>
                <Card.Body>
                  <GlareCard className="flex flex-col items-center justify-center">
                    <img
                      className="h-full w-full absolute inset-0 object-cover"
                      src="/image3.jpeg"
                    />
                  </GlareCard>
                </Card.Body>
              </Card>

              <Card style={{ width: "25rem" }}>
                <Card.Body>
                  <GlareCard className="flex flex-col items-center justify-center">
                    <img
                      className="h-full w-full absolute inset-0 object-cover"
                      src="/image4.jpeg"
                    />
                  </GlareCard>
                </Card.Body>
              </Card>
            </div>
          </div>
  )
}
