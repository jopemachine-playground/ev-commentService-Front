import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";

export interface TopFixedIcon {
  iconStr: string;
  clickHandler: any;
}

export default function TopNavbar(props) {
  
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [FixedIcons] = useState<TopFixedIcon[]>(props.icons);

  return (
    <>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">감정분석 댓글 서비스</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Github
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink href={"https://github.com/cnu-ev/ev-commentService"}>
                    PHP Server - Front, Backend 1
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href={"https://github.com/cnu-ev/ev-backend"}>
                    Django - Backend 2
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink
                    href={"https://github.com/cnu-ev/ev-sentiment_analysis"}
                  >
                    Emotion Analysis Module
                  </NavLink>
                </DropdownItem>

                <DropdownItem divider />

                <DropdownItem>
                  <NavLink
                    href={
                      "https://github.com/jopemachine/ev-commentService-Front"
                    }
                  >
                    React - Front
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink
                    href={
                      "https://github.com/jopemachine/ev-commentService-Backend"
                    }
                  >
                    NodeJS - Backend 1
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          {FixedIcons &&
            FixedIcons.map((topFixedIcon, index) => {
              return (
                <NavbarText key={index} onClick={topFixedIcon.clickHandler}>
                  {topFixedIcon.iconStr}
                </NavbarText>
              );
            })}
        </Collapse>
      </Navbar>
    </>
  );
}
