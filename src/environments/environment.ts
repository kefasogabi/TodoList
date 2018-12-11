// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyDHxhX_tYQqXxjUlX8vlYgHstJ276ZbLhU",
    authDomain: "todolist-5ac37.firebaseapp.com",
    databaseURL: "https://todolist-5ac37.firebaseio.com",
    projectId: "todolist-5ac37",
    storageBucket: "todolist-5ac37.appspot.com",
    messagingSenderId: "368954213137"
  }
};
