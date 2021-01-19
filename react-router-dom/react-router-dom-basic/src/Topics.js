import { Route, Link } from "react-router-dom";

const Topics = (hash) => {
    console.log(hash);
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={`${hash.match.url}/rendering`}>Rendering with React</Link>
                </li>
                <li>
                    <Link to={`${hash.match.url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${hash.match.url}/props-v-state`}>Props v. State</Link>
                </li>
            </ul>

            <Route path={`${hash.match.url}/:topicId`} component={Topic} />
            <Route
                exact
                path={hash.match.url}
                render={() => <h3>Please select a topic.</h3>}
            />
        </div>
    );
}

const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
);

export default Topics
