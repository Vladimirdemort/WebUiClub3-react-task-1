import s from './Hero.module.css';
import Section from '../Section/Section';

export default function Hero({ text }) {
  return (
    <Section>
      <div className={s.hero__section}>
        <div>
          <img
            className={s.hero__image}
            src="https://d177dzgzj7inq8.cloudfront.net/media/image/8c/85/e9/Think_Text-Bild_Desktop_Kong_Schnuerer_Herren_braun.jpg"
            alt="shoes"
          />
        </div>
        <div className={s.hero__contain}>
          <h1 className={s.title}>{text}</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
            exercitationem reiciendis ullam facilis omnis nihil quas dolor aut
            veritatis iusto possimus placeat quia dolore vitae unde, id odit.
            Atque, obcaecati!
          </p>
        </div>
      </div>
    </Section>
  );
}
