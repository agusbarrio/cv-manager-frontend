import ABMTemplateV2 from '../../../core/components/templates/ABMTemplateV2';
import useAddApikeyService from '../../services/apikeys/useAddApikeyService';
import ApikeyForm from './components/ApikeyForm';
import useDeleteAllApikeysService from '../../services/apikeys/useDeleteAllApikeysService';
import useGetApikeysService from '../../services/apikeys/useGetApikeysService';
import useDeleteApikeyService from '../../services/apikeys/useDeleteApikeyService';
import useDisplayMoreInfoDialogItems from './hooks/useDisplayMoreInfoDialogItems';
import useDisplayCardItems from './hooks/useDisplayCardItems';
function Apikeyspage() {
  const { addApikey } = useAddApikeyService();
  const { deleteAllApikeys } = useDeleteAllApikeysService();
  const { getApikeys } = useGetApikeysService();
  const { deleteApikey } = useDeleteApikeyService();
  const { displayMoreInfoDialogItems } = useDisplayMoreInfoDialogItems();
  const { displayCardItems } = useDisplayCardItems();
  return (
    <ABMTemplateV2
      add={{ service: addApikey, form: ApikeyForm }}
      deleteAll={{ service: deleteAllApikeys }}
      getAll={{ service: getApikeys }}
      deleteOne={{ service: deleteApikey }}
      viewOne={{
        displayTitle: (apikey) => apikey.title,
        displayMoreInfoDialogItems,
        displayCardItems,
      }}
    ></ABMTemplateV2>
  );
}

export default Apikeyspage;
