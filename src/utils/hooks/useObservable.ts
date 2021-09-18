import React, { useLayoutEffect } from 'react';
import { BehaviorSubject } from 'rxjs';

type UseObservableParams<TState> = {
  stateSubject: BehaviorSubject<TState>;
  setState: React.Dispatch<React.SetStateAction<TState>>;
};

export function useObservable<TState, TPayload>({ stateSubject, setState }: UseObservableParams<TState>) {
  const setNextState = (payload: TPayload) => {
    const state = stateSubject.getValue();
    stateSubject.next({ ...state, ...payload });
  };

  useLayoutEffect(() => {
    const subscription = stateSubject.subscribe((currentState) => {
      setState(currentState);
    });

    return () => subscription.unsubscribe();
  }, []);

  return {
    setNextState,
  };
}
