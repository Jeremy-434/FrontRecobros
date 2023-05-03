import { PublicClientApplication } from '@azure/msal-browser';

export const msalInstance = new PublicClientApplication({
  auth: {
    clientId: "YOUR_CLIENT_ID",
    redirectUri: "YOUR_REDIRECT_URI"
  }
});