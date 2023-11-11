import Pagination from '../Pagination';
import SelectPerPage from '../SelectPerPage/SelectPerPage';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <section id="footer">
        <Pagination />
        <SelectPerPage />
      </section>
    </>
  );
};

export default Footer;
