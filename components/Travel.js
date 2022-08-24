import React from "react";

export default function Travel(props) {
  return (
    <section>
      <div className="travel">
        <div className="travel--img">
          <img src={props.imageUrl} />
        </div>
        <div className="travel--info">
          <div className="travel--location">
            <i className="ri-map-pin-2-fill"></i>
            <span>{props.location}</span>
            <a href={props.googleMapsUrl}>
              <i className="ri-eye-2-fill"></i> View on Google Maps
            </a>
          </div>
          <div className="travel--place">
            <span>{props.title}</span>
          </div>
          <div className="travel--desc">
            <span>
              {props.startDate} - {props.endDate}
            </span>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
      <hr />
    </section>
  );
}
