import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

export const FirstStep = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form className='input-form' onSubmit={handleSubmit(onSubmit)}>
      <div className='col-md-6 offset-md-3'>
        <Form.Group controlId='first_name' className='mt-1'>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            name='first_name'
            placeholder='Enter first name'
            type='text'
            ref={register({
              required: 'First name is required',
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: 'First name should only contain characters',
              },
            })}
            className={`${errors.first_name ? 'input-error' : ''}`}
          />
          {errors.first_name && (
            <p className='errorMsg'>{errors.first_name.message}</p>
          )}
        </Form.Group>

        <Form.Group controlId='last_name' className='mt-3'>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            name='last_name'
            placeholder='Enter last name'
            type='text'
            ref={register({
              required: 'Last name is required',
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: 'Last name should only contain characters',
              },
            })}
            className={`${errors.last_name ? 'input-error' : ''}`}
          />
          {errors.last_name && (
            <p className='errorMsg'>{errors.last_name.message}</p>
          )}
        </Form.Group>
        <Button variant='primary' type='submit' className='mt-3'>
          Go to next page...
        </Button>
      </div>
    </Form>
  );
};
