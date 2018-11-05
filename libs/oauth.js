const client_id='799952805488-uifv6couh0uv5a74o8g99d68v9vvobqf.apps.googleusercontent.com'
const client_secret='0OeK9lmPuQ9D8iH3btiB27X'

export const onSignIn = googleUser => {
  console.log(googleUser);
  const authToken = googleUser.getAuthResponse().id_token
}