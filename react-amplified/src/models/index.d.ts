import {ModelInit, MutableModel} from "@aws-amplify/datastore";


type TaskMetaData = {
    readOnlyFields: 'createdAt' | 'updatedAt';
}

type PrivateNoteMetaData = {
    readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Task {
    readonly id: string;
    readonly title: string;
    readonly description?: string | null;
    readonly status?: string | null;
    readonly createdAt?: string | null;
    readonly updatedAt?: string | null;

    constructor(init: ModelInit<Task, TaskMetaData>);

    static copyOf(source: Task, mutator: (draft: MutableModel<Task, TaskMetaData>) => MutableModel<Task, TaskMetaData> | void): Task;
}

export declare class PrivateNote {
    readonly id: string;
    readonly content: string;
    readonly createdAt?: string | null;
    readonly updatedAt?: string | null;

    constructor(init: ModelInit<PrivateNote, PrivateNoteMetaData>);

    static copyOf(source: PrivateNote, mutator: (draft: MutableModel<PrivateNote, PrivateNoteMetaData>) => MutableModel<PrivateNote, PrivateNoteMetaData> | void): PrivateNote;
}