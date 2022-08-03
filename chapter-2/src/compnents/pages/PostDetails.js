import { useParams } from "react-router-dom";


const PostDetails = () => {
    let { category } = useParams();
    return (
        <div>
            <h1>{category} post Details</h1>
            <h3>
                {category} Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus harum rem facere, tempora corrupti necessitatibus nobis nemo
                voluptatem impedit officiis laboriosam et voluptates dolores. Doloribus
                laboriosam maiores iure error culpa aliquam aspernatur molestias iusto
                maxime, assumenda mollitia nemo deleniti?
            </h3>
        </div>
    );
};

export default PostDetails;
