Package.describe({
  name: 'pawkadeploy:editor',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/PawkaHub/JourneyEditor',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.4.2');
  api.addFiles('editor.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('pawkadeploy:editor');
  api.addFiles('editor-tests.js');
});
