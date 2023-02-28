import { useState } from 'react';
import { useCrudServicios } from '../../../hooks/useCrudServicios';

export const useFiltrosServicios = () => {
  const { servicios } = useCrudServicios();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(servicios);


  const handleSearch = (event) => {
    event.preventDefault();
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    const results = servicios.filter((item) =>
      item.nombreServicio.toLowerCase().includes(value)
    );
    setFilteredData(results);
  };
  
  return {
    searchTerm,
    filteredData,
    handleSearch
  }
}  