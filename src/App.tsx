import Logo from "./assets/logo2transp.png";
import BackgroundImage from "./assets/BG_image_1.jpg";

function App() {
  return (
    <main
      className="w-screen h-screen flex items-center justify-center bg-[55%_60%] bg-no-repeat"
      style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <div>
        <img
          src={Logo}
          alt=""
          width={700}
        />
        <p className="absolute top-155 z-50 left-140 text-white font-extrabold text-4xl">
          COMING SOON!!!
        </p>
      </div>
    </main>
  );
}

export default App;
