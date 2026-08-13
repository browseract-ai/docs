---
title: "Overview"
---

Credential Center manages supported website login information for Workflow Built Bots.

Use it when a Workflow Built Bot needs to access a page that is not publicly available and BrowserAct supports the site's authentication flow.

> **Note:** Credential Center is currently available for Workflow Built Bots only. Credential hosting for Agent Built Bots is coming soon.

## What You Can Manage

- Supported username and password credentials
- Supported authenticator-app 2FA keys
- Workflow Built Bot authorization
- Auto-login options available in the product
- Credential usage records

## Add a Credential

1. Open `Credential Center`.
2. Create a credential using the available credential type.
3. Enter the required login information.
4. Add supported 2FA information when needed.
5. Save the credential.

## Authorize a Workflow Built Bot

A stored credential is not automatically available to every Workflow Built Bot. Authorize the specific Workflow Built Bot that needs to use it.

Review and revoke authorization when a Bot no longer needs access.

## Supported 2FA

The existing Credential Center documentation supports authenticator-app 2FA. Email and SMS verification should not be treated as supported unless they become available in the product.

## Security Practices

- Grant access only to the Workflow Built Bots that require it.
- Update stored information after a password change.
- Review usage records for unexpected access.
- Remove unused credentials.
- Do not enter passwords or 2FA secrets in an Agent Built request. Credential Center does not apply to Agent Built Bots.

See [Authentication and Credentials](./authentication-and-credentials.mdx) for the existing detailed procedure.
