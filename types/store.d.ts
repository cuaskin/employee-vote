interface InitialState {}

interface IGraphQLParams {
  query: string;
  variables?: IGraphQLVariables;
}

interface IGraphQLVariables {
  [key in string]: any;
}

interface IFetchVoting {
  (employee: IEmployee): ThunkAction<AsyncDispatch>;
}

interface IFetchQuery {
  (body: IGraphQLParams): ThunkAction<AsyncDispatch>;
}

interface AsyncDispatch {
  (dispatch: Dispatch<IState>, getState: () => IState): Promise;
}
