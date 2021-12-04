import Button from '../Button';

interface PaginationProps {
  nextIsDisabled: boolean;
  prevIsDisabled: boolean;
  onNextPage: () => void;
  onPrevPage: () => void;
}

function Pagination({
  nextIsDisabled,
  prevIsDisabled,
  onNextPage,
  onPrevPage,
}: PaginationProps) {
  return (
    <footer>
      <Button
        title="Prev"
        isDisabled={prevIsDisabled}
        onPagination={onPrevPage}
      />
      <Button
        title="Next"
        isDisabled={nextIsDisabled}
        onPagination={onNextPage}
      />
    </footer>
  );
}

export default Pagination;
