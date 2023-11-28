// BlogManagement.js

import React, { useState } from 'react';

const BlogManagement = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: 'Introduction to React',
      author: 'John Doe',
      creationDate: '2023-01-10',
      averageRating: 4.5,
      status: 'active',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      title: 'State Management in Redux',
      author: 'Jane Smith',
      creationDate: '2023-02-15',
      averageRating: 3.8,
      status: 'active',
      content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 3,
      title: 'Responsive Web Design',
      author: 'Bob Johnson',
      creationDate: '2023-03-20',
      averageRating: 4.2,
      status: 'active',
      content: 'Nulla facilisi. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },
  ]);

  const handleDisableBlog = (blogId) => {
    setBlogs((prevBlogs) =>
      prevBlogs.map((blog) =>
        blog.id === blogId ? { ...blog, status: 'disabled' } : blog
      )
    );
  };

  const styles = {
    container: {
      marginTop: '20px',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '10px',
    },
    th: {
      background: '#333',
      color: 'white',
      padding: '10px',
      textAlign: 'left',
    },
    td: {
      padding: '10px',
      borderBottom: '1px solid #ddd',
    },
    active: {
      color: 'green',
      fontWeight: 'bold',
    },
    disabled: {
      color: 'red',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.container}>
      <h2>Blog Management</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Blog ID</th>
            <th style={styles.th}>Title</th>
            <th style={styles.th}>Author</th>
            <th style={styles.th}>Creation Date</th>
            <th style={styles.th}>Average Rating</th>
            <th style={styles.th}>Status</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr key={blog.id}>
              <td style={styles.td}>{blog.id}</td>
              <td style={styles.td}>{blog.title}</td>
              <td style={styles.td}>{blog.author}</td>
              <td style={styles.td}>{blog.creationDate}</td>
              <td style={styles.td}>{blog.averageRating}</td>
              <td style={styles.td}>
                {blog.status === 'active' ? (
                  <span style={styles.active}>Active</span>
                ) : (
                  <span style={styles.disabled}>Disabled</span>
                )}
              </td>
              <td style={styles.td}>
                {blog.status === 'active' && (
                  <button onClick={() => handleDisableBlog(blog.id)}>
                    Disable
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlogManagement;
