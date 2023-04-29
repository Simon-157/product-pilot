/**
 * The Pagination component is a React functional component that displays previous and next buttons for
 * navigating between pages, and takes in the current page number, total number of pages, and a
 * function to handle page changes as props.
 * @param  - - `currentPage`: the current page number being displayed
 * @returns The Pagination component is being returned as a React functional component. It takes in
 * three props: currentPage, totalPages, and onPageChange, and renders two buttons for navigating to
 * the previous and next pages. 
 */

// Pagination.tsx
import React from "react";
import { NextIcon, PreviousIcon } from "@/components/custom-icons/Svg";
import styles from "../product-styles.module.scss";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {

  // The handlePreviousPageClick used to update the current page when the button is clicked
  const handlePreviousPageClick = () => {
    onPageChange(currentPage - 1);
  };

  // The handlePreviousPageClick used to update the current page when the button is clicked
  const handleNextPageClick = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <div className={styles.paginationWrapper}>
      
      <button disabled={currentPage === 0} onClick={handlePreviousPageClick}>
        <span><PreviousIcon /></span>
      </button>
      <button disabled={currentPage === totalPages - 1} onClick={handleNextPageClick}>
        <span><NextIcon /></span>
      </button>
    </div>
  );
};

export default Pagination;

