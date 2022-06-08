import './App.css';
import {useState} from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

function Header(props) {
  return (
    <header>
      <h1>
        <a
          href='/'
          onClick={(e) => {
            e.preventDefault();
            props.onSelect();
          }}>
          Web
        </a>
      </h1>
    </header>
  );
}

function Nav(props) {
  const map = props.data.map((el) => {
    return (
      <li key={el.id}>
        <a
          href={'/read/' + el.id}
          onClick={(e) => {
            e.preventDefault();
            props.onSelect(el.id);
          }}>
          {el.title}
        </a>
      </li>
    );
  });
  return (
    <nav>
      <ol>{map}</ol>
    </nav>
  );
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}
function App() {
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  let topics = [
    {id: 1, title: 'html', body: 'html is'},
    {id: 2, title: 'css', body: 'css is'},
  ];
  let content = null;
  if (mode === 'WELCOME') {
    content = <Article title={mode} body='this is WEB'></Article>;
  } else if (mode === 'READ') {
    const [topic] = topics.filter((e) => {
      if (e.id === id) {
        return true;
      } else return false;
    });
    content = <Article title={topic.title} body={topic.body}></Article>;
  }
  const clickHandler = () => {
    console.log('hi');
  };

  return (
    <div>
      <Header
        onSelect={() => {
          setMode('WELCOME');
        }}></Header>
      <Nav
        data={topics}
        onSelect={(id) => {
          setMode('READ');
          setId(id);
        }}></Nav>
      {content}
      <ButtonGroup variant='contained' aria-label='outlined primary button group'>
        <Button variant='outlined'>Update</Button>
        <Button onClick={clickHandler} variant='outlined'>
          Create
        </Button>
      </ButtonGroup>
      <Button variant='outlined'>Delete</Button>
    </div>
  );
}

export default App;
