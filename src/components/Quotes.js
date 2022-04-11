import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const Quotes = () => {
  return (
    <div className="section quote">
      <p className="quote-text">
        <FontAwesomeIcon icon={faQuoteLeft} />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
        sit expedita, possimus a quisquam quidem perspiciatis quaerat! Veniam
        dolorem exercitationem cupiditate voluptatibus dolor quisquam veritatis
        ad. Distinctio facere corporis adipisci?
      </p>
      <p className="quote-author">- Mahbub Morshed</p>
    </div>
  );
};

export default Quotes;
