import "./App.css";
import { HeaderComponent } from "./components/header/header";
import { MainComponent } from "./components/main/main";
import { FooterComponent } from "./components/footer/footer";

function App() {
  return (
    <>
      <HeaderComponent />
      <MainComponent/>
      <FooterComponent/>
    </>
  );
}

export default App;
