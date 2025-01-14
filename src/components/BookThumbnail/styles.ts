import styled from "styled-components";
import colors from "../../utils/colors";

type StyledThumbProps = {
  shadow?: boolean;
};

export const StyledImg = styled.img<StyledThumbProps>`
  height: 100%;
  max-height: 17rem;
  object-fit: cover;
  width: 100%;

  ${(p) => p.shadow && `box-shadow: 1px 12px 28px ${colors.text.primary}46;`}
`;

export const StyledNoThumbBook = styled.div<StyledThumbProps>`
  align-items: center;
  background-color: ${colors.body.gray};
  color: ${colors.text.secondary};
  display: flex;
  height: 100%;
  max-height: 17rem;
  text-align: center;
  width: 100%;

  ${(p) => p.shadow && `box-shadow: 1px 12px 28px ${colors.text.primary}46;`}
`;

export const StyledLink = styled.a`
  :hover {
    cursor: pointer;
  }
`;
