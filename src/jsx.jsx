import { jsx as emotion } from "@emotion/react";

export const jsx = (type = "div", props, ...children) => {
  return emotion.apply(type, [type, props, ...children]);
};

export default jsx;
