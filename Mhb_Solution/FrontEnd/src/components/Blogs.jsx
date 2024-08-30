import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Blogs.css';

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    axios.get('http://localhost:3009/blogs')
      .then(response => {
        setBlogs(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;

  return (
    <div className='blog' id='blog'>
    <div className="container">
      <h2 className="text-center mb-4 titles">Blog & News</h2>
      <div className="row">
        <div className="col-md-6">
          {blogs.length > 0 && (
            <div className="bg-dark text-light border-0">
              <img src={blogs[0].image} className="blog-img" height={350} alt={blogs[0].title} />
              <div className="card-body px-0">
                <h3 className="blog-title">{blogs[0].title}</h3>
                <p className="blog-text">{blogs[0].description}</p>
              </div>
            </div>
          )}
        </div>
        <div className="col-md-6">
          {blogs.slice(1).map((blog) => (
            <div key={blog.id} className="row">
              <div className="col-md-4">
                <img src={blog.image} alt={blog.title}  className="fluid-img blog-img" />
              </div>
              <div className="col-md-8">
                <h5 className="blog-title">{blog.title}</h5>
                <p className="blog-text">{blog.description}</p>
                <p className="blog-date"><small className="text-muted">Publication date: {blog.date}</small></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}
