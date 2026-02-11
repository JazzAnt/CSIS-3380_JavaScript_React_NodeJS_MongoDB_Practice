const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright &copy; {year} Jason Januar</p>
    </footer>
  );
};

export default Footer;
