/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask {
    onCreateTask {
      id
      title
      description
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask {
    onUpdateTask {
      id
      title
      description
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask {
    onDeleteTask {
      id
      title
      description
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($owner: String) {
    onCreatePost(owner: $owner) {
      id
      title
      status
      rating
      content
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($owner: String) {
    onUpdatePost(owner: $owner) {
      id
      title
      status
      rating
      content
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($owner: String) {
    onDeletePost(owner: $owner) {
      id
      title
      status
      rating
      content
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onCreatePrivateNote = /* GraphQL */ `
  subscription OnCreatePrivateNote($owner: String) {
    onCreatePrivateNote(owner: $owner) {
      id
      content
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onUpdatePrivateNote = /* GraphQL */ `
  subscription OnUpdatePrivateNote($owner: String) {
    onUpdatePrivateNote(owner: $owner) {
      id
      content
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onDeletePrivateNote = /* GraphQL */ `
  subscription OnDeletePrivateNote($owner: String) {
    onDeletePrivateNote(owner: $owner) {
      id
      content
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
      id
      email
      username
      first_name
      last_name
      data
      wallet_message
      address
      signature
      dailyWins {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
      id
      email
      username
      first_name
      last_name
      data
      wallet_message
      address
      signature
      dailyWins {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
      id
      email
      username
      first_name
      last_name
      data
      wallet_message
      address
      signature
      dailyWins {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onCreateDailyWins = /* GraphQL */ `
  subscription OnCreateDailyWins($ownerId: String) {
    onCreateDailyWins(ownerId: $ownerId) {
      id
      ownerId
      owner {
        id
        email
        username
        first_name
        last_name
        data
        wallet_message
        address
        signature
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      date
      totalEnergyCells
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userDailyWinsId
    }
  }
`;
export const onUpdateDailyWins = /* GraphQL */ `
  subscription OnUpdateDailyWins($ownerId: String) {
    onUpdateDailyWins(ownerId: $ownerId) {
      id
      ownerId
      owner {
        id
        email
        username
        first_name
        last_name
        data
        wallet_message
        address
        signature
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      date
      totalEnergyCells
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userDailyWinsId
    }
  }
`;
export const onDeleteDailyWins = /* GraphQL */ `
  subscription OnDeleteDailyWins($ownerId: String) {
    onDeleteDailyWins(ownerId: $ownerId) {
      id
      ownerId
      owner {
        id
        email
        username
        first_name
        last_name
        data
        wallet_message
        address
        signature
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      date
      totalEnergyCells
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userDailyWinsId
    }
  }
`;
