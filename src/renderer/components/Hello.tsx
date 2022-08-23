import { Link } from 'react-router-dom'


export default function Hello ()  {
  return (
    <div>
      <h1>My Photo Cropper</h1>
      <div className="Hello">
        <Link to="/photo">
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Read our docs
          </button>
        </Link>
        <a
          href="https://github.com/sponsors/electron-react-boilerplate"
          target="_blank"
          rel="noreferrer"
        >

        </a>
      </div>
    </div>
  );
};
