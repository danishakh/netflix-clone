import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";

export default function Signin() {
	const { firebase } = useContext(FirebaseContext);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const history = useHistory();

	// some basic validation
	const isInvalid = password === "" || email === "";

	const handleSignIn = (e) => {
		e.preventDefault();

		// firebase logic here
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(() => {
				// push to the browse page
				history.push(ROUTES.BROWSE);
			})
			.catch((error) => {
				setEmail("");
				setPassword("");
				setError(error.message);
			});
	};

	return (
		<>
			<HeaderContainer>
				<Form>
					<Form.Title>Sign In</Form.Title>
					{error && <Form.Error>{error}</Form.Error>}
					<Form.Base onSubmit={handleSignIn} method="POST">
						<Form.Input
							placeholder="Email Address"
							value={email}
							onChange={({ target }) => setEmail(target.value)}
						/>
						<Form.Input
							type="password"
							placeholder="Password"
							value={password}
							onChange={({ target }) => setPassword(target.value)}
						/>
						<Form.Submit disable={isInvalid} type="submit">
							Sign In
						</Form.Submit>
					</Form.Base>
					<Form.Text>
						New to Netflix? <Form.Link to="/signup">Sign Up Now!</Form.Link>
					</Form.Text>
					<Form.TextSmall>
						This page is protected by Google reCAPTCHA to ensure you're not a
						bot. Learn more...
					</Form.TextSmall>
				</Form>
			</HeaderContainer>
			<FooterContainer />
		</>
	);
}
