# Redux

- Where can we make an asynchronous API call in Redux?

We cannot make an API call in reducers, because the reducers have to be a pure functions, Reducers only know how to dispatch an action synchronously,

So the operations like API call has to happen outside the Reducer,

One way we can do is by fetching the API in the Component and then dispatch an action to the store with the received data.

That can be a solution, but not an ideal solution, beacause we need to keep our component clean and free of data fetching.

So we can use a middleware, which is a function which sits between the dispatching the action and the store. Allowing us to run the function after dispatching the action and before reaching the reducer in the store.

We can use Thunk middleware

# 3 stpes to use the Thunk middleware

1. First we need to install the redux-thunk package
2. We apply the middelware to our store
3. we use the middleware function in our action creator function

- store takes applyMiddleware as second argument and which takes middleware as argument and we padd thunk as middleware.
  applyMiddleware comes from the "redux" library and thunk comes form "redux-thunk"
  ie, store(rootReducer, applyMiddleware(thunk))

By this we told our store that we will use the thunk as the middleWare

- When we need to convert the deposit amount to USD dollar and that has to be done after dispatching an action.

1.  use applyMiddleware to store and use thunk as argument.
    const store = createStore(rootReducer, applyMiddleware(thunk))

2.  In the deposit action creator,

    - if the currency is USD, we no need to convert and we can dispatch an action.
    - if the currency is different, then we need to all the api and for that we need the thunk, the middleware is nothing special, in our action creator, we will not retunr the aciton immedately, but instead return a function

    - Now when we dispatch an action instead of the event object we will enduop with a function, so when the redux see's the function, it will know that the function is the thunk and will execute the function and not dispatch the action immediately

    - That funtion that redux will call internally will have access to the dispatch function and to the current state by calling the getState

    syntax of the return function:
    return function(dispatch, getState){
    //API Call

        //dispatch action
    }

    now we have 2 dispatch, ie, when we dispatch if the currency is USD, and if its different it will return a function, and redux when it see's that we are dispatching a function, it will call the function with the dispatch as argument so that we can dispatch an action in the end to the store

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
