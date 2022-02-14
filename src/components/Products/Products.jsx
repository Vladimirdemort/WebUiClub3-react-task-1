import Section from '../Section/Section';
import s from './Products.module.css';
import Itemcard from './Itemcard';

const Products = ({ data }) => {
  return (
    <Section>
      <div className={s.Products__catalog}>
        {data.map((item, index) => {
          return (
            <Itemcard
              img={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
              key={index.id}
            />
          );
        })}
      </div>
    </Section>
  );
};

export default Products;
