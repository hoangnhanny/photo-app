import "./App.css";
import React, { Suspense } from "react";
import { BrowserRouter, Link, Redirect, Route, Switch } from "react-router-dom";
import NotFound from "./component/NotFound/NotFound";
import "./app.scss";
import Header from "./component/Header/Header";
import Banner from "./component/Banner/Banner";
const Photo = React.lazy(() => import("./features/Photo"));
function App() {
    return (
        <div className="photo-app">
            <Suspense fallback={<div>Loading ...</div>}>
                <BrowserRouter>
                    <Header></Header>
                    <Switch>
                        <Redirect exact from="/" to="/photo" />
                        <Route path="/photo" component={Photo} />
                        <Route component={NotFound} />
                    </Switch>
                </BrowserRouter>
            </Suspense>
        </div>
    );
}

export default App;
