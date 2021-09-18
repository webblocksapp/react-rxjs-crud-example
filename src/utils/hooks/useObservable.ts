import { BehaviorSubject, Subscription } from 'rxjs';

type UseObservableParams<TState> = {
  stateSubject: BehaviorSubject<TState>;
  initialState: TState;
};

export function useObservable<TState, TPayload>({ stateSubject, initialState }: UseObservableParams<TState>) {
  const setNextState = (payload: TPayload) => {
    const state = stateSubject.getValue();
    stateSubject.next({ ...state, ...payload });
  };

  const getInitialState = () => {
    return initialState;
  };

  const subscribe = (callBack: (state: TState) => void): Subscription => {
    return stateSubject.subscribe((currentState) => {
      console.log(222);
      callBack(currentState);
    });
  };

  return {
    setNextState,
    getInitialState,
    subscribe,
  };
}
