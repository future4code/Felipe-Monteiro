import TextField from '@material-ui/core/TextField'
const Input = ({
    name,
    value,
    handleValue,
    min,
    max,
    placeholder,
    title,
    pattern,
    type = 'text',
  }) => {
    return (
      <TextField
        /* <TextField
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        label={"E-mail"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"email"}
                    /> */
        color={'primary'}
        fullWidth
        variant={"outlined"}
        margin={"normal"}
        name={name}
        value={value}
        onChange={handleValue}
        placeholder={placeholder}
        type={type}
        required
        title={title}
        min={min}
        max={max}
        pattern={pattern}
      />
    );
  };
  
  export default Input;