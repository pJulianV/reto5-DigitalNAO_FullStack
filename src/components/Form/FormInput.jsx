import './FormInput.scss'

const FormInput = ({config}) => {
  return ( 
    <div className='form-input'>
      <label id={`label-${config.name}`} className="label">
        <span className="label-text">{config.label}</span>
      </label>
      <input
        aria-labelledby={`label-${config.name}`}
        className='input input-bordered input-sm w-full max-w-xs'
        id={config.name}
        name={config.name}
        type={config.type}
        onChange={config.onChange}
        value={config.value}
      />
      {config.errors ? 
      (
        <div className='label error'>
          <span className="label-text-alt error-text">
          {config.errors}
          </span>
        </div>
      )
      : null}
    </div>
   );
}
 
export default FormInput;