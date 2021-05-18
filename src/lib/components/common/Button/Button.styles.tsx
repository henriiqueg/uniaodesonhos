import styled, { DefaultTheme } from 'styled-components';

interface StyledButtonProps {
  colorStyle?: 'yellowFilled' | 'yellowLine' | 'blueFilled' | 'blueLine';
  border?: 'squared' | 'rounded';
  size?: 'small' | 'medium';
}

interface StyledButtonPropsWithTheme extends StyledButtonProps {
  theme: DefaultTheme;
}
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    StyledButtonProps {}

export interface AnchorProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    StyledButtonProps {}

const colorModifiers = {
  yellowFilled: (theme: DefaultTheme) => `
    background-color: ${theme.colors.secondary};
    border: none;
    color: ${theme.colors.black};
  `,
  yellowLine: (theme: DefaultTheme) => `
    border: 2px solid ${theme.colors.secondary};
    color: ${theme.colors.black};
  `,
  blueFilled: (theme: DefaultTheme) => `
    background-color: ${theme.colors.primary};
    border: none;
    color: ${theme.colors.black};
  `,
  blueLine: (theme: DefaultTheme) => `
    border: 2px solid ${theme.colors.primary};
    color: ${theme.colors.black};
  `,
};

const sizeModifiers = {
  small: (theme: DefaultTheme) => `
    font-size: ${theme.font.sizes.xxsmall};
    padding: ${theme.utils.button.padding.small};
  `,
  medium: (theme: DefaultTheme) => `
    font-size: ${theme.font.sizes.xsmall};
    padding: ${theme.utils.button.padding.medium};
  `,
};

const borderModifiers = {
  squared: () => `
    border-radius: 0rem;
  `,
  rounded: (theme: DefaultTheme) => `
    border-radius: ${theme.utils.button.border.radius};
  `,
};

const commonStyles = ({
  theme,
  colorStyle,
  border,
  size,
}: StyledButtonPropsWithTheme) => `
  ${colorStyle && colorModifiers[colorStyle](theme)}
  ${size && sizeModifiers[size](theme)}
  ${border && borderModifiers[border](theme)}

  font-family: ${theme.font.family.ptsans};

  text-decoration: none;

  transition: all 0.2s ease-in-out;

  &:hover {
    filter: brightness(110%);
  }
`;

export const Button = styled.button<ButtonProps>`
  ${({ theme, colorStyle, border, size }) =>
    commonStyles({ theme, colorStyle, border, size })}
`;

export const AnchorButton = styled.a<AnchorProps>`
  ${({ theme, colorStyle, border, size }) =>
    commonStyles({ theme, colorStyle, border, size })}
`;
