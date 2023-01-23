import useLocale from '../../../../../core/contexts/LocaleContext/useLocale';
import DASHBOARD_TEXTS from '../../constants/texts';
import React from 'react';
import { Typography } from '@mui/material';

function ContactsPage() {
  const { translate } = useLocale();
  return (
    <Typography variant="h3" component="h1" textAlign="center">
      {translate(DASHBOARD_TEXTS.CONTACTS_PAGE_TITLE)}
    </Typography>
  );
}

export default ContactsPage;
