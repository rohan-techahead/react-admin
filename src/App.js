import { Admin } from "react-admin";
import dataProvider from "ra-data-fakerest";

function App() {
  return <Admin dataProvider={dataProvider({})} />;
}

export default App;