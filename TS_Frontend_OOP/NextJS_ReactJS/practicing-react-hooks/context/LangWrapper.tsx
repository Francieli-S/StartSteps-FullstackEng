'use client'
import { PropsWithChildren, createContext, useState } from 'react';

type Lang = 'en' | 'de';

export const LangContext = createContext<Lang>('en');

const LangWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  const [lang, setLang] = useState<Lang>('en');

  return (
    <LangContext.Provider value={lang}>
      <h1>The current language is: {lang}</h1>
      <button onClick={() => setLang('en')}>EN</button>
      <br />
      <button onClick={() => setLang('de')}>DE</button>
      {children}
    </LangContext.Provider>
  );
};

export default LangWrapper;
