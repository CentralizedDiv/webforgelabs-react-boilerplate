import React from 'react';
import './avatar.styles.less';
import { getInitials } from '../../../core/utils/functions';
import STAvatar from './avatar.component';
import { Tooltip } from 'antd';

export interface ISTAvatarListProps {
  readonly names: ReadonlyArray<string>;
  readonly disabled?: boolean;
  readonly showLabel?: boolean;
  readonly maxCropsBeforeGroup?: number;
}

const STAvatarList: React.FC<ISTAvatarListProps> = ({ names, disabled, showLabel = true, maxCropsBeforeGroup = 3 }) => {
  let namesList = names;
  let otherNames = new Array<string>();

  if (names.length > maxCropsBeforeGroup + 1) {
    namesList = names.slice(0, maxCropsBeforeGroup);
    otherNames = names.slice(maxCropsBeforeGroup);
  }

  const list = (
    <div>
      {namesList &&
        namesList.map(name => (
          <Tooltip key={name} title={name} placement={'top'}>
            <STAvatar key={name} small={true} disabled={disabled} style={{ marginRight: '4px' }}>
              {getInitials(name)}
            </STAvatar>
          </Tooltip>
        ))}
      {otherNames.length > 0 && (
        <Tooltip
          title={otherNames.map((name, index) => (
            <div key={index}>
              <span>{name}</span>
            </div>
          ))}
        >
          <STAvatar disabled={disabled} small={true}>
            +{otherNames.length}
          </STAvatar>
        </Tooltip>
      )}
    </div>
  );

  return showLabel && namesList && namesList.length < 2 ? (
    <STAvatar label={namesList[0]} small={true} disabled={disabled}>
      {getInitials(namesList[0])}
    </STAvatar>
  ) : (
    list
  );
};

export default STAvatarList;
