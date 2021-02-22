import React from "react";
import components from "../docs/docs";
import styled from "ui-toolkit/styled-components";
import { Nav as FabricNav, INavLink } from "office-ui-fabric-react/lib/Nav";
function Nav({ active, onChange }: NavProps) {
  let links = components.map((c) => ({
    key: c.id,
    name: c.title,
    url: "#",
    title: c.title,
  }));
  const onLinkClick = (event, item: INavLink) => {
    onChange(item.key);
  };
  return (
    <StyledNav>
      <FabricNav groups={[{ links }]} onLinkClick={onLinkClick} selectedKey={active} />
    </StyledNav>
  );
}

export default React.memo(Nav);

export interface NavProps {
  active: string;
  onChange: (componentName: string) => void;
}

const StyledNav = styled.div`
  width: 100%;
`;
