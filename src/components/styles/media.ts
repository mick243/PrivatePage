import { css, CSSObject, Interpolation } from "styled-components";

type DeviceType = "tablet" | "phoneM" | "phoneL";

const sizes: Record<DeviceType, string> = {
  tablet: `@media (max-width: 1024px) and (min-width: 601px)`,
  phoneM: `@media (max-width: 375px)`,
  phoneL: `@media (max-width: 475px) and (min-width: 375px)`,
};

const media = Object.entries(sizes).reduce((acc, [key, value]) => {
  return {
    ...acc,
    [key]: (
      first: CSSObject | TemplateStringsArray,
      ...interpolations: Interpolation<Object>[]
    ) => css`
      ${value} {
        ${css(first, ...interpolations)}
      }
    `,
  };
}, {}) as Record<DeviceType, any>;

export { media };
