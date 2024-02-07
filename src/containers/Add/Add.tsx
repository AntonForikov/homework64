import React, {useState} from 'react';
import {Post} from '../../types.d.';
import Spinner from '../../components/Spinner/Spinner';
import axiosAPI from '../../axiosAPI';

const Add: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState<Post>({
    post: '',
    date: '',
  });

  const postChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    const date = new Date();

    setPost((prevState) => ({
      ...prevState,
      [name]: value,
      date: date.toISOString()
    }));
  };

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axiosAPI.post('/posts.json', post)
    } catch {
      alert ('Please check URL.');
    } finally {
      setLoading(false);
    }
  };

  return (<>
    {
      loading ? <Spinner/> :
        <form className="align-items-center d-flex mt-2" onSubmit={onFormSubmit}>
          <label htmlFor="post">Post: </label>
          <input
            type="text"
            className="form-control mx-3"
            id="post"
            placeholder="Post"
            name='post'
            value={post.post}
            onChange={postChange}
            required
          />
          <button type="submit" className="btn btn-primary">Add</button>
        </form>
    }
  </>);
};

export default Add;