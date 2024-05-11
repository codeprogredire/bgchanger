import { useState } from 'react';

function App() {
  const [color,setColor]=useState("olive")
  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
          <button className='outline-none px-4 py-1 rounded-xl shadow-lg text-white'
          style={{backgroundColor:'red'}}
          onClick={()=>setColor('red')}
          >Red</button>

          <button className='outline-none px-4 py-1 rounded-xl shadow-lg text-white'
          style={{backgroundColor:'green'}}
          onClick={()=>setColor('green')}
          >Green</button>

          <button className='outline-none px-4 py-1 rounded-xl shadow-lg text-white'
          style={{backgroundColor:'blue'}}
          onClick={()=>setColor('blue')}
          >Blue</button>

          <button className='outline-none px-4 py-1 rounded-xl shadow-lg text-white'
          style={{backgroundColor:'black'}}
          onClick={()=>{
            let colorNames = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "pink", "brown", "black", "white", "gray", "cyan", "magenta", "lime", "teal", "purple", "navy", "silver", "olive"];
            let index=Math.floor(Math.random()*20)
            setColor(colorNames[index])
          }}
          >Random</button>

        </div>
      </div>
    </div>
  )
}

export default App
