
import './App.css';


function App() {
  return (
    <>
      <div className='div_container' >
        <div className='div_form' >
          <form action="">
            <h1 style={{marginBottom:'40px', fontWeight: '100'}}>LOGIN</h1>
            <input className='input' style={{marginBottom:'20px'}} type="text" placeholder='Username' />
            <input className='input'  style={{marginBottom:'20px'}} type="password" placeholder='Password' />
           <div>
           <button className='btn' type='submit'> Login</button>
           </div>
          </form>

        </div>
      </div>


    </>

  );
}

export default App;
