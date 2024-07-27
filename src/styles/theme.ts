const colors = {
  primary: "#A259FF",
  blueAccent: "#377DF7",
  redAccent: "#FF7262",
  white: "#FFFFFF",
  deepCharcoal: "#2B2B2B",
  graphiteGray: "#3B3B3B",
  smokyGray: "#858584",
};

export const darkTheme = {
  background: colors.deepCharcoal,
  backgroundSecondary: colors.graphiteGray,
  captionAndLabelText: colors.smokyGray,
  text: colors.white,
  primary: colors.primary,
  blueAccent: colors.blueAccent,
  redAccent: colors.redAccent,
  gradient1: `linear-gradient(150deg, ${colors.primary} 10%, ${colors.redAccent}100.45%)`,
  gradient2: `linear-gradient(150deg, ${colors.primary} 10%, ${colors.blueAccent} 100.45%)`,
};
