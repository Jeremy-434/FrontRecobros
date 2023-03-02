import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useCrudAplicaciones } from '../../../hooks/useCrudAplicaciones';
import { setFilters } from '../../../store/slices/filteredData';

export const useFiltrosAplicaciones = () => {
  const { aplicaciones } = useCrudAplicaciones();
  const [searchTerm, setSearchTerm] = useState("");
  // const [filteredData, setFilteredData] = useState(aplicaciones);
  const filters = useSelector(state => state.filteredData);

  const dispatch = useDispatch();
  const setFilteredData = (dataFilters) => {
    dispatch(setFilters(dataFilters))
  }

  const handleSearch = (event) => {
    event.preventDefault();

    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
  };
  const onResetHandleSearch = () => {
    setSearchTerm("");
  }

  const clickSearch = () => {
    const results = aplicaciones.filter((item) =>
      item.nombreAplicacion.toLowerCase().includes(searchTerm)
    );

    setFilteredData(results);
  }


  return {
    searchTerm,
    filters,
    handleSearch,
    clickSearch,
    onResetHandleSearch
  }
}  