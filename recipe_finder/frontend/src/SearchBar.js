import React, { useState } from 'react';
import {Row, Col} from 'react-bootstrap'


const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Col>
      <Row>
      <input
        type="text"
        placeholder="Enter Title"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      </Row>
      <br />
      <Row>
      <input
        type="text"
        placeholder="Enter ingredients"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      </Row>
      <br />
      <Row>
      <input
        type="text"
        placeholder="Enter instructions"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      </Row>
      <br />
      </Col>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SearchBar;