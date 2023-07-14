import css from './Footer.module.css'

const Footer = () => { 
    return (
      <div className={css.footercontainer}>
        <div className={css.outercircle}>
          <div className={css.innercircle}>
            <p className={css.text}>S</p>
          </div>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    );
}

export default Footer;