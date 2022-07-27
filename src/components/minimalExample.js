import React from 'react'

export const DownloadSreenShots = React.forwardRef((props, ref) => {
  const customRef = React.useRef(null);

  const anyFunction = React.useCallback( props => {
    console.log(ref, customRef)
    // insert your code here
  },[ref, customRef]);

  React.useImperativeHandle(ref, () => ({
    callerFunction: () => anyFunction('any props')
  }),[anyFunction]);

  return <div id={props.id} ref={customRef}>Example Div</div>;
});
