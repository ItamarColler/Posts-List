import React from "react";

interface RefreshButton {
  refetch: () => void;
}
//onClick
export const RefreshButton: React.FC<RefreshButton> = ({ refetch }) => {
  return (
    <div className="refresh-container">
      <button className="refresh-button" onClick={refetch}>
        <span className="material-symbols-outlined refresh-icon">refresh</span>
        Refresh
      </button>
    </div>
  );
};
