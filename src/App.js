import Header from "./components/header";
import SideBar from "./components/sidebar";

import new_in from './assets/new-in.png'
import clothing from './assets/clothing.png'
import shoes from './assets/shoes.png'
import accessories from './assets/accessories.png'
import activewear from './assets/activewear.png'
import gift_living from './assets/gift-living.png'
import inspiration from './assets/inspiration.png'
import MainContainer from "./components/main";


function App() {

  const sideBarOptions = [
    {icon: new_in, title: "New In"},
    {icon: clothing, title: "Clothing"},
    {icon: shoes, title: "Shoes"},
    {icon: accessories, title: "Accessories"},
    {icon: activewear, title: "Activewear"},
    {icon: gift_living, title: "Gift & Living"},
    {icon: inspiration, title: "inspiration"}
  ]

  return (
    <>
      <Header />
      <SideBar options={sideBarOptions} />
      <MainContainer>
        
      </MainContainer>
    </>
  );
}

export default App;
