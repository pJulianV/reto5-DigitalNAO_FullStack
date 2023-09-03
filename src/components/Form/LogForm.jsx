import React from 'react';
import { useFormik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { 
  setUsername,
  setPw
} from '../../redux/store';
import FormInput from './FormInput';
import './LogForm.scss'
import { NavLink } from 'react-router-dom';

 
 // A custom validation function. This must return an object
 // which keys are symmetrical to our values/initialValues
const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Campo Obligatorio';
  }

  return errors;
};

const LogForm = () => {
  // Pass the useFormik() hook initial form values, a validate function that will be called when
  // form values change or fields are blurred, and a submit function that will
  // be called when the form is submitted

  const navigate = useNavigate()
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      username: '',
    },
    validate,
    onSubmit: values => {
      const errors = validate(values);
      if (!errors.username) {
        dispatch(setUsername(values.username));
        navigate('/');
      }
    },
  });

  const inputConfigs = (name, label, type = 'text') => {
    const configs = {
      onChange: formik.handleChange,
      value: formik.values[name],
      errors: formik.errors[name],
      type: type,
      name: name,
      label: label
    }
    return configs
  } 
  return (
    <form
    data-testid='login-form'
    onSubmit={formik.handleSubmit}>
      <FormInput
      config={inputConfigs('username', 'Nombre de Usuario')}
      />
      <button className='btn btn-sm' type="submit">Entrar</button>
      <NavLink to="/register">¿No tienes cuenta? Regístrate</NavLink>
    </form>
  );
};

export default LogForm