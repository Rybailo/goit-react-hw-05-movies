import { useState } from 'react';
import PropTypes from 'prop-types';
import { SearchForm, Input, Button } from './Form.styled';

const Form = ({ searchMovies }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    searchMovies(query.toLowerCase());
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <Input
        type="text"
        name="query"
        autoFocus
        value={query}
        onChange={handleInputChange}
      />

      <Button type="submit">Search</Button>
    </SearchForm>
  );
};
Form.prototype = {
  searchMovies: PropTypes.func.isRequired,
};

export default Form;
