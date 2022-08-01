import Logo from '@assets/svgs/logo.svg';

import './styles/global.scss';

function App() {
  return (
    <main className="">
      <h1 className="">Set up webpack react with environment {process.env.name}</h1>

      <Logo width={30} height={30} fill="yellow" />
    </main>
  );
}

export default App;
