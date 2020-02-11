import React from "react";

const viewStyle = {
  backgroundColor: "#474747",
  color: "#ffffff",
  border: "none"
}

export default function RecentCommentsEntry({ commentsContent }) {
  return  (
    <div className="list-group">
      <a className="list-group-item active" style={viewStyle}>Recent Created Comments</a>
      <div className="list-group-item">
        <div className="list-group">
          <div className="list-group">
            {commentsContent}
          </div>
        </div>
      </div>
    </div>
  )
}