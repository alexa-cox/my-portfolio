import React from 'react';
import { Button, Container } from 'reactstrap';

function ContactButton() {
  return (
    <Button
      id='contactBtn'
      color='primary'
      className='position-fixed top-0 end-0 me-5 mt-4'
    >
      Say Hello
    </Button>
  );
}

export default ContactButton;
