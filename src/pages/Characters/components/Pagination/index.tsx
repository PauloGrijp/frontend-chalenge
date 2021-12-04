import Button from '../../../../components/Button';

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
        onClick={onPrevPage}
      />
      <Button
        title="Next"
        isDisabled={nextIsDisabled}
        onClick={onNextPage}
      />
    </footer>
  );
}

export default Pagination;
