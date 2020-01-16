import URLRegister from "./URL-Register";

const rootURL = `http://localhost:8000`;

export default {
  Root: rootURL,

  SignInRequest : `${rootURL}/SignIn`,
  SignOutRequest : `${rootURL}/SignOut`,
  SignUpRequest : `${rootURL}/SignUp`,
  URLRegister: `${rootURL}/URL-Register`,
  URLRegister_Add : `${rootURL}/URL-Register/Add`,
  URLRegister_Delete: `${rootURL}/URL-Register/Delete`
};