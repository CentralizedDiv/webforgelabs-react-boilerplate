import React from 'react';
import classNames from 'classnames';
import { Avatar } from 'antd';
import { STAvatarProps } from './avatar.models';
import './avatar.styles.less';

const STAvatar: React.FC<STAvatarProps> = ({
  chevron = false,
  small = false,
  label,
  children,
  clicked = false,
  onClick,
  disabled = false,
  ...props
}) => {
  const clickCallback = () => {
    if (onClick) onClick();
  };
  const hasLabel = !!label;
  const avatarClasses = !disabled
    ? classNames({
        'st-avatar': true,
        'st-avatar--with-label': !!label,
        'st-avatar--with-chevron': chevron,
        'st-avatar--clicked': clicked,
      })
    : classNames({
        'st-avatar-2': true,
        'st-avatar-2--with-label': !!label,
        'st-avatar-2--with-chevron': chevron,
      });
  return (
    <div className={avatarClasses} onClick={clickCallback}>
      <Avatar {...props} size={small ? 24 : 40}>
        <span>{children}</span>
      </Avatar>
      {hasLabel && (
        <div className="st-avatar-label">
          <span>{label}</span>
        </div>
      )}
      {chevron && (
        <div className="st-avatar-chevron">
          <i className="sf sf-chevron-right" />
        </div>
      )}
    </div>
  );
};

export default STAvatar;
