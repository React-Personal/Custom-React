import React, { useState } from "react";
import { Accordion, Icon } from "semantic-ui-react";
import OrderInfo from "./OrderData";
import ProductInfo from "./ProductInfo";

function CustomAccordion() {
  const [activeIndex, setactiveIndex] = useState(null);

  const handleClick = (e, tableProps) => {
    const { index } = tableProps;

    const newIndex = activeIndex === index ? -1 : index;

    setactiveIndex(newIndex);
  };

  return (
    <div>
      <Accordion exclusive={false} styled>
        <Accordion.Title
          onClick={handleClick}
          active={activeIndex === 0}
          index={0}
        >
          <Icon name="dropdown" />
          Product Information
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <ProductInfo />
        </Accordion.Content>

        <Accordion.Title
          onClick={handleClick}
          index={1}
          active={activeIndex === 1}
        >
          <Icon name="dropdown" />
          Order Info
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <OrderInfo />
        </Accordion.Content>

        <Accordion.Title
          onClick={handleClick}
          index={1}
          active={activeIndex === 2}
        >
          <Icon name="dropdown" />
          Product Details
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <OrderInfo />
        </Accordion.Content>

        <Accordion.Title
          onClick={handleClick}
          index={1}
          active={activeIndex === 3}
        >
          <Icon name="dropdown" />
          Shipping Details
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 3}>
          <OrderInfo />
        </Accordion.Content>

        <Accordion.Title
          onClick={handleClick}
          index={1}
          active={activeIndex === 4}
        >
          <Icon name="dropdown" />
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 4}>
          <OrderInfo />
        </Accordion.Content>
      </Accordion>
    </div>
  );
}

export default CustomAccordion;
