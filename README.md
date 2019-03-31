## How to start the app:

- `$ yarn` to install the dependencies
- `$ yarn start` to initiate both the API server and the webpack dev server
- the mobile transition width can be adjusted by modifying `src/variables.scss`

## assumptions:

The following assumptions were made for simplicity, please let me know if you want any of them to be implemented.

- the case for API errors does not need to be considered.
- the case for non 200 responses from the server does not need to be considered.
- there is always an `images` property in the response.
- there is always a `work` property in the response.
- there is no need to debounce the api calls if the user is typing too quickly.
- it is ok for the "image unavailable placeholder" to be shown while the actual image is loading.
