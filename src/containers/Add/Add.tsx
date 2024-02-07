import React, {useState} from 'react';
import {PostApi} from '../../types.d.';
import Spinner from '../../components/Spinner/Spinner';
import axiosAPI from '../../axiosAPI';
import {useNavigate} from 'react-router-dom';

const Add: React.FC = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState<PostApi>({
    title: '',
    description: '',
    date: '',
  });

  const postChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;

    setPost((prevState) => ({
      ...prevState,
      [name]: value,
      date: new Date().toISOString()
    }));
  };

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axiosAPI.post('/posts.json', post);
      console.log("new post:", post);
    } catch {
      alert ('Please check URL.');
    } finally {
      setLoading(false);
    }
    setPost(prevState => ({...prevState, post: '', date: ''}));
    navigate('/');
  };

  return (<>
    {
      loading ? <Spinner/> :
        <form className="mt-2" onSubmit={onFormSubmit}>
          <div className="d-flex align-items-center">
            <label htmlFor="title">Title: </label>
            <input
              type="text"
              className="form-control mx-3"
              id="title"
              placeholder="Title"
              name="title"
              value={post.title}
              onChange={postChange}
              required
            />
          </div>
          <div className="d-flex flex-column align-items-center mt-3">
            <label htmlFor="description">Post</label>
            <textarea
              className="form-control my-3"
              id="description"
              placeholder="Description"
              name="description"
              value={post.description}
              onChange={postChange}
              required
            />
            <button type="submit" className="btn btn-primary">Add</button>
          </div>
        </form>
    }
  </>);
};

export default Add;