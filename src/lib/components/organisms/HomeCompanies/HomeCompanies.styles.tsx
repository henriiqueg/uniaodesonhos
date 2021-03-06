import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding-top: 3rem;
  padding-bottom: 13rem;

  position: relative;

  ${media.lessThan('medium')`
    background-color: ${({ theme }) => theme.colors.primary};
  `}

  overflow: hidden;
`;

export const Background = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`;

export const Wrapper = styled.div`
  height: 100%;
  max-width: ${({ theme }) => theme.breakpoints.large};

  ${({ theme }) => css`
    ${theme.utils.display.flex.spaceBetween}
  `}

  ${media.lessThan('medium')`
    flex-direction: column;
  `}

  gap: ${({ theme }) => theme.spacing.xxlarge};

  padding: 5rem ${({ theme }) => theme.spacing.xxlarge} 0;

  position: relative;
  z-index: 2;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xsmall};
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.font.family.pilat};
  font-size: ${({ theme }) => theme.font.sizes.xxlarge};
  color: ${({ theme }) => theme.colors.white};

  width: 100%;
  text-align: left;

  margin-bottom: ${({ theme }) => theme.spacing.xxsmall};

  ${media.lessThan('medium')`
    margin-top: 0;
  `}
`;

export const CompaniesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: ${({ theme }) => theme.spacing.large};

  ${media.lessThan('large')`
    align-items: center;
  `}

  img {
    width: 100%;
    max-width: 15rem;
    min-width: 8rem;
    object-fit: contain;

    ${media.lessThan('large')`
      margin: 0 auto;
    `}
  }
`;

export const IllustrationWrapper = styled.div`
  flex: 0.4;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Illustration = styled.img`
  width: 80%;

  ${media.greaterThan('large')`
    padding-top: 12rem;
  `}
`;
