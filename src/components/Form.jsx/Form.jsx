import { SearchForm, Input, Button } from './Form.styled';
import { useSearchParams } from 'react-router-dom';

const Form = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sQuery = searchParams.get('searchQuery');

  const handleSubmit = e => {
    e.preventDefault();
    const searchValue = e.currentTarget.elements.query.value;
    setSearchParams({
      searchQuery: searchValue,
    });
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <Input type="text" name="query" defaultValue={sQuery} autoFocus />
      <Button type="submit">Search</Button>
    </SearchForm>
  );
};

export default Form;
