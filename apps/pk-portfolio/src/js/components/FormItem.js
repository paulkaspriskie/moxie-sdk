
const FormItem = ({labelName, children}) => {

  return (
    <div className="component-form-item">
      <label>{labelName}</label>
      {children}
    </div>
  );

}

export default FormItem;
