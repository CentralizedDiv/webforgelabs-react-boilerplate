import { AvatarProps } from 'antd/lib/avatar';

export interface STAvatarProps extends AvatarProps {
  readonly label?: string;
  readonly chevron?: boolean;
  readonly small?: boolean;
  readonly clicked?: boolean;
  readonly onClick?: () => void;
  readonly disabled?: boolean
}