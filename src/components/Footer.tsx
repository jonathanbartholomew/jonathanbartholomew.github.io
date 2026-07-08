// src/components/Footer.tsx
const Footer = () => {
  return (
    <footer>
      <span className="foot-copy">
        &copy; {new Date().getFullYear()} Jonathan Bartholomew
      </span>
      <span className="foot-copy">Daedabyte LLC &middot; Shenandoah Valley, VA</span>
    </footer>
  );
};

export default Footer;
