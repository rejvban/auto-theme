import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    ${({ theme }): string => `
        body {
            margin: 0;
            font-family: 'Segoe UI', 'Roboto';
            background-color: ${theme.background};
            color: ${theme.primary};
        }
    `}
`;
