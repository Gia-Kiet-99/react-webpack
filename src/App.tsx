import React, { Suspense } from 'react';
import LoadingIndicator from './component/LoadingIndicator';

const Menu = React.lazy(() => import('./component/Menu'));

function App() {
  return (
    <div>
      <LoadingIndicator />
    </div>
    // <Suspense fallback={<LoadingIndicator />}>
    //   <Menu />
    // </Suspense>
  );
}

export default App;
