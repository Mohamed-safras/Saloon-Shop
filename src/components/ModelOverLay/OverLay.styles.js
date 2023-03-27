import styled from "styled-components";
import { colors } from "../../styles/colors";

export const OverlayContainer = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  background: ${colors.overLayColor};
  opacity: 0.8;
`;
