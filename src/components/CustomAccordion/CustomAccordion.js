import React, { useState } from "react";
import { Accordion, Icon } from "semantic-ui-react";
import OrderInfo from "./OrderDetails";
import ProductInfo from "./PrimaryDetails";
import SupplierDetails from "./SupplierDetails";
import ProductDetail from "./ProductDetail";
import ShippingDetails from "./ShippingDetails";

function CustomAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (e, tableProps) => {
    const { index } = tableProps;

    const newIndex = activeIndex === index ? -1 : index;

    setActiveIndex(newIndex);
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
          Primary Details
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
          Supplier Details
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <SupplierDetails />
        </Accordion.Content>

        <Accordion.Title
          onClick={handleClick}
          index={2}
          active={activeIndex === 2}
        >
          <Icon name="dropdown" />
          Product Details
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <ProductDetail />
        </Accordion.Content>

        <Accordion.Title
          onClick={handleClick}
          index={3}
          active={activeIndex === 3}
        >
          <Icon name="dropdown" />
          Order Details
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 3}>
          <OrderInfo />
        </Accordion.Content>

        <Accordion.Title
          onClick={handleClick}
          index={4}
          active={activeIndex === 4}
        >
          <Icon name="dropdown" />
          Shipping Details
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 4}>
          <ShippingDetails />
        </Accordion.Content>
      </Accordion>
    </div>
  );
}

export default CustomAccordion;
