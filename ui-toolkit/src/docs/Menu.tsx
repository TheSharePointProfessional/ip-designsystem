import React, { useState } from "react";
import docs from "./_generatedMdxDocs";
import styled from "styled-components";
import useQueryString from "ui-toolkit/hooks/useQueryString";
import { Icon } from "office-ui-fabric-react/lib/Icon";
import { getThemeColor } from "ui-toolkit";

export default function Menu({ setActive, active }) {
  console.log("docs", docs);
  let topLevelItems = docs.filter((i) => !i.section);
  let componentItems = docs.filter((d) => d.section === "components");
  let [componentParents, componentsWithoutParents] = processParents(componentItems);

  let hooksItems = docs.filter((d) => d.section === "hooks");
  let coreItems = docs.filter((d) => d.section === "core");
  let propertyFields = docs.filter((d) => d.section === "propertyfields");
  return (
    <StyledSideMenu className="menu">
      <MenuItems items={topLevelItems} setActive={setActive} active={active}>
        <FirstLevelMenuSection title="Components">
          <MenuItems items={componentsWithoutParents} setActive={setActive} active={active}>
            {componentParents.map((parent) => (
              <li className="grouping">
                {parent}
                <MenuItems
                  items={componentItems.filter((i) => i.parent === parent)}
                  setActive={setActive}
                  active={active}
                />
              </li>
            ))}
          </MenuItems>
        </FirstLevelMenuSection>

        <FirstLevelMenuSection title="Hooks">
          <MenuItems items={hooksItems} setActive={setActive} active={active}></MenuItems>
        </FirstLevelMenuSection>
      </MenuItems>
    </StyledSideMenu>
  );
}

function FirstLevelMenuSection({ title, children }) {
  let [expanded, setExpanded] = useState(false);
  return (
    <li className="first-level">
      <div className="title expandable" onClick={() => setExpanded((val) => !val)}>
        <Icon iconName={expanded ? "ChevronDown" : "ChevronRight"} />
        {title}
      </div>
      {expanded && children}
    </li>
  );
}
const MenuItems: React.FC<any> = ({ items, setActive, children, active }) => {
  return (
    <ul className="menu__list">
      {items.map((file) => (
        <li key={file.title} className={file.title === active ? "active" : ""}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setActive(file.title);
            }}
          >
            {file.title}
          </a>
        </li>
      ))}
      {children}
    </ul>
  );
};

const processParents = (items) => {
  let parents = Array.from(new Set(items.map((i) => i.parent)))
    .filter(Boolean)
    .sort();
  let itemsWithoutParents = items.filter((i) => !i.parent);
  return [parents, itemsWithoutParents];
};

const compareFiles = (a, b) => {
  if (a.sort === b.sort) {
    return a.title < b.title ? -1 : 1;
  }
  return a.sort < b.sort ? -1 : 1;
};

interface MenuItem {
  title: string;
  sort: number;
  parent: string;
  section: string;
  render: any;
}

const StyledSideMenu = styled.div`
  .first-level {
    > .expandable {
      user-select: none;
      font-weight: bold;
      &:hover {
        cursor: pointer;
        color: ${(props) => getThemeColor("themePrimary")};
      }
      i {
        margin-right: 5px;
        position: relative;
        top: 2px;
      }
    }
    > ul {
      padding-left: 20px;
    }
  }

  a {
    font-weight: normal;
    text-decoration: none;
    color: steelblue;
    &:hover {
      opacity: 0.85;
    }
    padding: 5px;
    display: block;
  }
  ul {
    padding-left: 0;
    list-style: none;
    li.grouping {
      margin: 5px 0 3px 0;
      text-transform: capitalize;
      font-weight: 600;
    }
    ul {
      padding-left: 5px;
    }
  }
  li {
    border: 1px solid transparent;
    border-right: none;
    /* border-right: 4px solid transparent; */
  }
  li.active {
    border: 1px solid #eee;
    background: #f7f7f7;
    border-right: 4px solid steelblue;
  }
`;

const MenuItemList: React.FC<any> = ({ section = "", setActive, children }) => {
  let items = docs.filter((d) => d.section === section).sort(compareFiles);
  let parents = Array.from(new Set(items.map((i) => i.parent)))
    .filter(Boolean)
    .sort();
  let itemsWithoutParents = items.filter((i) => !i.parent);
  console.log("parents", parents);

  return (
    <ul className="menu__list">
      {itemsWithoutParents.map((file) => (
        <li key={file.title}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setActive(file.title);
            }}
          >
            {file.title}
          </a>
        </li>
      ))}
      {children}
    </ul>
  );
};
