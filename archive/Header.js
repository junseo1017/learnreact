import {Link} from 'react-router-dom';

export function Header(props) {
  return (
    <header className={props.className}>
      <h1>
        <Link
          to='/'
          onClick={(e) => {
            props.onSelect();
          }}>
          Web
        </Link>
      </h1>
    </header>
  );
}
