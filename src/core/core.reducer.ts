import { CoreActionsTypes } from './core.actions';
import { GlobalUiState } from './core.models';

const initialState: GlobalUiState = {
  layoutState: { showHeader: true, showSider: true },
};

export default (state = initialState, action): GlobalUiState => {
  switch (action.type) {
    case CoreActionsTypes.TOGGLE_HEADER:
      return {
        ...state,
        layoutState: {
          ...state.layoutState,
          showHeader: !state.layoutState.showHeader,
        },
      };
    case CoreActionsTypes.TOGGLE_SIDER:
      return {
        ...state,
        layoutState: {
          ...state.layoutState,
          showSider: !state.layoutState.showSider,
        },
      };
    default:
      return state;
  }
};

export const selectLayoutState = (state: GlobalUiState) => state.layoutState;
