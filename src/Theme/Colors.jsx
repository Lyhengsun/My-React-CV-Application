export const primaryColor = "#fff";

export function secondaryColor(lightness = 85) {
  const color = {
    h: 42,
    s: 34,
    l: lightness,
  };

  return `hsl(${color.h}, ${color.s}%, ${color.l}%)`;
}
