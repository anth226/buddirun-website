import { API, graphqlOperation } from "aws-amplify";
import { getUser } from "../graphql/queries";
import { createUser, updateUser } from "../graphql/mutations";

export default class AppUser {
  // source: https://stackoverflow.com/questions/44719103/singleton-object-in-react-native

  static myInstance = null;

  _userID = "";
  _username = "";
  _email = "";

  /**
   * @returns {AppUser}
   */
  static getInstance() {
    if (AppUser.myInstance == null) {
      AppUser.myInstance = new AppUser();
    }

    return this.myInstance;
  }

  static destroy() {
    // AppUser.getInstance().resetVariables();
    AppUser.myInstance = null;
  }

  resetVariables() {
    this._userID = '';
    this._username = '';
    this._email = '';
  }

  getUserID() {
    return this._userID;
  }
  setUserID(id) {
    this._userID = id;
  }

  getUsername() {
    return this._username;
  }
  setUsername(username) {
    this._username = username;
  }

  getEmail() {
    return this._email;
  }
  setEmail(email) {
    this._email = email;
  }

  async getOrCreateUser() {
    try {
      if (!this._userID) {
        return {};
      }
      const getUserRes = await API.graphql(graphqlOperation(getUser, {id: this._userID}));
      let user = getUserRes.data.getUser;

      if (!user) {
        const userDetails = {
          id: this._userID,
          username: this._username,
          email: this._email,
          data: {}
        };
        const createUserRes = await API.graphql(graphqlOperation(createUser, { input: userDetails }));
        user = createUserRes.data.createUser;
      }

      let userData = {};
      try {
        userData = JSON.parse(user.data);
      } catch (jsonParseErr) {
        userData = {};
      }
      user.data = userData;

      return user;
    } catch (err) {
      console.error('An error occurred during getOrCreateUser', err);
    }
  }

  async updateUser(params) {
    try {
      const userDetails = {
        id: this._userID,
        email: this._email,
        first_name: params['first_name'],
        last_name: params['last_name'],
      }
      console.log('TEST USER DETAILS BEFORE updateUser', userDetails);
      const updateUserRes = await API.graphql(graphqlOperation(updateUser, {input: userDetails}));
      console.log('TEST updateUserRes', updateUserRes);
    } catch (err) {
      console.error('An error occurred during updateUser', err);
    }
  }

  async updateProfile(profileData) {
    try {
      const user = await this.getOrCreateUser();
      const userProfile = {
        id: this._userID,
        data: {
          ...user.data,
          ...profileData
        }
      };
      console.log('TEST USER PROFILE', userProfile);
      const updateUserProfileRes = await API.graphql(graphqlOperation(updateUser, { input: userProfile }));
      console.log('TEST updateUserProfileRes', updateUserProfileRes);
    } catch (err) {
      console.error('An error occurred during updateProfile', err);
    }
  }
}
