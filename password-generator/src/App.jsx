import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  // variablesß
  const [lenght, setLenght] = useState(10);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordGenerator = useCallback((() => {
    let pass = ""
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"

    if (numberAllowed) {
      str += "1234567890"
    }





  }, [lenght, numberAllowed, charAllowed]));



  return (
    <div className="mx-auto my-8 w-full max-w-md rounded-lg bg-gray-800 px-4 py-3 text-orange-500 shadow-md">
      <h1 className="my-3 text-center text-white">Password generator</h1>
      <div className="mb-4 flex overflow-hidden roundenpm d-lg shadow">
        <input
          type="text"
          className="w-full px-3 py-1 outline-none"
          placeholder="Password"
          readOnly
          value={password}
        />
        <button className="shrink-0 bg-blue-700 px-3 py-0.5 text-white outline-none">
          copy
        </button>
      </div>
      <div className="flex gap-x-2 text-sm">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={70}
            value={length}
            className="cursor-pointer"
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" id="numberInput" />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" id="characterInput" />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
