import { Provider } from "react-redux";
import Layout from "./pages/Layout/Layout";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
}

export default App;
