import { useCallback } from 'react';
import useLabels from './useLabels';

function useDisplayMoreInfoDialogItems() {
  const { labels } = useLabels();

  const displayMoreInfoDialogItems = useCallback(
    (contact) => [
      {
        renderProps: {
          title: labels.title,
          children: contact.title,
        },
      },
      {
        renderProps: {
          title: labels.linkedin,
          children: contact.linkedin,
        },
      },
      {
        renderProps: {
          title: labels.facebook,
          children: contact.facebook,
        },
      },
      {
        renderProps: {
          title: labels.twitter,
          children: contact.twitter,
        },
      },
      {
        renderProps: {
          title: labels.email,
          children: contact.email,
        },
      },
      {
        renderProps: {
          title: labels.phone,
          children: contact.phone,
        },
      },
      {
        renderProps: {
          title: labels.mobilePhone,
          children: contact.mobilePhone,
        },
      },
      {
        renderProps: {
          title: labels.address,
          children: contact.address,
        },
      },
      {
        renderProps: {
          title: labels.github,
          children: contact.github,
        },
      },
      {
        renderProps: {
          title: labels.country,
          children: contact.country,
        },
      },
      {
        renderProps: {
          title: labels.postalCode,
          children: contact.postalCode,
        },
      },
      {
        renderProps: {
          title: labels.city,
          children: contact.city,
        },
      },
      {
        renderProps: {
          title: labels.website,
          children: contact.website,
        },
      },
    ],
    [labels]
  );

  return { displayMoreInfoDialogItems };
}

export default useDisplayMoreInfoDialogItems;
