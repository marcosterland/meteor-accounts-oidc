Package.describe({
  summary: "OpenID Connect (OIDC) for Meteor accounts",
  version: "1.0.5",
  name: "accounts-oidc",
  git: "https://github.com/switch-ch/meteor-accounts-oidc.git",

});

Package.onUse(function(api) {
  api.use('accounts-base@1.2.0', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth@1.1.0', ['client', 'server']);
  api.use('oidc@1.0.0', ['client', 'server']);

  api.export('Oidc');

  api.addFiles('oidc_login_button.css', 'client');

  api.addFiles('oidc.js');
});
