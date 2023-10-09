export function CssTest(props) {
  return (
    <div>
      <h1 className="large-header">Css</h1>

      <header className="head">
        <h1 className="brown small">one</h1>
        <h1 className="blue small">two</h1>
        <h1 className="brown ">three</h1>
      </header>
      <header>
        <h1 className="brown">four</h1>
        <h1 className="white">five</h1>
        <h1 className="brown">six</h1>
      </header>
      <div className="border">
        <div className="box" />
      </div>
      <input type="text" className="input-box" />
    </div>
  );
}
