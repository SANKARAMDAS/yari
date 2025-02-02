import bcdUntyped from "@mdn/browser-compat-data/forLegacyNode";
import { CompatData } from "@mdn/browser-compat-data/types";

const bcd = bcdUntyped as CompatData;

export function packageBCD(query) {
  const data = query.split(".").reduce((prev, curr) =>  {
    return prev && Object.prototype.hasOwnProperty.call(prev, curr)
      ? prev[curr]
      : undefined;
  }, bcd);
  return { browsers: bcd.browsers, data };
}
