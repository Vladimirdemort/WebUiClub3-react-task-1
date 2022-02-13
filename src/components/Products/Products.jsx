import Section from '../Section/Section';
import s from './Products.module.css';
import data from './Data';
import Itemcard from './Itemcard';



 const Products = () => {
    
    return (
    <Section>
        <div className ={s.Products__catalog}>
            {data.productItems.map((item, index) => {
                return(
                    <Itemcard 
                    img = {item.image} 
                    title = {item.title} 
                    description = {item.description} 
                    price = {item.price}
                    brand = {item.brand} 
                    color = {item.color}  
                    size = {item.size}
                    key = {index} />
                )
            })}
        </div>
    </Section>   
    );
};


export default Products;