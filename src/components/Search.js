import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
const Search = (props) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const processInputChange = (event) => {
    const searchQuery = event.target.value;
    setSearchQuery(searchQuery);
  };
  const processSearch = (event) => {
    event.preventDefault();
    if (searchQuery.trim() !== '') {
      setErrorMsg('');
      props.processSearch(searchQuery);
    } else {
      setErrorMsg('Please enter a search term.');
    }
  };
  return (
    <div>
      <Form onSubmit={processSearch}>
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Enter search term</Form.Label>
          <Form.Control
            type="search"
            name="searchQuery"
            value={searchQuery}
            placeholder="Search for album, artist, song or  playlist"
            onChange={processInputChange}
            autoComplete="off"
          />
        </Form.Group>
        <Button variant="info" type="submit">
          Search
        </Button>
      </Form>
    </div>
  );
};
export default Search;
