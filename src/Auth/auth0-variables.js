export const AUTH_CONFIG = {
  domain: 'e-leads.us.auth0.com',
  clientId: 'PRODGTZVVU78tI3EasUfQJbCXC9zlFTl',
  callbackUrl: process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/callback'
    : 'https://e-lead.web.app/callback'
}