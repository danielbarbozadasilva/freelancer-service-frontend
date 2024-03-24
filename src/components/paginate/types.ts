export interface PaginationComponentProps {
  pages: number
  currentPage: number
  itensPerPage: number
  setCurrentPage: (page: number) => void
}

export interface PaginationSelectorProps {
  itensPerPage: number
  setItensPerPage: (value: number) => void
}
