import Slider from './components/FifthPage/Slider';
import ProjectSlide from './components/SecondPage/ProjectSlide';
import TechChart from './components/ThirdPage/TechChart';
import Layout from './layout/Layout';
import ComponentView from './layout/ComponentView';
import SmoothScroll from './utility/SmoothScroll';
import Contact from './components/SixthPage/Contact';
import Introduction from './components/FirstPage/Introduction';
import Selfassesment from './components/FourtPage/Selfassesment';


function App() {
  return (
    <Layout>
      <SmoothScroll>
      <ComponentView>
          <Introduction/>
        </ComponentView>
        <ComponentView>
          <ProjectSlide />
        </ComponentView>
        <ComponentView>
          <TechChart />
        </ComponentView>
        <ComponentView>
          <Selfassesment/>
        </ComponentView>
        <ComponentView>
          <Slider />
        </ComponentView>
        <ComponentView>
          <Contact/>
        </ComponentView>
      </SmoothScroll>
    </Layout>
  );
}

export default App;