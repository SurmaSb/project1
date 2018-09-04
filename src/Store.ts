import { PatchArea, PatchReducer } from '@state-sync/repatch';
import { Store } from 'redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';

export interface State {
}

const initialState: State = {
};

let reducers = PatchReducer(initialState, combineReducers({}));

export let store = createStore(reducers, applyMiddleware()) as Store<State>;

export function resetStore() {
    const area = new PatchArea('/', store);
    area.replace('/', initialState);
}
