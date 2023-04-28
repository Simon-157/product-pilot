import { useState } from "react";

function usePagination<T>(data: T[], itemsPerPage: number) {
    const [currentPage, setCurrentPage] = useState(0);
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedData = data?.slice(startIndex, endIndex);
  
    const previousPage = () => setCurrentPage(currentPage - 1);
    const nextPage = () => setCurrentPage(currentPage + 1);
  
    const canGoToPreviousPage = currentPage > 0;
    const canGoToNextPage = displayedData?.length > itemsPerPage;
  
    return {
      currentPage,
      previousPage,
      nextPage,
      canGoToPreviousPage,
      canGoToNextPage,
      displayedData,
    };
  }

export default usePagination;
  

