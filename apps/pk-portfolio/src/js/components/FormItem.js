
const FormItem = ({labelName, children}) => {

  return (
    <div className="component-form-item">
      <label>{labelName}</label>
      {props.children}
    </div>
  );

}

export default FormItem;
