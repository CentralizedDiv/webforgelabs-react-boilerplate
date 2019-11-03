import React, { useState } from 'react';
import { Popover } from 'antd';

import STAvatar from 'core/shared/avatar';
import { LogoutPopover } from './logout-popover.component';

import './logout-button.styles.less';
import { getInitials } from 'core/utils/functions';

const STLogoutButton = ({ logout, user }) => {
  const [popoverIsOpen, triggerPopover] = useState(false);

  const handleClick = () => triggerPopover(!popoverIsOpen);

  return (
    <div className="st-logout-button">
      <Popover
        overlayClassName="st-logout-popover"
        onVisibleChange={handleClick}
        placement="bottomLeft"
        content={<LogoutPopover logout={logout} user={user} />}
        title={null}
        trigger="click"
      >
        <STAvatar clicked={popoverIsOpen} onClick={handleClick}>
          {getInitials(user.name)}
        </STAvatar>
      </Popover>
    </div>
  );
};

export default STLogoutButton;
