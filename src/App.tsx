import Button from '@components/Button';

import Logo from '@assets/svgs/logo.svg';

import './styles/global.scss';

function App() {
  return (
    <main className="">
      <Button />
      <h1 className="">Set up webpack react with environment {process.env.name}</h1>

      <Logo width={200} height={200} fill="pink" />
    </main>
  );
}

export default App;
