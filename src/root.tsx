import { component$, useStyles$ } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';
import { RouterHead } from './components/router-head/router-head';

import globalStyles from './global.css?inline';

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */
  useStyles$(globalStyles);

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <meta property="og:title" content="kaBeech Website" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kabeech.com/" />
        <meta property="og:image" content={"https://media.licdn.com/dms/image/v2/D562DAQGBXnE5DopjTA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1693517070407?e=1729724400&v=beta&t=WPdxUnqUFuoa-ipX4oYqoklmsGXgj4rbVZbOpTpAGfk"} />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
