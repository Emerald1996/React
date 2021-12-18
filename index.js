function App() {
    return (
     
      <div className="body">
          <div className="container"> 
         <img src="react-logo.png" className="photo"/>
         <h1 className="name">Emma Emerald</h1>
         <p className="profession">Web Developer</p>

         <div className="btns">
             <a href=""><button><i class='bx bx-envelope'  ></i>email</button></a>
             <a href=""><button className="linkedin"><i class='bx bxl-linkedin' ></i>linkedin</button></a>
         </div>

         <div className="main">
             <h2>About</h2>
             <p className="interest">Creating responsive websites and designs
                 in an array of programming langauges.</p>

             <h2>Interest</h2>
             <p className="interest">customer service is what am always being
              enthusiastic about; From addressing their issues to resolving 
                them in a timely efficient manner guaranteed a 100%.</p>
         </div>
         <div className="footer">
          <footer>
              <a href=""><i class='bx bxl-whatsapp' ></i></a>
              <a href=""><i class='bx bxl-facebook' ></i></a>
              <a href=""><i class='bx bxl-github' ></i></a>
              <a href=""><i class='bx bx-envelope'  ></i></a>
             
          </footer>
         </div>
         </div> 
      </div>
 
    )
}

ReactDOM.render(<App />, document.getElementById('root'))