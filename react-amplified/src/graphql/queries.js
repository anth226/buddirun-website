/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTask = /* GraphQL */ `
    query GetTask($id: ID!) {
        getTask(id: $id) {
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
export const listTasks = /* GraphQL */ `
    query ListTasks(
        $filter: ModelTaskFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
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
            nextToken
            startedAt
        }
    }
`;
export const syncTasks = /* GraphQL */ `
    query SyncTasks(
        $filter: ModelTaskFilterInput
        $limit: Int
        $nextToken: String
        $lastSync: AWSTimestamp
    ) {
        syncTasks(
            filter: $filter
            limit: $limit
            nextToken: $nextToken
            lastSync: $lastSync
        ) {
            items {
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
            nextToken
            startedAt
        }
    }
`;
export const getPost = /* GraphQL */ `
    query GetPost($id: ID!) {
        getPost(id: $id) {
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
export const listPosts = /* GraphQL */ `
    query ListPosts(
        $filter: ModelPostFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
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
            nextToken
            startedAt
        }
    }
`;
export const syncPosts = /* GraphQL */ `
    query SyncPosts(
        $filter: ModelPostFilterInput
        $limit: Int
        $nextToken: String
        $lastSync: AWSTimestamp
    ) {
        syncPosts(
            filter: $filter
            limit: $limit
            nextToken: $nextToken
            lastSync: $lastSync
        ) {
            items {
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
            nextToken
            startedAt
        }
    }
`;
export const getPrivateNote = /* GraphQL */ `
    query GetPrivateNote($id: ID!) {
        getPrivateNote(id: $id) {
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
export const listPrivateNotes = /* GraphQL */ `
    query ListPrivateNotes(
        $filter: ModelPrivateNoteFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listPrivateNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
                id
                content
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
            }
            nextToken
            startedAt
        }
    }
`;
export const syncPrivateNotes = /* GraphQL */ `
    query SyncPrivateNotes(
        $filter: ModelPrivateNoteFilterInput
        $limit: Int
        $nextToken: String
        $lastSync: AWSTimestamp
    ) {
        syncPrivateNotes(
            filter: $filter
            limit: $limit
            nextToken: $nextToken
            lastSync: $lastSync
        ) {
            items {
                id
                content
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
            }
            nextToken
            startedAt
        }
    }
`;
export const getUser = /* GraphQL */ `
    query GetUser($id: ID!) {
        getUser(id: $id) {
            id
            email
            username
            first_name
            last_name
            data
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
        }
    }
`;
export const listUsers = /* GraphQL */ `
    query ListUsers(
        $filter: ModelUserFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
                id
                email
                username
                first_name
                last_name
                data
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
            }
            nextToken
            startedAt
        }
    }
`;
export const syncUsers = /* GraphQL */ `
    query SyncUsers(
        $filter: ModelUserFilterInput
        $limit: Int
        $nextToken: String
        $lastSync: AWSTimestamp
    ) {
        syncUsers(
            filter: $filter
            limit: $limit
            nextToken: $nextToken
            lastSync: $lastSync
        ) {
            items {
                id
                email
                username
                first_name
                last_name
                data
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
            }
            nextToken
            startedAt
        }
    }
`;
