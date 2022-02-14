import  mongoose  from "mongoose";

const Post = new Post.Shema( 
    {
    image: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    sex: { type: String, required: true },
    },
    { collection: 'catalog' }
);

export default mongoose.model()



