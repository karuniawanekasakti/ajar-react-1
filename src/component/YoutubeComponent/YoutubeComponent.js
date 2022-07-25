import React from "react";
import "./YoutubeComponent.css";

const YoutubeComponent = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://images.unsplash.com/photo-1649859396073-13ff3244ec1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt=""/>
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

YoutubeComponent.defaultProps = {
    time: "00:00",
    title: "Default Title",
    desc: "Default Description"
}

export default YoutubeComponent;