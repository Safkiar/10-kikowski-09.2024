import Slider from './components/Slider/Slider';
import ProjectSlide from './components/Project/ProjectSlide';
import TechChart from './components/TechChart/TechChart';
import Layout from './ui/layout/Layout';
import ComponentView from './ui/layout/ComponentView';
import SmoothScroll from './utility/SmoothScroll';
import Contact from './components/Contact/Contact';
import Introduction from './components/Introduction/Introduction';
import Selfassesment from './components/Selfassesment/Selfassesment';


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