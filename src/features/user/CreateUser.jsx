import { useState } from 'react';
import { Button, Input } from '../../ui';

function CreateUser() {
  const [username, setUsername] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className='text-center mt-15 mb-10'>
      <p className='text-sm text-stone-600 font-semibold md:text-base mb-3' >👋Welcome! Please start by telling us your name:</p>

      <Input 
        type='text'
        placeholder='Introduce your full name'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className='w-72 text-center'
      
      />


      {username !== '' && (
        <div>
          <Button className='mt-2'>
            Start ordering
          </Button>
        
        </div>
      )}
    </form>
  );
}

export default CreateUser;
