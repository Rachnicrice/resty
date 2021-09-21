import './results.scss';
import ReactJson from 'react-json-view';

function Results (props) {
  return (
    <section>
      {props.data ? (<ReactJson src={props.data} />) : null}
    </section>
  );
}

export default Results;