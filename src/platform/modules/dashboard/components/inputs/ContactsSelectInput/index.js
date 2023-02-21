import useGetContactsService from '../../../services/contacts/useGetContactsService';

import SelectInputWithService from '../../../../core/components/inputs/SelectInputWithService';
function ContactsSelectInput({ ...props }) {
  const { getContacts } = useGetContactsService();
  return (
    <SelectInputWithService
      itemValueGetter={(contact) => contact.id}
      itemLabelGetter={(contact) => contact.title}
      service={getContacts}
      {...props}
    />
  );
}

export default ContactsSelectInput;
