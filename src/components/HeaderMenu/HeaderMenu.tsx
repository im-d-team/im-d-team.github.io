import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { toggleSidebar } from '../../store';
import { Container, Image, Menu, Icon } from 'semantic-ui-react';
import { MenuProps } from '../Menu';

interface HeaderMenuProps extends MenuProps {
  dispatch?: Dispatch<any>;
  inverted?: boolean;
}

export const HeaderMenu = ({
  pathname,
  Link,
  inverted,
  dispatch,
}: HeaderMenuProps) => (
  <Container>
    <Menu size="large" secondary inverted={inverted}>
      <Menu.Item
        as="a"
        className="mobile only right"
        icon="sidebar"
        onClick={() => dispatch && dispatch(toggleSidebar())}
      />
      <Menu.Item className="mobile hidden">
        <Link to={'/'}>
          <Image
            src="https://avatars1.githubusercontent.com/u/45911353?s=200&v=4"
            size="mini"
            circular
          />
        </Link>

        {/* <Icon name="address book" size="big" /> */}
      </Menu.Item>
      {/* {items.map(item => {
        const active = item.exact
          ? pathname === item.path
          : pathname.startsWith(item.path);
        return (
          <Menu.Item
            as={Link}
            className="mobile hidden"
            name={item.name}
            to={item.path}
            key={item.path}
            active={active}
          />
        );
      })} */}
    </Menu>
  </Container>
);

export default connect()(HeaderMenu);
