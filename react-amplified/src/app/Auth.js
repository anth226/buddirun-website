import { Auth } from "aws-amplify";
import { getProfile, updateProfile } from "./Backend";
import AppUser from "../appModels/AppUser";

const getUserAttributes = async () => {
  try {
    const user = await Auth.currentAuthenticatedUser();
    return {
      username: user.username,
      ...user.attributes
    };
  } catch (err) {
    console.warn('GetUserAttributes:', err);
    return null;
  }
}

const getToken = async () => {
  try {
    const session = await Auth.currentSession(),
      token = session.getAccessToken();
    return token.getJwtToken();
  } catch (err) {
    console.warn('GetToken:', err);
    return null;
  }
}

// Update app User & backend profile
const updateAuth = async () => {
  try {
    const userAttributes = await getUserAttributes(),
      profile = await getProfile(),
      userData = {},
      appUserData = {},
      propertyMap = {
        'given_name': 'first_name',
        'family_name': 'last_name',
        'email': 'email',
      };
    if (!userAttributes || !profile) {
      return false;
    }

    const appUserModel = AppUser.getInstance();
    appUserModel.setUserID(userAttributes.sub);
    appUserModel.setUsername(userAttributes.username);
    appUserModel.setEmail(userAttributes.email);
    const appUser = await appUserModel.getOrCreateUser();

    for (let attrKey in userAttributes) {
      const attrVal = userAttributes[attrKey],
        profileKey = propertyMap[attrKey];
      if (profileKey != null) {
        if (attrVal != profile[profileKey]) {
          userData[profileKey] = attrVal;
        }
        if (appUser && attrVal != appUser[profileKey]) {
          appUserData[profileKey] = attrVal;
        }
      }
    }
    if (Object.keys(userData).length > 0) {
      await updateProfile(userData);
    }
    if (Object.keys(appUserData).length > 0) {
      await appUserModel.updateUser(appUserData);
    }
    return true;
  } catch (err) {
    console.error('An error occurred during updateAuth', err);
  }
}

export {
  getUserAttributes,
  getToken,
  updateAuth
}
