import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useCrudServicios } from '../../../hooks/useCrudServicios';
import { setFilters } from '../../../store/slices/filteredData';

export const useFiltrosServicios = () => {
  const { servicios } = useCrudServicios();
  const [searchTerm, setSearchTerm] = useState("");
  // const [filteredData, setFilteredData] = useState(servicios);
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

  const clickSearch = (event) => {
    const results = servicios.filter((item) =>
      item.nombreServicio.toLowerCase().includes(searchTerm)
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