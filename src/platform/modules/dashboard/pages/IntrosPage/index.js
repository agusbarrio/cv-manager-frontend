import ABMTemplateV2 from '../../../core/components/templates/ABMTemplateV2';
import useAddIntroService from '../../services/intros/useAddIntroService';
import IntroForm from '../../components/contents/forms/IntroForm';
import useDeleteAllIntrosService from '../../services/intros/useDeleteAllIntrosService';
import useGetIntrosService from '../../services/intros/useGetIntrosService';
import useDeleteIntroService from '../../services/intros/useDeleteIntroService';
import useEditIntroService from '../../services/intros/useEditIntroService';
import useDisplayMoreInfoDialogItems from './hooks/useDisplayMoreInfoDialogItems';
import useDisplayCardItems from './hooks/useDisplayCardItems';

function IntrosPage() {
  const { addIntro } = useAddIntroService();
  const { deleteAllIntros } = useDeleteAllIntrosService();
  const { getIntros } = useGetIntrosService();
  const { deleteIntro } = useDeleteIntroService();
  const { editIntro } = useEditIntroService();
  const { displayMoreInfoDialogItems } = useDisplayMoreInfoDialogItems();
  const { displayCardItems } = useDisplayCardItems();

  return (
    <ABMTemplateV2
      add={{ service: addIntro, form: IntroForm }}
      deleteAll={{ service: deleteAllIntros }}
      getAll={{ service: getIntros }}
      deleteOne={{ service: deleteIntro }}
      editOne={{ service: editIntro, form: IntroForm }}
      viewOne={{
        displayTitle: (intro) => intro.headLine,
        displayMoreInfoDialogItems,
        displayCardItems,
      }}
    ></ABMTemplateV2>
  );
}

export default IntrosPage;
