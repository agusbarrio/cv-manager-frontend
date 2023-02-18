import { useCallback } from 'react';
import useLabels from './useLabels';

function useDisplayCardItems() {
  const { labels } = useLabels();
  const displayCardItems = useCallback(
    (contact) => [
      {
        renderProps: {
          label: labels.linkedin,
          value: contact.linkedin,
        },
      },
      {
        renderProps: {
          label: labels.facebook,
          value: contact.facebook,
        },
      },
      {
        renderProps: {
          label: labels.twitter,
          value: contact.twitter,
        },
      },
      {
        renderProps: {
          label: labels.email,
          value: contact.email,
        },
      },
      {
        renderProps: {
          label: labels.phone,
          value: contact.phone,
        },
      },
      {
        renderProps: {
          label: labels.mobilePhone,
          value: contact.mobilePhone,
        },
      },
      {
        renderProps: {
          label: labels.address,
          value: contact.address,
        },
      },
      {
        renderProps: {
          label: labels.github,
          value: contact.github,
        },
      },
      {
        renderProps: {
          label: labels.country,
          value: contact.country,
        },
      },
      {
        renderProps: {
          label: labels.postalCode,
          value: contact.postalCode,
        },
      },
      {
        renderProps: {
          label: labels.city,
          value: contact.city,
        },
      },
      {
        renderProps: {
          label: labels.website,
          value: contact.website,
        },
      },
    ],
    [labels]
  );

  return { displayCardItems };
}

export default useDisplayCardItems;
