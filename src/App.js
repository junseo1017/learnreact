import classes from './App.module.css';
import React, {useState, useEffect} from 'react';
import {Routes, Route, Link, useParams, useNavigate} from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>
        <Link to='/'>WEB</Link>
      </h1>
    </header>
  );
};

const Nav = ({data}) => {
  return (
    <nav className={classes.nav}>
      <ul>
        {data.map((e) => {
          return (
            <li key={e.id}>
              <Link to={`read/${e.id}`}>{e.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

const Read = ({data}) => {
  const {id} = useParams();
  const [topic, setTopic] = useState({title: null, body: null});
  const refreshTopic = async () => {
    const res = await fetch('http://localhost:3333/topics/' + id);
    const data = await res.json();
    setTopic(data);
  };
  useEffect(() => {
    refreshTopic();
  }, [id]);
  return (
    <article>
      <h2>{topic.title}</h2>
      {topic.body}
    </article>
  );
};

const Create = ({onCreate}) => {
  const submitHandler = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const body = e.target.body.value;
    onCreate(title, body);
  };
  return (
    <form onSubmit={submitHandler}>
      <h2>Create</h2>
      <p>
        <input type='text' name='title' placeholder='title' />
      </p>
      <p>
        <textarea name='body' placeholder='body'></textarea>
      </p>
      <p>
        <input type='submit' value='create' />
      </p>
    </form>
  );
};

const Control = () => {
  const {id} = useParams();
  let contextUI = null;
  if (id) {
    contextUI = (
      <li>
        <Link to={'/update/' + id}>Update</Link>
      </li>
    );
  }
  return (
    <ul>
      <li>
        <Link to='/create'>Create</Link>
      </li>
      {contextUI}
    </ul>
  );
};

function Update() {
  const param = useParams();
  const id = Number(param.id);
  const [title, setTitle] = useState(null);
  const [body, setBody] = useState(null);
  const refreshTopic = async () => {
    const resp = await fetch('http://localhost:3334/topics/' + id);
    const result = await resp.json();
    setTitle(result.title);
    setBody(result.body);
  };
  useEffect(() => {
    refreshTopic();
  }, [id]);

  const navigate = useNavigate();
  const submitHandler = async (evt) => {
    evt.preventDefault();
    const title = evt.target.title.value;
    const body = evt.target.body.value;
    const resp = await fetch('http://localhost:3334/topics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({title, body}),
    });
    const result = await resp.json();
    navigate('/read/' + result.id);
  };
  return (
    <form onSubmit={submitHandler}>
      <h2>Update</h2>
      <p>
        <input type='text' name='title' placeholder='title' value={title}></input>
      </p>
      <p>
        <textarea name='body' placeholder='body' value={body}></textarea>
      </p>
      <p>
        <input type='submit' value='create' />
      </p>
    </form>
  );
}

function App() {
  const navigate = useNavigate();
  const [topics, setTopics] = useState([]);
  const refreshTopics = async () => {
    const res = await fetch('http://localhost:3333/topics');
    const topicData = await res.json();
    setTopics(topicData);
  };

  useEffect(() => {
    refreshTopics();
  }, []);

  const createHandler = async (title, body) => {
    const data = {title, body};
    const res = await fetch('http://localhost:3333/topics', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
    });
    const result = await res.json();
    navigate('/read/' + result.id);
  };

  return (
    <div>
      <Header />
      <Nav data={topics}></Nav>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <h2>Hello,React</h2>
            </>
          }></Route>
        <Route path='read/:id' element={<Read data={topics}></Read>}></Route>
        <Route path='/create' element={<Create onCreate={createHandler}></Create>}></Route>
        <Route path='/update/:id' elemnet={<Update></Update>}></Route>
      </Routes>
      <Routes>
        {['/', 'read/:id', '/create'].map((e) => {
          return <Route key={e} path={e} element={<Control></Control>}></Route>;
        })}
      </Routes>
    </div>
  );
}

export default App;
