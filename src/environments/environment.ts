// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAS5ik3hEFQ8fmBtAaSN5MzXwtnf8P1L9s',
    authDomain: 'angular-firebase-blog-c0906.firebaseapp.com',
    databaseURL: 'https://angular-firebase-blog-c0906.firebaseio.com',
    projectId: 'angular-firebase-blog-c0906',
    storageBucket: 'angular-firebase-blog-c0906.appspot.com',
    messagingSenderId: '32411828157'
  }
};
