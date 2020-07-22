import React from "react";
import { Container } from "semantic-ui-react";
import "./SupplierDetails.scss";

function SupplierDetails() {
  return (
    <div className="mainDiv">
      <Container>
        <p>Supplied By BlueLimited</p>
      </Container>
      <Container className="contactDetail">
        <p>Contact Supplier</p>
      </Container>
    </div>
  );
}

export default SupplierDetails;
