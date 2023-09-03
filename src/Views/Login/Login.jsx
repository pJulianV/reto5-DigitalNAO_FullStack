import './Login.scss'
import logo from '../../assets/svg/logo.svg'
import Card from '../../components/Card/Card';
import { useSelector, useDispatch } from 'react-redux';
import { setUsername, setPw } from '../../redux/store';
import LoginForm from '../../components/Form/LogForm';


const Login = () => {

  const username = useSelector((state) => state.user.username);
  const password = useSelector((state) => state.user.password);

  const dispatch = useDispatch();

  const handleInputChange = (event, name) => {
    const inputType = event.target.name
    switch (inputType) {
      case 'username':
        dispatch(setUsername(event.target.value));
        break;
      case 'password':
        dispatch(setPw(event.target.value));
        break;
      default:
        console.log('state name not found')
        break
    }
  };


  return ( <div className='login-section'>
    <div className='login-section-top'>
      <img className="groth-logo" src={logo} alt="Groth Logo"/>
      <h1>Interfaz de Administrador</h1>
    </div>
    <Card className='login-section-form-container'
    title={'Inicia Sesión'}
    styles='login-form'
    >
      <LoginForm/>
    </Card>
  </div> );
}

export default Login;