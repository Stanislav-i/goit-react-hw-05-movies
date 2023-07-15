import css from './Footer.module.css';

const Footer = () => {
  return (
    <div className={css.footercontainer}>
      <div className={css.outercircle}>
        <div className={css.innercircle}>
          <p className={css.text}></p>
        </div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div>
        <p>Footer React App</p>
      </div>
    </div>
  );
};

export default Footer;
