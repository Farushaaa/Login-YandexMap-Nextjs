"use client";
import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { useState } from "react";
import HoverContainer from "./HoverContainer";

const YandexMap = () => {
  let events = [
    {
      id: 1,
      axis: [51.090329901302425, 71.39938940808027],
      location: "Nazarbayev Univesity",
      date: "16.11.2023 at 10:30 AM",
      eventName: "Chess Tournament",
    },
    {
      id: 2,
      axis: [51.09341156348086, 71.40070323679193],
      location: "PyramindLab at NU",
      date: "20.11.2023 at 21:00 PM",
      eventName: "Volcano experiment",
    },
  ];

  //const [isClick, setIsClick] = useState(false);
  const [placemarkDetails, setPlacemarkDetails] = useState(events);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

  const handlePlacemarkClick = (event, coordinates, e) => {
    if (selectedEvent && selectedEvent.id === event.id) {
      setSelectedEvent(null);
    } else {
      setSelectedEvent(event);
      setClickPosition({ x: e.get("clientX"), y: e.get("clientY") });
    }
  };

  return (
    <YMaps>
      <Map
        className="yandexmap"
        defaultState={{
          center: events[0].axis,
          zoom: 16,
          controls: [],
        }}
      >
        {placemarkDetails.map((event) => (
          <Placemark
            defaultGeometry={event.axis}
            key={event.id}
            onClick={(e) => handlePlacemarkClick(event, event.axis, e)}
          />
        ))}
      </Map>
      {selectedEvent && (
        <HoverContainer
          selectedEvent={selectedEvent}
          top={clickPosition.y}
          left={clickPosition.x}
        />
      )}
    </YMaps>
  );
};

export default YandexMap;
