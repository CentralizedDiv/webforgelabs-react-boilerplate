import React from 'react';
import { Button, Tooltip } from 'antd';
import { useTranslation } from 'react-i18next';
import STAvatar from 'core/shared/avatar';
import { getInitials } from 'core/utils/functions';

export const LogoutPopover = ({ logout, user }) => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="st-logout-popover-title">
        <span color="#c1c5c8">{t('layout.logout_popover.logged_as')}</span>
      </div>
      <div className="st-logout-popover-user">
        <Tooltip title={t('layout.logout_popover.edit')}>
          <div>
            <STAvatar label={user.name} chevron={false}>
              {getInitials(user.name)}
            </STAvatar>
          </div>
        </Tooltip>
      </div>
      <div className="st-logout-popover-button">
        <Button block={true} onClick={logout} type="primary" ghost={true}>
          {t('layout.logout_popover.logout')}
        </Button>
      </div>
    </div>
  );
};
