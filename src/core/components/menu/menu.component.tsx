import React, { useEffect } from 'react';
import { DeepReadonly } from 'utility-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';

import { images } from 'assets';
import { AppState } from 'redux/app-state';
import { useTranslation } from 'react-i18next';
import { Company } from 'entities/company/company.models';
import { selectAllCompanies } from 'entities/company/company.reducer';

interface IMenuItem {
  readonly path: string;
  readonly title: string;
  readonly icon?: string | any;
  readonly children?: ReadonlyArray<IMenuItem>;
}

export type MenuItem = DeepReadonly<IMenuItem>;

const protectorLogoS = images.logo_protector_s;

const getBasePath = (fullPath: string): string =>
  fullPath.split('/').length <= 3
    ? '/' + fullPath.split('/')[1]
    : '/' + fullPath.split('/')[fullPath.split('/').length - 1];

export interface IMenuProps {
  readonly collapsed: boolean;
  readonly currentPath: string;
  readonly SetCurrentLocation;
  readonly selectedProperty: string | null;
  readonly selectedCompany: string | null;
  readonly allCompanies: ReadonlyArray<Company>;
}
type MenuProps = DeepReadonly<IMenuProps>;

export const STMenu: React.FC<MenuProps> = props => {
  const screensConfigMap: Map<string, MenuItem> = new Map();
  const setCurrentLocation = props.SetCurrentLocation;

  const { t } = useTranslation();
  useEffect(() => {
    const currentLocation = screensConfigMap.get(getBasePath(props.currentPath));
    if (currentLocation) {
      setCurrentLocation({ ...currentLocation, children: undefined });
    }
  }, [setCurrentLocation, props.currentPath, screensConfigMap]);

  const items: ReadonlyArray<MenuItem> = [
    {
      path: '/sample-page-2',
      title: `${t('pages.side_menu.hall_of_properties')}`,
      icon: <Icon />,
    },
  ];

  return (
    <div className="st-menu">
      <img src={protectorLogoS} alt="Protector Logo" />
      <Menu selectedKeys={[getBasePath(props.currentPath)]} mode="inline">
        {props.selectedProperty &&
          items.map(menuItem => (
            <Menu.Item key={getBasePath(menuItem.path)} title={menuItem.title}>
              <div className="st-menu-active" />
              {menuItem.icon}
              <Link to={menuItem.path}>{menuItem.title}</Link>
            </Menu.Item>
          ))}
      </Menu>
    </div>
  );
};

// Listen to path change
const mapStateToProps = (state: AppState, ownProps) => ({
  allCompanies: selectAllCompanies(state.entities.company),
  currentPath: state.router.location.pathname,
});

export default connect(mapStateToProps)(STMenu);
