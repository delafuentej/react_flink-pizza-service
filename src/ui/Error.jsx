import { useNavigate, useRouteError } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate();
  // to show the error message inside the react router by using the custom hooks:
  const error = useRouteError();
  console.log('error',error);


  return (
    <div className='error'>
      <h1>{error.status} Something went wrong: 😢</h1>
      <h3>{error.data || error.message}</h3>
     
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default Error;
