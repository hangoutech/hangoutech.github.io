import React from "react";
import "./ImageGrid.scss";

function ImageGrid() {
  return (
    <div className="image-grid">
      <div className="image-part top-left"></div>
      <div className="image-part top-right"></div>
      <div className="image-part bottom-left"></div>
      <div className="image-part bottom-right"></div>
    </div>
  );
}

export default ImageGrid;
