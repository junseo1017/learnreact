import './App.css';

function App() {
  return <div>Hello, world!</div>;
}

export default App;

// function Header() {
//   return (
//     <header>
//       <h1>
//         <a href='/'>Web</a>
//       </h1>
//     </header>
//   );
// }

// function Nav(props) {
//   const list = props.data.map((e) => {
//     return (
//       <li key={e.id}>
//         <a href={'/read/' + e.id}>{e.title}</a>
//       </li>
//     );
//   });
//   return (
//     <nav>
//       <ol>{list}</ol>
//     </nav>
//   );
// }

// function Article(props) {
//   return (
//     <article>
//       <h2>{props.title}</h2>
//       {props.body}
//     </article>
//   );
// }
// function App() {
//   const topics = [
//     {id: 1, title: 'html', body: 'html is...'},
//     {id: 2, title: 'css', body: 'css is...'},
//   ];
//   return (
//     <div>
//       <Header></Header>
//       <Nav data={topics}></Nav>
//       <Article title='wtf' body='this is react'></Article>
//     </div>
//   );
