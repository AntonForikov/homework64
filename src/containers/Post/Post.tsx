import React, {useCallback, useEffect, useState} from 'react';
import {Link, Outlet, useParams} from 'react-router-dom';
import axiosAPI from '../../axiosAPI';
import {PostApi} from '../../types.d.';
import Spinner from '../../components/Spinner/Spinner';
import {format} from 'date-fns';

const Post: React.FC = () => {
  const params = useParams();
  const [post, setPost] = useState<PostApi | null>();
  const [isLoading, setIsLoading] = useState(false);

  const getPost = useCallback(async () => {
    setIsLoading(true);
    const response = await axiosAPI.get<PostApi | null>(`/posts/${params.id}.json`);
    setPost(response.data);
    setIsLoading(false);
  }, [params.id]);

  useEffect(() => {
    void getPost();
  }, [getPost]);

  return (
    <>
      {isLoading ? <Spinner/> :
        post && !isLoading ?
          <>
            <div className="card mt-3">
              <div className="card-body">
                <span className="text-secondary fs-6">Created at: {format(post.date, "dd.MM.yy HH.mm")}</span>
                <h1>{post.title}</h1>
                <h4>{post.description}</h4>
                <Link className="btn btn-success" to={`/posts/${params.id}/edit`}>Edit</Link>
                <button className={"btn btn-danger"}>Delete</button>
              </div>
            </div>
            <Outlet/>
          </>
          : <h1>No such post!</h1>
      }
    </>
  );
};

export default Post;