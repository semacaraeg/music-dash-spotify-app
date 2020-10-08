import React, { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
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
      //error message when search is empty
      setErrorMsg('Please enter something to search!');
    }
  };
  return (
    <div className="searchDiv">
      <Form onSubmit={processSearch}>
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        <Form.Row className="align-items-center">
          <Col xs={10}>
            <Form.Label htmlFor="inlineFormInput" srOnly>
              Search
            </Form.Label>
            <Form.Control
              type="search"
              name="searchQuery"
              value={searchQuery}
              placeholder="Search..."
              onChange={processInputChange}
              autoComplete="off"
              className="mb-2"
            />
          </Col>

          <Col xs={2}>
            <Button variant="outline-dark" type="submit"  className="mb-2">
            Search
            </Button>
          </Col>
        </Form.Row>
      </Form>
    </div>
  );
};
export default Search;
