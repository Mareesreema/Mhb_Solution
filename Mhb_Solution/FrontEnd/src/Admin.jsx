
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

export default function Admin() {
  const [blogs, setBlogs] = useState([]);
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();
  const imageRef = useRef();
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3009/blogs')
      .then(response => setBlogs(response.data))
      .catch(error => console.error('Error fetching blogs:', error));
  }, []);

  const handleCreate = () => {
    const formData = new FormData();
    formData.append('title', titleRef.current.value);
    formData.append('description', descriptionRef.current.value);
    formData.append('date', dateRef.current.value);
    if (imageRef.current.files[0]) {
      formData.append('image', imageRef.current.files[0]);
    }

    axios.post('http://localhost:3009/blogs', formData)
      .then(() => {
        axios.get('http://localhost:3009/blogs')
          .then(response => setBlogs(response.data))
          .catch(error => console.error('Error fetching blogs:', error));
        resetForm();
      })
      .catch(error => console.error('Error creating blog:', error));
  };

  const handleUpdate = (id) => {
    const formData = new FormData();
    formData.append('title', titleRef.current.value);
    formData.append('description', descriptionRef.current.value);
    formData.append('date', dateRef.current.value);
    if (imageRef.current.files[0]) {
      formData.append('image', imageRef.current.files[0]);
    }

    axios.put(`http://localhost:3009/blogs/${id}`, formData)
      .then(() => {
        axios.get('http://localhost:3009/blogs')
          .then(response => setBlogs(response.data))
          .catch(error => console.error('Error fetching blogs:', error));
        setEditingId(null);
        resetForm();
      })
      .catch(error => console.error('Error updating blog:', error));
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3009/blogs/${id}`)
      .then(() => {
        setBlogs(blogs.filter(blog => blog.id !== id));
      })
      .catch(error => console.error('Error deleting blog:', error));
  };

  const resetForm = () => {
    titleRef.current.value = '';
    descriptionRef.current.value = '';
    dateRef.current.value = '';
    imageRef.current.value = '';
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Blogs</h1>
      <div className="row">
        <div className="col-md-8">
          <ul className="list-group">
            {blogs.map((blog) => (
              <li key={blog.id} className="list-group-item mb-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{blog.title}</h5>
                    <p className="card-text">{blog.description}</p>
                    <p className="card-text"><small className="text-muted">{blog.date}</small></p>
                    {blog.image && <img src={`http://localhost:3009/uploads/${blog.image}`} alt={blog.title} className="img-fluid mb-2" style={{maxWidth: '200px'}} />}
                    <div>
                      <button className="btn btn-primary me-2" onClick={() => {
                        titleRef.current.value = blog.title;
                        descriptionRef.current.value = blog.description;
                        dateRef.current.value = blog.date;
                        setEditingId(blog.id);
                      }}>Edit</button>
                      <button className="btn btn-danger" onClick={() => handleDelete(blog.id)}>Delete</button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{editingId ? 'Edit Blog' : 'Create New Blog'}</h5>
              <form>
                <div className="mb-3">
                  <input type="text" className="form-control" ref={titleRef} placeholder="Title" />
                </div>
                <div className="mb-3">
                  <textarea className="form-control" ref={descriptionRef} placeholder="Description"></textarea>
                </div>
                <div className="mb-3">
                  <input type="date" className="form-control" ref={dateRef} />
                </div>
                <div className="mb-3">
                  <input type="file" className="form-control" ref={imageRef} />
                </div>
                <button type="button" className="btn btn-success" onClick={editingId ? () => handleUpdate(editingId) : handleCreate}>
                  {editingId ? 'Update Blog' : 'Create Blog'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
