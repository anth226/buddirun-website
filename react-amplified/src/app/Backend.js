import { Auth } from "aws-amplify";
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

async function getUserInfo() {
  const user = await Auth.currentAuthenticatedUser();
  return user.attributes;
}

const getAuthHeader = async () => {
  const userAttrs = await getUserInfo();
  return {
    'Authentication': `Bearer ${userAttrs.sub}`
  }
}

const getProfile = async () => {
  const authHeader = await getAuthHeader(),
        queryOptions = {
          headers: {
            ...authHeader,
          }
        };
  try {
    const profileRes = await fetch(`${BACKEND_URL}authentications/me`, queryOptions);
    return await profileRes.json();
  } catch (err) {
    console.error('GET PROFILE FAILED', err);
  }
}

const updateProfile = async (attrs) => {
  const {given_name, family_name, email} = attrs;
  const authHeader = await getAuthHeader(),
    queryOptions = {
      method: 'POST',
      headers: {
        ...authHeader,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'first_name': given_name,
        'last_name': family_name,
        email,
      }),
    };
  const profileRes = await fetch(`${BACKEND_URL}authentications/me`, queryOptions);
}

export {
  getUserInfo,
  getProfile,
  updateProfile,
}
