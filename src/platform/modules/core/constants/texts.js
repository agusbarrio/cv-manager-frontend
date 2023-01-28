const CORE_TEXTS = {
  SERVER_ERRORS: {
    //Generic errors
    E500: { es: 'Error interno del servidor.' },
    E400: { es: 'Petición incorrecta' },
    E401: { es: 'No autorizado' },
    E403: { es: 'Prohibido' },
    E404: { es: 'No encontrado.' },
    E409: { es: 'Conflicto' },
    E422: { es: 'Entidad no procesable' },
    //Custom errors
    E401_001: {
      es: 'Credenciales inválidas',
    },
    E409_001: {
      es: 'Email no disponible',
    },
  },
  VALIDATIONS_REQUIRED: { es: 'Campo obligatorio' },
  VALIDATIONS_EMAIL: {
    es: 'Correo electrónico inválido.',
  },
  VALIDATIONS_MIN: { es: 'Debe tener al menos {{min}} caracteres' },
  VALIDATIONS_MAX: {
    es: 'Debe tener como máximo {{max}} caracteres',
  },
  VALIDATIONS_PASSWORD_MINUPPERCASE: {
    es: 'Debe tener como mínimo {{min}} mayúscula{{#plural}}s{{/plural}}',
  },
  VALIDATIONS_PASSWORD_MINLOWERCASE: {
    es: 'Debe tener como mínimo {{min}} minúscula{{#plural}}s{{/plural}}',
  },
  VALIDATIONS_PASSWORD_MINNUMBERS: {
    es: 'Debe tener como mínimo {{min}} número{{#plural}}s{{/plural}}',
  },
  VALIDATIONS_PASSWORD_MINSYMBOLS: {
    es: 'Debe tener como mínimo {{min}} símbolo{{#plural}}s{{/plural}}',
  },
  VALIDATIONS_EQUAL_TO: {
    es: 'Los datos ingresados no coinciden',
  },
  VALIDATIONS_DATE: {
    es: 'Fecha inválida',
  },
  ERROR_404_TITLE: {
    es: 'Página no encontrada',
  },
  GO_RAIZ: {
    es: 'Volver al inicio',
  },
  GENERIC_ERROR: {
    es: 'Ha ocurrido un error',
  },
  GENERIC_SUCCESS: {
    es: 'Operación exitosa',
  },
  LOGOUT: {
    es: 'Cerrar sesión',
  },
  GENERIC_ADD: {
    es: 'Crear',
  },
  GENERIC_DELETE_ALL: {
    es: 'Eliminar todo',
  },
  GENERIC_CLOSE: {
    es: 'Cerrar',
  },
  GENERIC_CONFIRM: {
    es: 'Confirmar',
  },
};

export default CORE_TEXTS;
