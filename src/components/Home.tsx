/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useAtom } from 'jotai';
import { Link } from 'wouter';
import { theme } from '../state/themeState';
import { useEffect } from 'react';

const root = css`
  a {
    color: blue;
  }
`;

const JotaiAsync = () => {
  const [appTheme, setAppTheme] = useAtom(theme);
  const handleClick = () =>
    setAppTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));

  useEffect(() => {
    document.body.style.backgroundColor =
      appTheme === 'light' ? '#FFF' : '#000';
    document.body.style.color = appTheme === 'light' ? '#000' : '#FFF';
  }, [appTheme]);

  return (
    <div css={root}>
      <div>
        <h5>Theme switcher</h5>
        <button style={{ textTransform: 'uppercase' }} onClick={handleClick}>
          {appTheme}
        </button>
      </div>
      <div>
        <h1>Jotai Org Tutorials</h1>
      </div>
      <div>
        <h3>
          <Link href={`/counter`}>
            <a>Counter : Basic Atom</a>
          </Link>
        </h3>
        <p>This is a simple state counter to prove the Jotai setup</p>
      </div>
      <hr />
      <div>
        <h3>
          <Link href={`/jotai-immer`}>
            <a>Jotai Immer : useImmerAtom</a>
          </Link>
        </h3>
        <p>
          Allows to overwrite a value in a complex data structure without
          spreads, etc. Immer makes a copy and the useImmerAtom util allows for
          mutating the copy while not causing side effects on the original value
        </p>
      </div>
      <hr />
      <div>
        <h3>
          <Link href={`/counter-provider`}>
            <a>Counter : Jotai Provider</a>
          </Link>
        </h3>
        <p>This shows how a Jotai Provider creates its own context</p>
      </div>
      <hr />
    </div>
  );
};

export default JotaiAsync;
