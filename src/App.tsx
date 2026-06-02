import Logo from "./assets/logo2transp.png";
import BackgroundImage from "./assets/BG_image_1.jpg";

function App() {
  return (
    <main
      className="w-screen h-screen relative flex items-center justify-center bg-[55%_60%] bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src={Logo}
          id="Logo"
          alt=""
          width={700}
        />
      </div>
      <div className="absolute left-0 bottom-16 w-screen overflow-hidden z-50">
        <p className="whitespace-nowrap tracking-wide text-white font-extrabold text-4xl">
          R1 WE RUN D STREETS, COMING SOON!!!, WATCH THIS SPACE
        </p>
      </div>
    </main>
  );
}

export default App;
