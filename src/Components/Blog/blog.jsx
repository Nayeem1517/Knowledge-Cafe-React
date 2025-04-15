import PropTypes from 'prop-types';
import { IoBookmarksOutline } from "react-icons/io5";

const Blog = ({blog,handleAddToBookmark}) => {
    const {title,cover,author,author_image,reading_time,posted_date,hashtags}=blog;

    return (
        <div className='mb-20'>
            <div className='flex justify-between'>
                <div className='flex '>
                    <img className='w-14' src={author_image} alt="" />
                    <div className='text-2xl ml-6'><h3>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read </span>
                    <button onClick={() => handleAddToBookmark(blog)} className='text-2xl text-emerald-700 ml-4'> <IoBookmarksOutline /></button>
                </div>
            </div>
            <img className='w-full mb-8'  src={cover} alt={`Cover Picture of The Title ${title}`} />
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map(hash => <span><a href="">#{hash}</a></span>)
                }
            </p>
        </div>
    );
};


Blog.propTypes = {
    blog : PropTypes.object.isRequired
}
export default Blog;