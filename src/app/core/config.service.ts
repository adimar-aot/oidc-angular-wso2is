import { Injectable, Inject } from '@angular/core';
import { AuthConfig } from 'angular-oauth2-oidc';

@Injectable({ providedIn: 'root' })
export class ConfigService {

  constructor(@Inject('BASE_URL') public readonly originUrl: string) {
  }

  // public readonly authUrl = 'https://localhost:9443';
  // public readonly apiUrl = 'https://localhost:9443/api';
  
  // public readonly authUrl = 'https://login.microsoftonline.com/common';
  
  public readonly authUrl = 'https://betawso2.moduurn.ca:9443';
  public readonly apiUrl = 'https://betawso2.moduurn.ca:9443/api';

  // public readonly authUrl = 'https://wso2-is-loadbalancer-dev-1994839003.us-west-2.elb.amazonaws.com/';
  // public readonly apiUrl = 'https://wso2-is-loadbalancer-dev-1994839003.us-west-2.elb.amazonaws.com/api';
  
  // Set this to true to enable the auto-login feature
  public readonly autoLogin = false;

  // Set this to true to revoke access and refresh tokens on logout
  public readonly revokeTokenOnLogout = true;

  // Auth config
  public authConfig: AuthConfig = {
    // Url of the Identity Provider
    // issuer: `${this.authUrl}/v2.0`,
    issuer: `${this.authUrl}/oauth2/oidcdiscovery`,

    // The SPA's id. The SPA is registerd with this id at the auth-server
    clientId: 'x6LWtvN5XT206lgT9OpKKqpYltca',
    dummyClientSecret: 'TThGJtB4LeAG1eacSbCE2eCf8kYa',
    // clientId: 'MdcxDjR4TATHjcaMdGRUgfuf6JMa',
    // dummyClientSecret: 'o2FDbEQE_SRm3LYhsNXYJARpRUMa',

    redirectUri: `${this.originUrl}/home`,
    silentRefreshRedirectUri: `${this.originUrl}/home`,
    // redirectUri: `${this.originUrl}`,
    // silentRefreshRedirectUri: `${this.originUrl}`,
    postLogoutRedirectUri: `${this.originUrl}/index.html`,

    // Specify whether to skip the validation of the issuer in the discovery document.
    // Normally, the discovey document's url starts with the url of the issuer.
    skipIssuerCheck: true,

    // Specify whether every endpoint provided by the discovery document
    // has to start with the issuer's url defined above
    strictDiscoveryDocumentValidation: false,

    // Just needed if your auth server demands a secret. In general, this
    // is a sign that the auth server is not configured with SPAs in mind
    // and it might not enforce further best practices vital for security
    // such applications.
    // dummyClientSecret: 'secret',

    // Use either 'code' for code flow (recommended) or '' for implicit flow
    responseType: 'code',

    // Set to true to use pure code flow without PKCE (not recommended)
    disablePKCE: false,

    // Set the scope for the permissions the client should request
    // The first four are defined by OIDC.
    // Important: Request offline_access to get a refresh token
    // The api scope is a usecase specific one
    // scope: 'openid profile email offline_access',
    scope: 'openid profile email SCP_EVERYONE',

    silentRefreshTimeout: 5000, // For faster testing
    //timeoutFactor: 0.25, // For faster testing
    // silentRefreshTimeout: 50000, // For faster testing
    timeoutFactor: 0.75, // For faster testing

    sessionChecksEnabled: true,

    // Specify whether additional debug information should
    // be shown at the console.
    // Also requires enabling "Verbose" level in devtools
    showDebugInformation: true,
  
    // Specify whether to clear the hash fragment after logging in.
    // See https://github.com/manfredsteyer/angular-oauth2-oidc/issues/457#issuecomment-431807040
    clearHashAfterLogin: false,
  };
}
