import { useCallback } from 'react';
import { useMemo, useState } from 'react';
import ButtonIcon from '../ButtonIcon';
import TextInput from '../TextInput';

function PasswordInput({ ...props }) {
  const [show, setShow] = useState(false);
  const handleClick = useCallback(() => {
    setShow(!show);
  }, [show]);
  const icon = useMemo(() => (show ? 'visibility_off' : 'visibility'), [show]);
  const type = useMemo(() => (show ? 'text' : 'password'), [show]);

  return (
    <TextInput
      type={type}
      endAdornment={
        <ButtonIcon
          onClick={handleClick}
          icon={icon}
          iconProps={{ color: 'primary' }}
        ></ButtonIcon>
      }
      {...props}
    ></TextInput>
  );
}

export default PasswordInput;
