import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";

export default function Signup() {
	const history = useHistory();
	const { firebase } = useContext(FirebaseContext);

	const [firstName, setFirstName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const isInvalid = firstName === "" || email === "" || password === "";

	const handleSignUp = (e) => {
		e.preventDefault();

		// firebase logic here
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((result) => {
				// update the user's profile pic
				result.user
					.updateProfile({
						displayName: firstName,
						photoURL: Math.floor(Math.random() * 5) + 1,
					})
					.then(() => {
						history.push(ROUTES.BROWSE);
					});
			})
			.catch((error) => {
				setFirstName("");
				setEmail("");
				setPassword("");
				setError(error.message);
			});
	};

	return (
		<>
			<HeaderContainer>
				<Form>
					<Form.Title>Sign Up</Form.Title>
					{error && <Form.Error>{error}</Form.Error>}
					<Form.Base onSubmit={handleSignUp} method="POST">
						<Form.Input
							placeholder="First Name"
							value={firstName}
							onChange={({ target }) => setFirstName(target.value)}
						/>
						<Form.Input
							placeholder="Email Address"
							value={email}
							onChange={({ target }) => setEmail(target.value)}
						/>
						<Form.Input
							type="password"
							placeholder="Password"
							value={password}
							autocomplete="off"
							onChange={({ target }) => setPassword(target.value)}
						/>
						<Form.Submit disable={isInvalid} type="submit">
							Sign Up
						</Form.Submit>
					</Form.Base>
					<Form.Text>
						Already have an account?{" "}
						<Form.Link to="/signin">Sign in now!</Form.Link>
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
