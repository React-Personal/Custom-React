import React, { useState, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import "./OrderData.scss";

function OrderInfo() {
  const [orderInfo, setOrderInfo] = useState(null);

  useEffect(() => {
    const theData = [
      { size: "8", value: "100" },
      { size: "10", value: "100" },
      { size: "12", value: "100" },
      { size: "14", value: "100" },
      { size: "16", value: "100" },
    ];

    setOrderInfo([...theData]);
  }, []);

  return (
    <div>
      {orderInfo ? (
        <div>
          <Grid>
            {orderInfo.map((order) => (
              <>
                <Grid.Row>
                  <Grid.Column>
                    <span className="boldLetter">{order.size}</span>
                  </Grid.Column>
                  <Grid.Column>
                    <span className="boldLetter aligning">{order.value}</span>
                  </Grid.Column>
                </Grid.Row>
              </>
            ))}
          </Grid>
        </div>
      ) : null}
    </div>
  );
}

export default OrderInfo;
