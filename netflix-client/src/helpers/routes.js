import React from "react";
import { Route, Redirect } from "react-router-dom";

// function to check if the user is logged in, if they are and try to go to signin/signup - send them to browse page
export function IsUserRedirect({ user, loggedInPath, children, ...restProps }) {
	return (
		<Route
			{...restProps}
			render={() => {
				if (!user) {
					return children;
				}

				if (user) {
					return <Redirect to={{ pathname: loggedInPath }} />;
				}

				return null;
			}}
		/>
	);
}

// function to have protected routes, send user back to sign in page if they are not signed in and are trying to access protected routes
export function ProtectedRoute({ user, children, ...restProps }) {
	return (
		<Route
			{...restProps}
			render={({ location }) => {
				if (user) {
					return children;
				}

				if (!user) {
					return (
						<Redirect to={{ pathname: "signin", state: { from: location } }} />
					);
				}

				return null;
			}}
		/>
	);
}
