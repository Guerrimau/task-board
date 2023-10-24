import { UiState } from ".";

type UiActionType =
  | { type: "UI - Open Sidebar" }
  | { type: "UI - Close Sidebar" }
  | { type: "UI - Set Adding Entry"; payload: boolean }
  | { type: "UI - Set Is Dragging"; payload: boolean };

export const uiReducer = (state: UiState, action: UiActionType): UiState => {
  switch (action.type) {
    case "UI - Open Sidebar":
      return {
        ...state,
        sideMenuOpen: true,
      };
    case "UI - Close Sidebar":
      return {
        ...state,
        sideMenuOpen: false,
      };

    case "UI - Set Adding Entry":
      return {
        ...state,
        isAddingEntry: action.payload,
      };

    case "UI - Set Is Dragging":
      return {
        ...state,
        isDragging: action.payload,
      };
    default:
      return state;
  }
};
