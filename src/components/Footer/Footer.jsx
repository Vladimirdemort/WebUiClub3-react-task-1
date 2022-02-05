import Section from 'components/Section/Section';
import s from './Footer.module.css';
import SvgSelector from 'icons/SvgSelector';

export default function Footer() {
  return (
    <div className={s.footer__section}>
      {' '}
      <Section>
        <div className={s.footer__mainInfo}>
          <div className={s.footer__stuff}>
            <h3>Branding stuff</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
              totam?
            </p>
          </div>
          <a className={s.footer__logo} href="">
            <img src="" alt="" />
          </a>
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
        <p>2022 @ Copyright all rigts reserved</p>
      </Section>
    </div>
  )
}
