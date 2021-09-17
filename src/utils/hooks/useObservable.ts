import { useState } from 'react';
import { BehaviorSubject, Subscription } from 'rxjs';

type UseObservableParams<TState> = {
  stateSubject: BehaviorSubject<TState>;
  initialState: TState;
};

let state$: Subscription;

export function useObservable<TState, TPayload>({ stateSubject, initialState }: UseObservableParams<TState>) {
  const [signal, setSignal] = useState<boolean>(false);

  const setNextState = (payload: TPayload) => {
    const state = stateSubject.getValue();
    stateSubject.next({ ...state, ...payload });
    emitSignal();
  };

  const emitSignal = () => {
    setSignal(!signal);
  };

  const getInitialState = () => {
    return initialState;
  };

  const subscribe = (callBack: (state: TState) => void) => {
    state$ = stateSubject.subscribe((currentState) => {
      callBack(currentState);
    });
  };

  const unsubscribe = () => {
    state$.unsubscribe();
  };

  return {
    setNextState,
    getInitialState,
    subscribe,
    unsubscribe,
  };
}
