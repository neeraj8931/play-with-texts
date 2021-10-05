import logo from './logo.svg';
import './App.css';
import Textbox from './component/Textbox';

function App() {
  return (
   <>
    <div className="row"> 
            <Textbox className="m-3"></Textbox>
    </div>
    <div class="fixed-bottom">
    <div class="footer bg-green">
      <div className="text-center text-white">
          <p>Made with ❤ by <a href="#"><strong>Neeraj </strong></a></p>
          <div className="social-icons text-white">
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-github"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-linkedin-in"></i></a>
          </div>
      </div>
    </div>
    </div>
    
   </>
  );
}

export default App;
