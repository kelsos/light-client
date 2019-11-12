/**
 * state.path reducer
 * Handles all path actions and requests
 *
 * @param state - Current RaidenState['path'] slice
 * @param action - RaidenAction to handle
 * @returns New RaidenState['path'] slice
 */
import { RaidenAction } from '../actions';
import { initialState, RaidenState } from '../state';
import { partialCombineReducers } from '../utils/redux';
import { isActionOf } from 'typesafe-actions';
import { clearIOU, persistIOU } from '../path/actions';
import { set, unset } from 'lodash/fp';

function path(state: RaidenState['path'] = initialState.path, action: RaidenAction) {
  if (isActionOf(persistIOU, action)) {
    const path = ['iou', action.meta.tokenNetwork, action.meta.serviceAddress];
    return set(path, action.payload.signedIOU, state);
  } else if (isActionOf(clearIOU, action)) {
    const path = ['iou', action.meta.tokenNetwork, action.meta.serviceAddress];
    return unset(path, state);
  } else return state;
}

/**
 * Nested combined reducer for path
 * Handles the 'path' substate.
 */
export const pathReducer = partialCombineReducers({ path }, initialState);