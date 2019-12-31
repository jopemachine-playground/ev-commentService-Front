import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

export default function TopNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
      <div>
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
                    <NavLink href={"https://github.com/"}>PHP - Front, Backend 1</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href={"https://github.com/"}>Django - Backend 2</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href={"https://github.com/"}>NodeJS - Backend 1</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
}

