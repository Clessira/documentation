// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.nowdoing.app',
  integrations: [
    starlight({
      title: 'NowDoing',
      description:
        'Dokumentation für NowDoing — die schlanke macOS-Menüleisten-App für ehrliche Zeiterfassung.',
      logo: {
        src: './src/assets/logo.svg',
        replacesTitle: false,
      },
      favicon: '/favicon.svg',
      customCss: ['./src/styles/theme.css'],
      defaultLocale: 'root',
      locales: {
        root: { label: 'Deutsch', lang: 'de' },
        en: { label: 'English', lang: 'en' },
      },
      social: [
        {
          icon: 'external',
          label: 'nowdoing.app',
          href: 'https://nowdoing.app',
        },
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/NowDoingApp',
        },
      ],
      sidebar: [
        {
          label: 'Einstieg',
          translations: { en: 'Getting started' },
          items: [
            { label: 'Willkommen', translations: { en: 'Welcome' }, slug: 'getting-started/welcome' },
            { label: 'Installation', translations: { en: 'Install' }, slug: 'getting-started/install' },
            { label: 'Erste Schritte', translations: { en: 'First run' }, slug: 'getting-started/first-run' },
          ],
        },
        {
          label: 'Funktionen',
          translations: { en: 'Features' },
          items: [
            { label: 'Menüleiste & Popover', translations: { en: 'Menu bar & popover' }, slug: 'features/menu-bar' },
            { label: 'Tag-Ansicht', translations: { en: 'Day view' }, slug: 'features/day-view' },
            { label: 'Prompt-Popover', translations: { en: 'Prompt popover' }, slug: 'features/prompt-popover' },
            { label: 'Prompt-Anzeige', translations: { en: 'Prompt display' }, slug: 'features/prompt-display' },
            { label: 'Aktivitäten', translations: { en: 'Activities' }, slug: 'features/activities' },
            { label: 'Aktivitäten importieren', translations: { en: 'Import activities' }, slug: 'features/import' },
            { label: 'Wiederkehrende Aktivitäten', translations: { en: 'Recurring activities' }, slug: 'features/recurring' },
            { label: 'Tagesleiste & Ansichten', translations: { en: 'Timeline & views' }, slug: 'features/timeline' },
            { label: 'Tracking-Intervall', translations: { en: 'Tracking interval' }, slug: 'features/tracking-interval' },
            { label: 'Arbeitszeiten & Wochenziel', translations: { en: 'Working hours & target' }, slug: 'features/working-hours' },
            { label: 'Pausen', translations: { en: 'Breaks' }, slug: 'features/breaks' },
            { label: 'CSV-Export', translations: { en: 'CSV export' }, slug: 'features/csv-export' },
          ],
        },
        {
          label: 'Integrationen',
          translations: { en: 'Integrations' },
          items: [
            { label: 'VS Code', slug: 'integrations/vscode' },
            { label: 'Spotlight', slug: 'integrations/spotlight' },
            { label: 'HTTP-API', translations: { en: 'HTTP API' }, slug: 'integrations/http-api' },
            { label: 'SDKs', slug: 'integrations/sdks' },
          ],
        },
        {
          label: 'Referenz',
          translations: { en: 'Reference' },
          items: [
            { label: 'Einstellungen', translations: { en: 'Settings' }, slug: 'reference/settings' },
            { label: 'Einstellungen · Allgemein', translations: { en: 'Settings · General' }, slug: 'reference/settings-general' },
            { label: 'Tastaturkürzel', translations: { en: 'Keyboard shortcuts' }, slug: 'reference/keyboard-shortcuts' },
            { label: 'Daten & Datenschutz', translations: { en: 'Data & privacy' }, slug: 'reference/data-privacy' },
            { label: 'FAQ', slug: 'reference/faq' },
          ],
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/NowDoingApp/documentation/edit/main/',
      },
      lastUpdated: true,
      pagination: true,
    }),
  ],
});
