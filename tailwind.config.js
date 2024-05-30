/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { colors, borderRadius, boxShadow, fontSize, sizing, spacing, typography } = require('./src/tokens/tokens.ts');

// Overriding the default bg utilities from background-color
// to background as they need to support gradients
const bgUtilities = {
  ...Object.keys(colors).reduce((acc, objectKey) => {
    Object.entries(colors[objectKey]).forEach(([name, value]) => {
      acc[`.bg-${objectKey}-${name}`] = {
        background: value,
      };
    });
    return acc;
  }, {}),
};

// Add font utilities as they comes combined in tokens
// TODO: Play with tokens to see if is feasible to improve fonts by custom transformers
const fontUtilities = {
  ...Object.keys(typography).reduce((acc, objectKey) => {
    Object.entries(typography[objectKey]).forEach(([name, value]) => {
      acc[`.font-${objectKey}-${name}`] = {
        font: value,
      };
    });
    return acc;
  }, {}),
};

// CTA buttons safelist
const typesLoop = ['primary', 'secondary', 'tertiary'];
const stylesLoop = ['brand', 'info', 'success', 'warning', 'error'];

const buttonsSafelist = typesLoop.reduce((acc, type) => {
  stylesLoop.forEach(style => acc.push(`cta-button-${style || 'brand'}-${type || 'primary'}`));
  return acc;
}, []);

module.exports = {
  content: ['./src/**/*.{js,ts,tsx,json}'],
  theme: {
    extend: {
      colors,
      ...spacing,
      borderRadius: borderRadius.border,
      boxShadow: boxShadow.shadow,
      fontSize: {
        ...fontSize.size.heading,
        ...fontSize.size.body,
      },
      borderWidth: {
        1: '1px',
        ...sizing.size,
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
    function ({ addUtilities }) {
      addUtilities(bgUtilities, ['responsive', 'hover']);
      addUtilities(fontUtilities, ['responsive']);
    },
  ],
  safelist: [
    ...buttonsSafelist,
    { pattern: /(pt|pr|pb|pl|mt|mr|mb|ml|border-t|border-r|border-b|border-l|rounded|shadow)-.+/ },
  ],
  daisyui: {
    styled: true,
    base: true,
    utils: true,
    logs: false,
    rtl: false,
    themes: [],
  },
};
