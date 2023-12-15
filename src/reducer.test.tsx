import { reducer, StateType } from "./reducer";

test("reducer should be true", () => {
  //data
  const state: StateType = {
    collapsed: false
  }
  //action 
  const newState = reducer(state, {type: 'TOGLLE-ACCORDION'})

  //expectations 

  expect(newState.collapsed).toBe(true)
});


test("reducer should be false", () => {
  //data
  const state: StateType = {
    collapsed: true
  }
  //action 
  const newState = reducer(state, {type: 'TOGLLE-ACCORDION'})

  //expectations 

  expect(newState.collapsed).toBe(false)
});
