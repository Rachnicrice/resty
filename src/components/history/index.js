import './history.scss';

function History (props) {

  function handleClick (e) {
    console.log(e.target.id);
    // displayHistory()
  }

  return (
    <>
      <section className="history">
        {props.history.map((request, i) => {
          <label className="methods" onClick={handleClick} id={i}>
            {console.log(request)}
            {/* <span>{request.method}</span>
            <div>URL: {request.url}</div> */}
          </label>;
        })}
      </section>
    </>
  );

}

export default History;