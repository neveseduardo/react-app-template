import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component: Component, authed, ...rest }) {
    return (
        <Route {...rest} render={(props) =>
            authed === false
                ? <Component {...props} />
                : <Redirect to={{ pathname: '/admin', state: { from: props.location } }} />}
        />
    )
}
export default PrivateRoute