const rootURL = `http://localhost:8000`;

export default {
  Root: rootURL,
  SignIn : `${rootURL}/SignIn`,
  SignOut : `${rootURL}/SignOut`,
  SignUp : `${rootURL}/SignUp`,
  UserInfoFetch: `${rootURL}/UserEdit`,
  UserEdit: `${rootURL}/UserEdit/Update`,
  URLRegister: `${rootURL}/URL-Register`,
  URLRegister_Add : `${rootURL}/URL-Register/Add`,
  URLRegister_Delete: `${rootURL}/URL-Register/Delete`,
  URLRegister_RecentComments: `${rootURL}/URL-Register/Fetch/RecentComments`
};