import { ReactNode, useReducer } from "react";
import { UiContext, uiReducer } from ".";

export interface UiState {
  sideMenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
}

interface ProviderProps {
  children: ReactNode;
}

const UI_INITIAL_STATE: UiState = {
  sideMenuOpen: false,
  isAddingEntry: false,
  isDragging: false
};

export const UiProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSideMenu = () => {
    dispatch({ type: "UI - Open Sidebar" });
  };

  const closeSideMenu = () => {
    dispatch({ type: "UI - Close Sidebar" });
  };

  const setIsAddingEntry = (isAdding: boolean) => {
    dispatch({ type: "UI - Set Adding Entry", payload: isAdding });
  };

  const setIsDragging = (isDragging: boolean) => {
    dispatch({ type: "UI - Set Is Dragging", payload: isDragging });
  }

  return (
    <UiContext.Provider
      value={{
        ...state,
        openSideMenu,
        closeSideMenu,
        setIsAddingEntry,
        setIsDragging
      }}
    >
      {children}
    </UiContext.Provider>
  );
};
