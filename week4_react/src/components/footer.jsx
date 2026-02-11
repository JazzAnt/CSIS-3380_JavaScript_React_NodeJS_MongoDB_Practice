const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Author Jason Copyright &copy; {year}</p>
    </footer>
  );
};

export default Footer;
