import { ArrowForwardIos } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

export default function ServiceCard({ data }) {
  return (
    <div className="col-lg-4 mb-4 ">
      <h2>{data.image()}</h2>

      <p style={{ fontWeight: 800, fontSize: 20 }}>{data.name}</p>
      <p>{data.text}</p>

      <div className="mt-3">
        <Button sx={{ color: "#f07810" }} endIcon={<ArrowForwardIos />}>
          Read more
        </Button>
      </div>
    </div>
  );
}
