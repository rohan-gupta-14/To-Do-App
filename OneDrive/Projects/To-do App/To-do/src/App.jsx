import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [todos, setTodos] = useState([]);
  const handleAdd = () => {
  
  if (task.trim() === '') return;

  
  const newTask = {
    id: Date.now(),         
    task: task,             
    description: description, 
    completed: false        
  };

  
  setTodos([...todos, newTask]);

  
  setTask('');
  setDescription('');
};


  return (
    <>
      <div className="w-full h-screen bg-gradient-to-br from-sky-100 to-indigo-200">
        <div className="h-16 w-full text-3xl flex items-center justify-center font-extrabold text-gray-700 bg-gray-100 border border-gray-300 shadow-sm rounded-md">
          My To-do List
        </div>
        <div className="max-w-2xl mx-auto p-6 bg-gradient-to-br from-white/90 to-amber-50 rounded-2xl shadow-lg backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="flex flex-col">
              <label className="text-lg font-semibold text-gray-700 mb-2">Task:</label>
              <input
                type="text"
                placeholder="Enter a task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
              <button onClick={handleAdd} className="mt-3 bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 transition">
                Add Task
              </button>
            </div>


            <div className="flex flex-col">
              <label className="text-lg font-semibold text-gray-700 mb-2">Description:</label>
              <input
                type="text"
                placeholder="Write the description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <button onClick={handleAdd} className="mt-3 bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-600 focus:ring-4 focus:ring-green-300 transition">
                Add Description
              </button>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
