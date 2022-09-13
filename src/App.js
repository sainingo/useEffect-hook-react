import { useEffect, useMemo, useState } from 'react';

function App() {
  // const [number, setNumber] = useState(0)
  const [name, setName] = useState("")
  const [state, setState] = useState({
    name: "",
    selected: false,
  })
  // useEffect(() => {
  //   console.log("useeffect runnning")
  //   document.title = `You have clicked ${number} times`
  // },[number])
  // console.log("component rendered")


  // we use memo hook to prevent rerender of component when a value has not changed
  // const user = useMemo(() =>(
  //   {
  //     name: state.name,
  //     selected: state.selected,
  //   }
  // ), [state.name, state.selected])

  useEffect(() => {
    console.log("state changed")
  }, [state.name, state.selected])

  const handleAdd = () => {
    setState((prev) => ({...prev, name}))
  }

  const handleSelect = () => {
    setState((prev) => ({...prev, selected:true}))
  }
  return (
    <div className="App">
      {/* <span>You have clicked {number} times</span>
      <button onClick={() => setNumber((prev) => prev+1)}>Increase</button>
     <input onChange={(e) => setName(e.target.value)} /> */}
     <input type="text" onChange={(e) => setName(e.target.value)}/>
     <button onClick={handleAdd}>Add name</button>
     <button onClick={handleSelect}>Select</button>
     {`{
      name: ${state.name},
      selected: ${state.selected}
     }`}
    </div>
  );
}

export default App;
