import { ChangeEvent } from 'react';
import SelectPerPage from '../SelectPerPage';
import './Footer.css';
import { useSearchContext } from '../../context/searchContext';

interface Props {
  onChangePageHandler: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const Footer = ({ onChangePageHandler }: Props) => {
  const { perPage } = useSearchContext();
  return (
    <>
      <section id="footer">
        <SelectPerPage
          perPage={perPage}
          onPerPageChange={onChangePageHandler}
        />
      </section>
    </>
  );
};

export default Footer;
