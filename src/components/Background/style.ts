import Image from 'next/image';
import styled from 'styled-components';
import { Box } from '@mui/material'

export const Banner = styled.div`
  position: relative;
  width: 100vw;
  height:100vh;
`;

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  position: relative;
  right: 0;
  bottom: 0;
  margin: 0;
  pointer-events: none;
`;

export const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const ImageStyled = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
`;
