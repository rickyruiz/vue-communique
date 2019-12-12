import { CommuniqueVariantConfig } from 'types'

export default {
  success: {
    title: 'Success',
    styles: {
      backgroundColor: '#bceac8',
      color: '#0f4c1d',
      padding: '1rem',
      borderRadius: '4px',
    },
  },

  error: {
    title: 'Error',
    styles: {
      backgroundColor: '#ffcfcf',
      color: '#8e1a1c',
      padding: '1rem',
      borderRadius: '4px',
    },
  },

  warning: {
    title: 'Warning',
    styles: {
      backgroundColor: '#fdecb7',
      color: '#52451c',
      padding: '1rem',
      borderRadius: '4px',
    },
  },

  info: {
    title: 'Information',
    styles: {
      backgroundColor: '#e1f5fe',
      color: '#104f7d',
      padding: '1rem',
      borderRadius: '4px',
    },
  },
} as CommuniqueVariantConfig
