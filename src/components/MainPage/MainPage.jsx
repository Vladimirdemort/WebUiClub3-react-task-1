import s from './MainPage.module.css';
import Section from '../Section/Section';

export default function MainPage() {
  return (
    <Section>
      <div>
        <ul className={s.MainPage__catalog}>
          <li className={s.MainPage__list}>
            <img
              className={s.MainPage_img}
              src="https://d177dzgzj7inq8.cloudfront.net/media/image/fe/90/81/Think_Text-Bild_Desktop_Spuat_Stiefelette_Damen_schwarz.jpg"
              alt=""
            />
            <h2>Tile 1 Heading</h2>
            <p className={s.MainPage__text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              expedita natus magni mollitia tempora architecto praesentium
              perspiciatis totam. Quis, dolorem!
            </p>
          </li>
          <li className={s.MainPage__list}>
            <img
              className={s.MainPage_img}
              src="https://d177dzgzj7inq8.cloudfront.net/media/image/32/e1/9a/Think_Text-Bild_Desktop_Delicia_Ancle-Boot_Damen_braun.jpg"
              alt=""
            />
            <h2>Tile 2 Heading</h2>
            <p className={s.MainPage__text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              expedita natus magni mollitia tempora architecto praesentium
              perspiciatis totam. Quis, dolorem!
            </p>
          </li>
          <li className={s.MainPage__list}>
            <img
              className={s.MainPage_img}
              src="https://d177dzgzj7inq8.cloudfront.net/media/image/8c/85/e9/Think_Text-Bild_Desktop_Kong_Schnuerer_Herren_braun.jpg"
              alt=""
            />
            <h2>Tile 3 Heading</h2>
            <p className={s.MainPage__text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              expedita natus magni mollitia tempora architecto praesentium
              perspiciatis totam. Quis, dolorem!
            </p>
          </li>
        </ul>
        <button className={s.MainPage__button} type="button">
          View more
        </button>
      </div>
    </Section>
  );
}
