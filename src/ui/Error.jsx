import { useNavigate, useRouteError } from 'react-router-dom';
import Button from './Button';

const Error = () => {
  const navigate = useNavigate();
  // to show the error message inside the react router by using the custom hooks:
  const error = useRouteError();
  console.log('error',error);


  return (
    <div className='error'>
      <h1>{error.status} Something went wrong: 😢</h1>
      <h3>{error.data || error.message}</h3>

      <Button
        handleClick={() => navigate(-1)}
      >
        &larr; Go back
      </Button>
     
   
    </div> 
  );
}

export default Error;
