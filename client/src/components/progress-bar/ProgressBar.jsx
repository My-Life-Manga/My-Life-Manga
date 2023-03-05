import React from "react";

const ProgressBar = ({ progress }) => {
  const colorStops = [
    { percent: 0, color: "#ff0000" },
    { percent: 25, color: "#ff6600" },
    { percent: 50, color: "#ffcc00" },
    { percent: 75, color: "#bfff00" },
    { percent: 100, color: "#00ff00" },
  ];

  const findColor = () => {
    for (let i = 0; i < colorStops.length - 1; i++) {
      const start = colorStops[i];
      const end = colorStops[i + 1];
      if (progress >= start.percent && progress <= end.percent) {
        const percent = (progress - start.percent) / (end.percent - start.percent);
        const red = Math.round(parseInt(start.color.slice(1, 3), 16) * (1 - percent) + parseInt(end.color.slice(1, 3), 16) * percent);
        const green = Math.round(parseInt(start.color.slice(3, 5), 16) * (1 - percent) + parseInt(end.color.slice(3, 5), 16) * percent);
        const blue = Math.round(parseInt(start.color.slice(5, 7), 16) * (1 - percent) + parseInt(end.color.slice(5, 7), 16) * percent);
        return `rgb(${red}, ${green}, ${blue})`;
      }
    }
    return colorStops[colorStops.length - 1].color;
  };

  const progressBarStyles = {
    width: "100%",
    height: "20px",
    backgroundColor: "#f2f2f2",
    margin: "10px 0",
    borderRadius: "10px",
  };

  const progressStyles = {
    height: "100%",
    lineHeight: "20px",
    textAlign: "center",
    borderRadius: "10px",
    width: `${progress}%`,
    backgroundColor: findColor(),
    color: "white",
  };

  return (
    <div style={progressBarStyles}>
      <div style={progressStyles}>{progress}%</div>
    </div>
  );
};

export default ProgressBar;
