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
            { label: 'Aktivitäten', translations: { en: 'Activities' }, slug: 'features/activities' },
            { label: 'Tagesleiste & Ansichten', translations: { en: 'Timeline & views' }, slug: 'features/timeline' },
            { label: 'Tracking-Intervall', translations: { en: 'Tracking interval' }, slug: 'features/tracking-interval' },
            { label: 'CSV-Export', translations: { en: 'CSV export' }, slug: 'features/csv-export' },
          ],
        },
        {
          label: 'Integrationen',
          translations: { en: 'Integrations' },
          items: [
            { label: 'VS Code', slug: 'integrations/vscode' },
          ],
        },
        {
          label: 'Referenz',
          translations: { en: 'Reference' },
          items: [
            { label: 'Einstellungen', translations: { en: 'Settings' }, slug: 'reference/settings' },
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
