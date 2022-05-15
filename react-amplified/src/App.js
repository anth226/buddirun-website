import {useEffect} from "react";
import logo from "./logo.svg";
import "./App.css";

import Amplify, {DataStore, Predicates} from "aws-amplify";
import {Post, PostStatus} from "./models";
import {withAuthenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
//Use next two lines only if syncing with the cloud
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

function onCreate() {
    DataStore.save(
        new Post({
            title: `New title ${Date.now()}`,
            status: PostStatus.ACTIVE,
            rating: (function getRandomInt(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min)) + min;
            })(1, 7),
        })
    );
}

function onDeleteAll() {
    DataStore.delete(Post, Predicates.ALL);
}

async function onQuery() {
    const posts = await DataStore.query(Post, (c) => c.rating("gt", 4));

    console.log(posts);
}

function App({signOut, user}) {
    useEffect(() => {
        const subscription = DataStore.observe(Post).subscribe((msg) => {
            console.log(msg.model, msg.opType, msg.element);
        });

        return () => subscription.unsubscribe();
    }, []);


    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <div>
                    <input type="button" value="NEW" onClick={onCreate}/>
                    <input type="button" value="DELETE ALL" onClick={onDeleteAll}/>
                    <input type="button" value="QUERY rating > 4" onClick={onQuery}/>
                </div>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default withAuthenticator(App);