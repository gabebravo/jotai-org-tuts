/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'wouter';

const root = css`
  a {
    color: blue;
  }
`;

const JotaiAsync = () => {
  return (
    <div css={root}>
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
    </div>
  );
};

export default JotaiAsync;
