import Layout from './Layout';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import EditPost from './EditPost';
import About from './About';
import Missing from './Missing';
import { useEffect } from 'react';
import useAxiosFetch from './hooks/useAxiosFetch';
import { Routes, Route} from 'react-router-dom'; // Add Routes, Route, and useHistory
import { useStoreActions } from 'easy-peasy';

function App() {
const setPosts = useStoreActions((actions) => actions.setPosts); // Add setPosts from store);
  const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts');

    useEffect(() => {
        setPosts(data);
    }, [data, setPosts])

  return (
      <Routes> {/* Replace Switch with Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home 
            fetchError={fetchError} 
            isLoading={isLoading}
          />} /> {/* Use element prop instead of component */}
          <Route path="post">
            <Route index element={<NewPost />} />
            <Route path=":id" element={<PostPage />} />
          </Route>
          <Route path="edit/:id" element={<EditPost />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
  );
}

export default App;
