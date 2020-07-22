import React from "react";
import { Grid, Container } from "semantic-ui-react";
import "./ProductInfo.scss";

function ProductInfo() {
  return (
    <div className="mainDiv">
      <Grid>
        <Grid.Row>
          <div>
            <Container className="totalWord">
              <p>Total Order Value</p>
            </Container>
            <Container className="quantity">
              <p>£ 27,000</p>
            </Container>
          </div>
        </Grid.Row>
        <Grid.Row>
          <Container className="totalWord">
            <p>Total Order Volume</p>
          </Container>
          <Container className="quantity">
            <p>7540</p>
          </Container>
        </Grid.Row>
        <Grid.Row>
          <Container>
            <span className="boldLetter">Cost Price: </span>
            <span>£ 3.50</span>
          </Container>
        </Grid.Row>
        <Grid.Row>
          <Container>
            <span className="boldLetter">Retail Price: </span>
            <span>£ 3.50</span>
          </Container>
        </Grid.Row>
        <Grid.Row>
          <Container>
            <span className="boldLetter">Estimated Delivery</span>
            <span>17 Jul - 20 Jul</span>
          </Container>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default ProductInfo;
