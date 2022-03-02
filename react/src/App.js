import {store} from "./store/index";
import {Provider} from "react-redux";
import { HashRouter } from "react-router-dom";
import MyRoutes from "./components/app-router";
import "./assets/css/reset.css";

// import {PersistGate} from 'redux-persist/lib/integration/react';
// import {persistor} from "./store/index"

function App() {
  return (
    <div>
      <Provider store={store}>
        {/* <PersistGate persistor={persistor} loading={null}> */}
          <HashRouter>
             <MyRoutes/>
          </HashRouter>
        {/* </PersistGate> */}
      </Provider>
    </div>
  );
}

export default App;
