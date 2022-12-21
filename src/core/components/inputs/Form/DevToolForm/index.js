import { DevTool } from '@hookform/devtools';
import { useFormContext } from 'react-hook-form';

function DevToolForm() {
  const { control } = useFormContext();
  return <DevTool control={control}></DevTool>;
}

export default DevToolForm;
