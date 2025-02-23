import React from "react";
import styled from "styled-components";

type SidenavLinkProps = {
  onClick?: () => void;
  href?: string;
  children: React.ReactNode;
  selected?: boolean;
};

export const SidenavLink = React.forwardRef(function SidenavLink(
  { onClick, href, children, selected }: SidenavLinkProps,
  ref: React.Ref<HTMLAnchorElement>
) {
  return (
    <StyledLink href={href} selected={selected} onClick={onClick} ref={ref}>
      {children}
    </StyledLink>
  );
});

type StyledLinkProps = {
  selected?: boolean;
};
const StyledLink = styled.a`
  ${({ selected }: StyledLinkProps) =>
    `
    background: ${selected ? "#4D4D4D" : "transparent"};
    color: ${selected ? "white" : "#4d4d4d"};
    `};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 32px;
  padding-right: 24px;
  user-select: none;
  min-height: 17px;
  font-size: 14px;

  &:hover {
    background: ${({ selected }: StyledLinkProps) =>
      selected ? "#333333" : "#e6e6e6"};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #0095ff;
  }

  &:active {
    color: #ffffff;
    background: ${({ selected }: StyledLinkProps) =>
      selected ? "#333333" : "#4D4D4D"};
    outline: none;
    box-shadow: 0 0 0 2px #0095ff;
  }
`;

export const SidenavSectionTitle = styled.h2`
  display: flex;
  align-items: center;
  margin: 0px;
  padding: 8px 24px;
  min-height: 19px;
  font-size: 14px;
  color: #4d4d4d;
  font-weight: 600;
`;
