/**
 * This is a custom hook in TypeScript that allows for pagination of data by specifying the number of
 * items per page and providing an array of data.
 * @param {T[]} data - an array of data that needs to be paginated
 * @param {number} itemsPerPage - itemsPerPage is a number that represents the maximum number of items
 * to be displayed per page in a pagination component. It is used to calculate the startIndex and
 * endIndex of the data array to be displayed on the current page.
 * @returns An object containing the current page number, functions to navigate to the previous and
 * next pages, boolean values indicating whether it is possible to navigate to the previous and next
 * pages, and the data to be displayed on the current page based on the items per page configuration.
 */
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
  

