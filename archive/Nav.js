import {Link} from 'react-router-dom';

export function Nav(props) {
  const map = props.data.map((el) => {
    return (
      <li key={el.id}>
        <Link
          to={'/read/' + el.id}
          onClick={() => {
            props.onSelect(el.id);
          }}>
          {el.title}
        </Link>
      </li>
    );
  });
  return (
    <nav>
      <ol>{map}</ol>
    </nav>
  );
}
