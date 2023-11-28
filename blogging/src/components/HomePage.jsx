import React, { useState } from 'react';
import backgroundImage from './images/bg.jpg';
import profileImage1 from './images/DP.jpg'; // Placeholder image for user profile
import profileImage2 from './images/DP.jpg';
import profileImage3 from './images/DP.jpg';

const MainPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('date'); // 'date' or 'popularity'
  const [filterByAuthor, setFilterByAuthor] = useState(null); // Author ID for filtering
  const [searchResults, setSearchResults] = useState(null);

  const blogPosts = [
    { id: 1, title: 'Introduction to React', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', author: 'John Doe', date: '2023-01-10' },
    { id: 2, title: 'State Management in Redux', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', author: 'Jane Smith', date: '2023-02-15' },
    { id: 3, title: 'Responsive Web Design', content: 'Nulla facilisi. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.', author: 'Bob Johnson', date: '2023-03-20' },
    { id: 4, title: 'React Hooks Explained', content: 'Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.', author: 'John Doe', date: '2023-04-05' },
    { id: 5, title: 'CSS Grid Layout', content: 'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Sed porttitor lectus nibh.', author: 'Jane Smith', date: '2023-05-12' },
    { id: 6, title: 'JavaScript ES6 Features', content: 'Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.', author: 'Bob Johnson', date: '2023-06-18' },
  ];

  const users = [
    { id: 1, username: 'JohnDoe', profileImage: profileImage1 },
    { id: 2, username: 'JaneSmith', profileImage: profileImage2 },
    { id: 3, username: 'BobJohnson', profileImage: profileImage3 },
  ];

  const handleSearch = () => {
    const filteredPosts = blogPosts.filter((post) => {
      const postContent = post.title.toLowerCase() + post.content.toLowerCase();
      return (
        postContent.includes(searchQuery.toLowerCase()) &&
        (!filterByAuthor || post.author === filterByAuthor)
      );
    });

    const sortedPosts = [...filteredPosts].sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(b.date) - new Date(a.date);
      } else if (sortBy === 'popularity') {
        // Implement popularity sorting logic if needed
        return 0;
      }
      return 0;
    });

    setSearchResults(sortedPosts);
  };

  const mainPageStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  };

  const headerStyle = {
    background: '#3C4EF1',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
  };

  const pageTitleStyle = {
    fontSize: '32px',
    margin: 0,
  };

  const contentStyle = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const searchContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: '20px',
  };

  const searchInputStyle = {
    padding: '10px',
    marginBottom: '10px',
  };

  const searchButtonStyle = {
    padding: '10px',
    cursor: 'pointer',
    backgroundColor: '#3C4EF1',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
  };

  const filterContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px',
  };

  const blogListContainerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '20px',
    maxWidth: '800px',
    width: '100%',
  };

  const blogItemStyle = {
    background: 'rgba(255, 255, 255, 0.8)',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const blogTitleStyle = {
    fontSize: '20px',
    color: '#3C4EF1',
    marginBottom: '10px',
  };

  const blogContentStyle = {
    fontSize: '14px',
    color: '#757F8E',
  };

  const userProfileStyle = {
    display: 'flex',
    alignItems: 'center',
    marginTop: '10px',
  };

  const profileImageStyle = {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    marginRight: '10px',
  };

  const usernameStyle = {
    fontSize: '14px',
  };

  const footerStyle = {
    background: '#3C4EF1',
    color: 'white',
    padding: '10px',
    textAlign: 'center',
  };

  const footerText = {
    margin: 0,
  };

  return (
    <div style={mainPageStyle}>
      <header style={headerStyle}>
        <h1 style={pageTitleStyle}>Our Blog</h1>
      </header>
      <div style={{ ...contentStyle, backgroundImage: `url(${backgroundImage})` }}>
        <div style={searchContainerStyle}>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={searchInputStyle}
          />
          <button onClick={handleSearch} style={searchButtonStyle}>
            Search
          </button>
        </div>
        <div style={filterContainerStyle}>
          <label>
            Sort by:
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="date">Date</option>
              <option value="popularity">Popularity</option>
            </select>
          </label>
          <label>
            Filter by author:
            <select value={filterByAuthor || 'all'} onChange={(e) => setFilterByAuthor(e.target.value !== 'all' ? e.target.value : null)}>
              <option value="all">All</option>
              {users.map((user) => (
                <option key={user.id} value={user.username}>
                  {user.username}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div style={blogListContainerStyle}>
          {searchResults ? (
            searchResults.map((post) => (
              <div key={post.id} style={blogItemStyle}>
                <h2 style={blogTitleStyle}>{post.title}</h2>
                <p style={blogContentStyle}>{post.content}</p>
                <p>Author: {post.author}</p>
                <div style={userProfileStyle}>
                  <img src={profileImage1} alt="Profile" style={profileImageStyle} />
                  <span style={usernameStyle}>{post.author}</span>
                </div>
              </div>
            ))
          ) : (
            blogPosts.map((post) => (
              <div key={post.id} style={blogItemStyle}>
                <h2 style={blogTitleStyle}>{post.title}</h2>
                <p style={blogContentStyle}>{post.content}</p>
                <p>Author: {post.author}</p>
                <div style={userProfileStyle}>
                  <img src={profileImage1} alt="Profile" style={profileImageStyle} />
                  <span style={usernameStyle}>{post.author}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <footer style={footerStyle}>
        <p style={footerText}>© 2023 Your Blog. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainPage;
