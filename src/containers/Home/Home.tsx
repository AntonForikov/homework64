import React from 'react';
import axiosAPI from '../../axiosAPI';

const Home: React.FC = () => {
  const getData = async () => {
    const {data: response} = await axiosAPI.get('/posts.json');
    console.log(response)
  };

  return (
    <div>
      <button onClick={getData}>get data</button>
    </div>
  );
};
export default Home;