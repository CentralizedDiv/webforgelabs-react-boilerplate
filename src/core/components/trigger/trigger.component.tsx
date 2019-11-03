import React from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import './trigger.styles.less';
import { AppVersion } from 'core/shared/version/version.component';
import { Icon } from 'antd';

const STTrigger = ({ onClick, collapsed }) => {
  const { t } = useTranslation();
  const classes = classNames({
    'st-trigger': true,
    'st-trigger--collapsed': collapsed,
  });
  return (
    <div className={classes} onClick={onClick}>
      <Icon type="menu" />
      <span>{collapsed ? t('layout.expand_sider') : t('layout.collapse_sider')}</span>
      {!collapsed && <AppVersion />}
    </div>
  );
};

export default STTrigger;
