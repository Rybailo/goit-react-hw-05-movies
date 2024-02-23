import { useEffect, useState } from 'react';
import Loader from '../../components/Loader/Loader';
import EditorList from '../../Pages/EditorList/EditorList';
import Form from '../../components/Form.jsx/Form';
import { fetchSearchByKeyword } from 'Services/api';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Movies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [films, setFilms] = useState(null);
  const [searchParams] = useSearchParams();
  const sQuery = searchParams.get('searchQuery');

  useEffect(() => {
    const fetchData = async () => {
      if (sQuery === null) return;

      try {
        setIsLoading(true);
        const film = await fetchSearchByKeyword(sQuery);
        setFilms(film);
      } catch (error) {
        toast(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (sQuery !== null) {
      fetchData();
    }
  }, [sQuery]);

  return (
    <main>
      {<Form />}
      {isLoading && <Loader />}
      {sQuery !== null && sQuery?.length > 0}
      {films && <EditorList films={films} />}
    </main>
  );
};

export default Movies;
