import React from "react";

const ToolCard = ({ tool }) => {
  const { name, logo, description, url } = tool;

  return (
    <div className="tool-card">
      <img src={logo} alt={`${name} logo`} className="tool-logo" />
      <h3 className="tool-name">{name}</h3>
      <p className="tool-description">{description}</p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="tool-link">
        Visit Website
      </a>
      <style jsx>{`
        .tool-card {
          /* Add your styles for the tool card here */
        }
        .tool-logo {
          /* Add your styles for the tool logo here */
        }
        .tool-name {
          /* Add your styles for the tool name here */
        }
        .tool-description {
          /* Add your styles for the tool description here */
        }
        .tool-link {
          /* Add your styles for the tool link here */
        }
      `}</style>
    </div>
  );
};

export default ToolCard;
