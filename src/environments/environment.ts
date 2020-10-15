// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { FirebaseOptions } from '@angular/fire';

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAduns66iv6ikcqeILI64jP-lAinHIhQas",
    authDomain: "mosh-shess-angular.firebaseapp.com",
    databaseURL: "https://mosh-shess-angular.firebaseio.com",
    projectId: "mosh-shess-angular",
    storageBucket: "mosh-shess-angular.appspot.com",
    messagingSenderId: "835018459469",
    appId: "1:835018459469:web:d6738ddf02c07243cd0f04",
    measurementId: "G-293CMZWRDF"
  } as FirebaseOptions
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
