import { Route, Switch } from "react-router-dom";
import MainNavigation from "./components/layout/MainNavigation";
import MainPage from "./pages/MainPage";
import PageOne from "./pages/PageOne";
import PageThree from "./pages/PageThree";
import PageTwo from "./pages/PageTwo";

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/Deposit">
          <PageOne />
        </Route>
        <Route path="/Withdraw">
          <PageTwo />
        </Route>
        <Route path="/page-three">
          <PageThree />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
