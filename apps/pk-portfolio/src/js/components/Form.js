
const Form = ({children, formRef, formSubmit}) => {

  return (
    <form ref={formRef} onSubmit={formSubmit} className="component-form__container">
      {children}
    </form>
  );

}

export default Form;
