import React from "react"

export default function PressItem(props) {
  return (
    <div className="post type-post status-publish format-standard hentry category-presse-2 clearfix">
      <div className="press-icon">
        <img src={props.icon} alt="icon" />
      </div>
      <a href={props.href}>{props.text}</a>
    </div>
  )
}
