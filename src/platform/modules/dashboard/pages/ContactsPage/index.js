import ABMTemplateV2 from '../../../core/components/templates/ABMTemplateV2';
import useAddContactService from '../../services/contacts/useAddContactService';
import ContactForm from './components/ContactForm';
import useDeleteAllContactsService from '../../services/contacts/useDeleteAllContactsService';
import useGetContactsService from '../../services/contacts/useGetContactsService';
import useDeleteContactService from '../../services/contacts/useDeleteContactService';
import useEditContactService from '../../services/contacts/useEditContactService';
import useDisplayMoreInfoDialogItems from './hooks/useDisplayMoreInfoDialogItems';
import useDisplayCardItems from './hooks/useDisplayCardItems';

function ContactsPage() {
  const { addContact } = useAddContactService();
  const { deleteAllContacts } = useDeleteAllContactsService();
  const { getContacts } = useGetContactsService();
  const { deleteContact } = useDeleteContactService();
  const { editContact } = useEditContactService();
  const { displayMoreInfoDialogItems } = useDisplayMoreInfoDialogItems();
  const { displayCardItems } = useDisplayCardItems();
  return (
    <ABMTemplateV2
      add={{ service: addContact, form: ContactForm }}
      deleteAll={{ service: deleteAllContacts }}
      getAll={{ service: getContacts }}
      deleteOne={{ service: deleteContact }}
      editOne={{ service: editContact, form: ContactForm }}
      viewOne={{
        displayTitle: (contact) => contact.title,
        displayMoreInfoDialogItems,
        displayCardItems,
      }}
    ></ABMTemplateV2>
  );
}

export default ContactsPage;
