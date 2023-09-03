import './Register.scss'
import logo from '../../assets/svg/logo.svg'
import Card from '../../components/Card/Card';

import { useSelector, useDispatch } from 'react-redux';
import { setUsername, setEmail } from '../../redux/store';

import RegForm from '../../components/Form/RegForm';

 

const Register = () => {

  const username = useSelector((state) => state.user.username);
  const email = useSelector((state) => state.user.email);

  const dispatch = useDispatch();

  const handleInputChange = (event, name) => {
    const inputType = event.target.name
    switch (inputType) {
      case 'email':
        dispatch(setEmail(event.target.value));
        break;
      case 'username':
        dispatch(setUsername(event.target.value));
        break;
      default:
        console.log('state name not found')
        break
    }
  };


  return ( <div className='register-section'>
    <div className='register-section-top'>
      <img className="groth-logo" src={logo} alt="Groth Logo"/>
      <h1>Interfaz de Administrador</h1>
    </div>
    <Card className='register-section-form-container'
    title={'Solicita Acceso'}
    styles='register-form'
    >
      <RegForm/>
    </Card>
  </div> );
}
 
export default Register;