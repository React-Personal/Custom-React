import React from "react";
import { Grid, Container } from "semantic-ui-react";
import "./ShippingDetails.scss";

function ShippingDetail() {
  return (
    <div className="mainDiv">
      <Grid>
        <Grid.Row>
          <div>
            <Container>
              <p>Description of shipping</p>
            </Container>
          </div>
        </Grid.Row>
        <Grid.Row>
          <Container className="boldLetter">
            <p>Product</p>
          </Container>
          <Container>
            <p>Boxed</p>
          </Container>
        </Grid.Row>
        <Grid.Row>
          <Container>
            <span className="boldLetter">Pack Size of</span>
          </Container>
          <Container>
            <span>Boxes of 10</span>
          </Container>
        </Grid.Row>
        <Grid.Row>
          <Container>
            <span className="boldLetter">Pack Type </span>
          </Container>
          <Container>
            <span>Single</span>
          </Container>
        </Grid.Row>

        <Grid.Row>
          <Container>
            <span className="boldLetter">Freight</span>
          </Container>
          <Container>
            <span>Sea</span>
          </Container>
        </Grid.Row>

        <Grid.Row>
          <Container>
            <span className="boldLetter">Estimated Delivery</span>
          </Container>
          <Container>
            <span>17 Jul - 20 Jul</span>
          </Container>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default ShippingDetail;
