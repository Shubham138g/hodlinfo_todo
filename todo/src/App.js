import './App.css';
import TaskInput from './components/TaskInput';
import TaskL from './components/TaskL';

function App() {
  return (
    < >
    <div className="container pt-5">
      
      <div className="row d-flex justify-content-center">
        <div className="col-6 ">
          <h1 className='fs-1 mb-4'>Todo App</h1>
          <TaskInput/>
        </div>
      </div>
      <div className="row d-flex justify-content-center ">
        <div className="col-6">
          <TaskL/>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
