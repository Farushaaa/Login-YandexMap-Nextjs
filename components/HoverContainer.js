import React from "react";

const HoverContainer = ({ selectedEvent, top, left }) => {
  return (
    <div
      className="hover_container"
      style={{ position: "absolute", top: top, left: left }}
    >
      <p className="eventName">{selectedEvent.eventName}</p>
      <p className="locationName">{selectedEvent.location}</p>
      <p className="timeEvent">{selectedEvent.date}</p>
    </div>
  );
};

export default HoverContainer;
