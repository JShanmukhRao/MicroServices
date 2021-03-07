import PostCreate from './components/PostCreate';
import PostView from './components/PostsView';

function App() {
  return (
    <div className="container">
      <PostCreate />
      <hr />
      <h1>Posts</h1>
      <PostView />
    </div>
  );
}

export default App;
