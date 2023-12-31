import * as Styles from '../../styles/components/menu';

import MenuItems from './MenuItem';
import { ReactComponent as Settings } from '../../assets/icons/menu/settings.svg';
import { useMenu } from '../../hooks/useMenu';


const Menu = () => {
    const { menuOpen } = useMenu();

    return (
        <Styles.Menu isOpen={menuOpen} data-testid="menu">
            <MenuItems />
            <Styles.MenuItem showFill={false}>
                <Settings />
                <Styles.MenuItemName>Настройки</Styles.MenuItemName>
            </Styles.MenuItem>
        </Styles.Menu>
    )
}

export default Menu;