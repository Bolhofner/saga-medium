const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  
  
  render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={ReduxComponentConnect}/>
      </Router>
    </Provider>
    , document.querySelector('.js-main')
  );