export const CoreActionsTypes = {
  TOGGLE_HEADER: '[Global Ui] Toggle Header',
  TOGGLE_SIDER: '[Global Ui] Toggle Sider',
};

export const ToggleHeader = () => {
  return {
    type: CoreActionsTypes.TOGGLE_HEADER,
  };
};

export const ToggleSider = () => {
  return {
    type: CoreActionsTypes.TOGGLE_SIDER,
  };
};
