import React from "react";

export default function DateTime() {
  return (function formatTime() {
    let now = new Date();
    let hour = now.getHours();
    if (hour < 10) {
      hour = `0${hour}`;
    }
    let minutes = now.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    let time = `${hour}h${minutes}`;
    return <div>{time}</div>;
  })("");
}
