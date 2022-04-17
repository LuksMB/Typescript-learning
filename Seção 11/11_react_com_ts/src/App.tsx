import React, { createContext } from 'react';

//4 - importação de componentes

import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import Destructuring, {Category} from './components/Destructuring';
import State from './components/State';
import Context from './components/Context';

//8 - types
type textOrNull = string | null;
type fixed = "Isso" | "Ou" | "Aquilo";

//9 - Context

interface IAppContext{
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {
  //1 - variáveis
  const name: string = "Lucas";
  const age: number = 19;
  const isWorking: boolean = true;

  //2 - funções
  const userGreeting = (name: string) : string => {
    return `Olá, ${name}`;
  }

  //8 - types
  const myText: textOrNull = "Tem texto aqui!";
  let mySecondText: fixed = "Isso";

  //9 - Context API
  const contextValue : IAppContext = {
    language: "Javascript",
    framework: "Express",
    projects: 3
  };

  

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <h1>Typescript com React</h1>
        <h2>Nome: {name}</h2>
        <p>Idade: {age}</p>
        {isWorking && (
          <div>
            <p>Está trabalhando</p>
          </div>
        )}
        <h3>{userGreeting(name)}</h3>
        <FirstComponent/>
        <SecondComponent name = "Segundo"/>
        <Destructuring 
        title = "Primeiro Post"
        content = "Algum conteúdo"
        commentsQnt = {10}
        tags = {["Typescript", "React"]}
        category = {Category.TS}     
        /> 
        <State />
        {myText &&
          <p>Tem texto na variável!</p>
        }
        {mySecondText &&
          <p>Tem texto ({mySecondText}) na variável!</p>
        }

        <Context />
      </div>
    </AppContext.Provider>
  );
}

export default App;
