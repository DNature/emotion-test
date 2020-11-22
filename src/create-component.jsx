import * as React from "react";
import hoist from "hoist-non-react-statics";

import { jsx } from "./jsx";

export const createComponent = (component) => {
  // return (...interpolations: any[]) => {
  const Component = React.forwardRef(({ as, ...props }, ref) => {
    const element = as || component;

    const isTag = typeof element === "string";

    const computedProps = isTag ? { ...props } : { ...props };

    console.log({ computedProps });

    if (computedProps.css === {} || typeof computedProps.css === "undefined") {
      delete computedProps.css;
    }

    return jsx(element, {
      ref,
      ...computedProps
    });
  });

  Component.defaultProps = component.defaultProps;

  // hoist all non-react statics attached to the `component` prop
  const MainComponent = hoist(Component, component);

  return MainComponent;
  // };
};

export const nature = (component) => {
  return createComponent(component);
};
