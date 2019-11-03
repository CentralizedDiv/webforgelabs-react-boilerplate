interface LayoutState {
  readonly showHeader: boolean;
  readonly showSider: boolean;
}

export interface GlobalUiState {
  readonly layoutState: LayoutState;
}
