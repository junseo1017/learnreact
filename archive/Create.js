export function Create({onCreate}) {
  return (
    <article>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const title = e.target.title.value;
          const body = e.target.body.value;
          onCreate(title, body);
        }}>
        <h2>Create</h2>
        <p>
          <input type='text' name='title' placeholder='title' />
        </p>
        <p>
          <textarea type='text' name='body' placeholder='body' />
        </p>
        <p>
          <input type='submit' value='Create' />
        </p>
      </form>
    </article>
  );
}
