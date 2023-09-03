import React from 'react';
import { useFormik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { 
  setName,
  setSurname,
  setUsername, 
  setEmail,
  setPw
} from '../../redux/store';
import FormInput from './FormInput';
import './RegForm.scss'
import { NavLink } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

 
 // A custom validation function. This must return an object
 // which keys are symmetrical to our values/initialValues
const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Campo Obligatorio';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Maximo 15 caracteres';
  }

  if (!values.lastName) {
    errors.lastName = 'Campo Obligatorio';
  } else if (values.lastName.length > 20) {
    errors.lastName = 'Maximo 20 caracteres';
  }

  if (!values.username) {
    errors.username = 'Campo Obligatorio';
  } else if (values.username.length > 20) {
    errors.username = 'Maximo 20 caracteres';
  }

  if (!values.email) {
    errors.email = 'Campo Obligatorio';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Ingrese un correo válido';
  }

  if (!values.pw) {
    errors.pw = 'Campo Obligatorio';
  } else if (values.pw.length > 20) {
    errors.pw = 'Maximo 20 caracteres';
  }

  return errors;
};

const RegForm = () => {
  // ...
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      pw: '',
    },
    validate,
    onSubmit: values => {
      act(() => {
        dispatch(setName(values.firstName));
        dispatch(setSurname(values.lastName));
        dispatch(setUsername(values.username));
        dispatch(setEmail(values.email));
        dispatch(setPw(values.pw));
        navigate('/')
        fetch(`${process.env.REACT_APP_API_URL}/users`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        })
      })
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
    data-testid='register-form'
    onSubmit={formik.handleSubmit}>
      <FormInput
      config={inputConfigs('firstName', 'Nombre')}
      />
      <FormInput
      config={inputConfigs('lastName', 'Apellido')}
      />
      <FormInput
      config={inputConfigs('username', 'Nombre de Usuario')}
      />
      <FormInput
      config={inputConfigs('email', 'Dirección de correo electronico', 'email')}
      />
      <FormInput
      config={inputConfigs('pw', 'Contraseña', 'Contraseña')}
      />
      <button className='btn btn-sm' type="submit">Enviar</button>
      <NavLink to="/login">¿Ya tienes cuenta? Inicio de sesión</NavLink>
    </form>
  );
};

export default RegForm