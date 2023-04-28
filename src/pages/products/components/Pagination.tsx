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
  const handlePreviousPageClick = () => {
    onPageChange(currentPage - 1);
  };

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

