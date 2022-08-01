import Button from '@components/Button';

import Logo from '@assets/svgs/logo.svg';

import './styles/global.scss';

function App() {
  return (
    <main className="">
      <Button />
      <h1 className="">Set up webpack react with environment {process.env.name}</h1>

      <Logo width={30} height={30} fill="yellow" />
    </main>
  );
}

export default App;
