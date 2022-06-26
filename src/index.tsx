import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

import "./index.css";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

const domain: any = process.env.AUTH0_DOMAIN;
const clientId: any = process.env.AUTH0_CLIENT_ID;

root.render(
	<React.StrictMode>
		<Auth0Provider
			domain={domain}
			clientId={clientId}
			redirectUri={window.location.origin}
		>
			<App />
		</Auth0Provider>
	</React.StrictMode>
);
