import React from "react";
import "../components_CSS/Newspart.css";

const Newspart = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="card-container">
      <div>
        <span className="card-source">
          {/* style={{left : '85%', zIndex : '1'}} */}
          {source}
        </span>
      </div>
      <div>
        <img src={imageUrl} className="card-image" alt="..." />
        <div className="card center">
          <h5 className="card-title">{title} </h5>
          <p className="card-description">{description}</p>
          {/* <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on Date {new Date(date).toGMTString()}</small></p> */}
          <div className="card-footer">
            <p className="card-author">
              By {!author ? "Unknown" : author} on Date{" "}
              {new Date(date).toGMTString()}
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blanlk"
              className="btn btn-primary custom-btn"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newspart;
