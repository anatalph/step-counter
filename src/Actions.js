export const ADD_STEP = 'ADD_STEP'
export const RESET_STEP = 'RESET_STEP'

export function add_step() {
  return {
    type: ADD_STEP
  }
}

export function reset_step() {
  return {
    type: RESET_STEP
  }
}