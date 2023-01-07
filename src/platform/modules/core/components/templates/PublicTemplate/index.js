import { default as PublicTemplateCore } from '../../../../../../core/components/templates/PublicTemplate';
import Icon from '../../../../../../core/components/dataDisplay/Icon';
import { useTheme } from '@mui/material';
import useDevice from '../../../../../../core/hooks/useDevice';
function PublicTemplate({ children }) {
  const theme = useTheme();
  const { isMobile } = useDevice();
  return (
    <PublicTemplateCore
      headerContent={
        <Icon
          color={theme.palette.primary.contrastText}
          size={isMobile ? '2rem' : '5rem'}
        >
          work
        </Icon>
      }
    >
      {children}
    </PublicTemplateCore>
  );
}

export default PublicTemplate;
