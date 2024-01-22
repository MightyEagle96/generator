import React from "react";

export default function ServiceCard({ data }) {
  return (
    <div className="col-lg-4 mb-4 ">
      <h2>{data.image()}</h2>

      <p style={{ fontWeight: 800, fontSize: 20 }}>{data.name}</p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim ut quasi
        reprehenderit beatae eos cumque quos, quis, id reiciendis necessitatibus
        odit ipsa! Eius voluptatibus explicabo consequuntur eaque sint,
        veritatis cum.
      </p>
    </div>
  );
}
