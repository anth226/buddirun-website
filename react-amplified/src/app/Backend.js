import { Auth } from "aws-amplify";
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const CORS_MODE = ''; // defaults to 'cors'

async function getUserInfo() {
  const user = await Auth.currentAuthenticatedUser();
  return user.attributes;
}

async function getToken() {
  const session = await Auth.currentSession(),
        token = session.getAccessToken();
  return token.getJwtToken();
}

const getAuthHeader = async () => {
  const token = await getToken();
  return {
    'Authorization': `Bearer ${token}`
  }
}

const getProfile = async () => {
  const authHeader = await getAuthHeader(),
        queryOptions = {
          headers: {
            ...authHeader,
          },
        };
  if (CORS_MODE) {
    queryOptions.mode = CORS_MODE;
  }
  try {
    const profileRes = await fetch(`${BACKEND_URL}authentications/me`, queryOptions);
    if (profileRes.ok) {
      return profileRes.json();
    }
    console.error('API call did not fail but was not 200', {
      status: profileRes.status,
      statusCode: profileRes.statusCode,
      statusMessage: profileRes.statusMessage,
      responseText: await profileRes.text(),
    });
    return {};
  } catch (err) {
    console.error('GetProfile failed', err);
    return {};
  }
}

const updateProfile = async (attrs) => {
  try {
    const {first_name, last_name, email} = attrs;
    const authHeader = await getAuthHeader(),
      queryOptions = {
        method: 'PATCH',
        headers: {
          ...authHeader,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'first_name': first_name.trim(),
          'last_name': last_name.trim(),
          'email': email.trim(),
        }),
      };
    if (CORS_MODE) {
      queryOptions.mode = CORS_MODE;
    }
    const profileRes = await fetch(`${BACKEND_URL}authentications/me`, queryOptions);
    if (profileRes.ok) {
      return profileRes.json();
    }
    console.error('API call did not fail but was not 200', {
      status: profileRes.status,
      statusCode: profileRes.statusCode,
      statusMessage: profileRes.statusMessage,
      responseText: await profileRes.text(),
    });
    return {};
  } catch (err) {
    console.error('UpdateProfile failed', err);
    return {};
  }
}

export {
  getUserInfo,
  getProfile,
  updateProfile,
}
