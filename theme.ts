import { buildLegacyTheme } from "sanity";

const props = {
    '--my-white': '#F5F5F5',
    '--my-black': '#1a1a1a',
    '--my-primary': '#BE3144',
    '--my-red': '#FE2C54',
    '--my-yellow': '#f4b400',
    '--my-green': '#0f9d58',
  }

  export const myTheme = buildLegacyTheme({
    /* Base theme colors */
    '--black': props['--my-black'],
    '--white': props['--my-white'],
  
    '--gray': '#666',
    '--gray-base': '#666',
  
    '--component-bg': props['--my-black'],
    '--component-text-color': props['--my-white'],
  
    /* Brand */
    '--brand-primary': props['--my-primary'],
  
    // Default button
    '--default-button-color': '#666',
    '--default-button-primary-color': props['--my-primary'],
    '--default-button-success-color': props['--my-green'],
    '--default-button-warning-color': props['--my-yellow'],
    '--default-button-danger-color': props['--my-red'],
  
    /* State */
    '--state-info-color': props['--my-primary'],
    '--state-success-color': props['--my-green'],
    '--state-warning-color': props['--my-yellow'],
    '--state-danger-color': props['--my-red'],
  
    /* Navbar */
    '--main-navigation-color': props['--my-black'],
    '--main-navigation-color--inverted': props['--my-white'],
  
    '--focus-color': props['--my-primary'],
  })
