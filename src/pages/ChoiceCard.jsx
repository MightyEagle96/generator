import { Typography } from "@mui/material";
import React from "react";

export default function ChoiceCard({ choice }) {
  return (
    <div className="col-lg-3 me-5 mb-4   p-0">
      <div
        className="p-3 m-0"
        style={{ backgroundColor: choice.backgroundColor }}
      >
        <Typography
          sx={{ color: choice.color }}
          fontWeight={700}
          textTransform={"uppercase"}
        >
          {choice.title}
        </Typography>
      </div>
      <div className="p-3 shadow-sm rounded-bottom">
        <Typography variant="body2" style={{ color: "#5f6769" }}>
          {choice.text}
        </Typography>
      </div>
    </div>
  );
}
