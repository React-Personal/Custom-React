import React, { useState } from "react";
import { Accordion, Icon } from "semantic-ui-react";

function CustomAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (event, titleProps) => {
    const { index } = titleProps;

    const newIndex = activeIndex === index ? -1 : index;

    setActiveIndex(newIndex);
  };

  return (
    <div>
      <Accordion>
        <Accordion.Title
          active={activeIndex === 0}
          onClick={handleClick}
          index={0}
          exclusive={false}
        >
          <Icon name="dropdown" />
          Hello There
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          This is the content inside
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          onClick={handleClick}
          index={1}
          exclusive={false}
        >
          <Icon name="dropdown" />
          Another One
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          This is the Another one inside
        </Accordion.Content>
      </Accordion>
    </div>
  );
}

export default CustomAccordion;
