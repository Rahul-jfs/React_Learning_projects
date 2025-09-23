# How to plan and build React Application

1. Gather application requirements and features
2. Divide the application into pages
   - Think aobut the overall and page-level UI
   - Break down the desired UI into components
   - Design and build a static version (no state yet)
3. Divide the application into feature categories
   - Think about the state management and the data flow
4. Decide on what libraries to use (technology decisions)

## Project requirement from the Business

- Very simple application, where user can order one or more pizzas form the menu

# Thunk in Redux-Toolkit

- To use the Thunk in Redux-Toolkit, we have to use createAsyncThunk(actionType, async function)
  eg: const fetchAddress = createAsyncThunk("user/fetchAddress", async function(){
  ...
  return;
  })

- The createAsyncThunk() takes 2 arguments, 1st is action type which we will never use, and 2nd we pass the actual thunk function, so that this function will be executed as soon as the action will dispatch.

- This createAsyncThunk() will produce 3 additional action type, 1 for the pending state, 1 for fulfill state and 1 for rejected state. And we have to handle these cases seperately in our reducers, so this is how we connect the Thunk with our reducers

- We attach by using the property name as extraReducers, which will take a builder, basically its a function, and on the builder we call addCase(), and call the function(thunk fn) inside this case we have to handle the state like pending state,

  eg:
  const initialState = {
  name : "",
  status: "idle",
  position: {},
  address: "",
  error: ""
  }
  const userSlice = createSlice({
  name: "user",
  initalState,
  reducers: {
  ...
  }
  extraReducers: (builder) => builder.addCase(
  fetchAddress.pending, (state, action) => {state.status = "loading"})

  })

# useFetcher()

- The useFetcher() hook is used to fetch the data without going to the page where the data is actually coming from.

- useFetcher() returns a fetcher where it has the data of the path present in it.

eg: const fetcher = useFetcher("/menu");

   here fetcher will have the data that will be loaded in the menu using loader.
