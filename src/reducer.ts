export type StateType = {
    collapsed: boolean
}

export const reducer = (state: StateType, action: toggleAccordionACType): StateType => {
  switch (action.type) {
    case "TOGLLE-ACCORDION": {
        const stateCopy = {...state}
       stateCopy.collapsed = !state.collapsed;
       return stateCopy
    }
    default:
      return state;
  }
};
type toggleAccordionACType = ReturnType<typeof toggleAccordionAC>;

export const toggleAccordionAC = () => {
  return {
    type: "TOGLLE-ACCORDION",

  } as const;
};
