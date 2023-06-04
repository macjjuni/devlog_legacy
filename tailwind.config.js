/** @type {import('tailwindcss').Config} */

const layout = {
  header: '60px',
  main: 'calc(100vh - 106px)',
  footer: '46px',
  voxel: '528px',
}

const halfVoxel = Number(layout.voxel.split('px')[0]) / 2 + 'px'
const theme = {
  darkMode: 'class',
  content: [
    './layout/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '465px',
      md: '768px',
      lg: '1100px',
    },
    colors: {
      yellow: '#feca57',
      red: '#ED2B2A',
      navy: '#341f97',
      black: '#222f3e',
      primary: '#ee5253',
      secondary: '#32D962',
      SUCCESS: '#04cf52',
      WARNING: '#FFAB49',
      BLG0: 'white',
      BLG50: '#F8F9FA',
      BLG100: '#F1F3F5',
      BLG200: '#E8EBED',
      BLG300: '#DEE2E6',
      BLG400: '#C9CDD2',
      BLG500: '#9EA4AA',
      BLG600: '#72787F',
      BLG700: '#454C53',
      BLG800: '#26282B',
      BLG900: '#1B1D1F',
      BLG1000: 'black',
      BG_0: 'rgba(135, 131, 120, 0.2)',
      COLOR_0: 'rgba(255, 255, 255, 0.81)',
    },
    width: {
      voxelPC: layout.voxel,
      full: '100%',
    },
    height: {
      header: layout.header,
      footer: layout.footer,
      main: layout.main,
      voxelPC: layout.voxel,
      full: '100%',
    },
    minHeight: {
      main: layout.main,
    },
    inset: {
      voxelTop: `calc((100vh/2) - ${halfVoxel})`,
    },
    fontSize: {
      head_lg: '30px',
      head_md: '26px',
      head_sm: '22px',
      body: '18px',
      xlg: '20px',
      lg: '18px',
      md: '16px',
      sm: '14px',
    },
    padding: {
      sm: '4px',
      md: '8px',
      lg: '12px',
      xlg: '16px',
      header: layout.header,
    },
    boxShadow: {
      header: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
      headerDark: 'rgba(195, 191, 188, 0.3) 0px 1px 2px 0px, rgba(195, 191, 188, 0.15) 0px 2px 6px 2px',
      newIcon: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
      newIconDark: 'rgba(255, 255, 255, 0.05) 0px 6px 24px 0px, rgba(255, 255, 255, 0.08) 0px 0px 0px 1px',
    },
  },
  plugins: [],
}

module.exports = theme
