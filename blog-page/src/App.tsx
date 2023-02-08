import {
  BrowserRouter as Router, Navigate, Route, Routes,
} from 'react-router-dom';
import './App.css'
import Header from './Components/Header';
import HomePage from './Pages/HomePage/HomePage';
import BlogsPage from './Pages/BlogsPage/BlogsPage';
import BlogPage from './Pages/BlogPage/BlogPage';
import AddPostPage from './Pages/AddPostPage/AddPostPage';
import Page404 from './Pages/Page404/Page404';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blogs" element={<BlogsPage />} />
      <Route path="/blogs/:id" element={<BlogPage />} />
      <Route path="/add-post" element={<AddPostPage />} />
      <Route path="/404" element={<Page404 />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  </Router>
);

export default App;
