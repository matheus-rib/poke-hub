import React from 'react'
import ReactPaginate from 'react-paginate'
import NavigationButton from './NavigationButton'
import './pagination.css'
type OnClickType = {
  selected: number
}

type PageParams = {
  totalPages: number
  setPage: (number: number) => void
}

export default function Pagination({ totalPages, setPage }: PageParams) {
  const handlePageClick = (event: OnClickType) => {
    setPage(event.selected + 1)
  }

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel={<NavigationButton label=">" />}
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={totalPages}
      className="pagination-container"
      activeClassName="active"
      previousLabel={<NavigationButton label="<" />}
    />
  )
}
