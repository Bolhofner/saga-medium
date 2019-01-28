const ReduxComponent = ({ sampleCheck, sampleValue, reveal }) => (
    <div className="redux-component">
      <span onClick={e => sampleCheck(true)}>Click to reveal the secret value</span>
        {reveal && <p>{sampleValue}</p>}
    </div>
  );