const shared = {
  fontSize: "12px",
  sizingSm: "4px",
};

export const lightTheme = {
  ...shared,
  primary: "#212121",
  background: "#ffffff",
};

export const darkTheme: Theme = {
  ...shared,
  primary: "#f8f8f8",
  background: "#151515",
};

export type Theme = typeof lightTheme;
