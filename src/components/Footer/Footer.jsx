import s from './Footer.module.css';
import SvgSelector from 'icons/SvgSelector';

export default function Footer() {
  return (
    <div className={s.footer__section}>
      <div className={s.footer__mainInfo}>
        <div className={s.footer__stuff}>
          <h3 className={s.footer__title}>Branding stuff</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
            totam?
          </p>
        </div>
        <h1 className={s.footer__logo}>Shoes</h1>
        <ul className={s.footer__socials}>
          <li className={s.footer__icon}>
            <SvgSelector id="facebook" />
          </li>
          <li className={s.footer__icon}>
            <SvgSelector id="twitter" />
          </li>
          <li className={s.footer__icon}>
            <SvgSelector id="linkedin" />
          </li>
          <li className={s.footer__icon}>
            <SvgSelector id="google" />
          </li>
        </ul>
      </div>
      <p className={s.footer_copyright}>2022 @ Copyright all rigts reserved</p>
    </div>
  );
}
