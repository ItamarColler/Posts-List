import React from "react";
import "./Monitor.css";

interface MonitorContainerProps {
  selectedCount: number;
  totalCount: number;
}

const MonitorComponent: React.FC<MonitorContainerProps> = ({
  selectedCount,
  totalCount,
}) => {
  return (
    <div className="container">
      <div className="title-container">
        <div className="title-main">My Post Monitor</div>
        <div className="description">
          {selectedCount} of {totalCount} selected
        </div>
      </div>
      <div className="subtitles">Keep track of posts and their comments.</div>
    </div>
  );
};

export default MonitorComponent;
