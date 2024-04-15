import './assets/style/style.scss';
// route
import { Routes, Route } from 'react-router-dom';
import Layout from './LayoutContext/Layout';
import Home from './component/pages/HomePage/Home';
import Blog from './component/pages/Blog/Blog';
import Industries from './component/pages/Industries/Industries';
import CRMDevService from './component/pages/Expertise/CRMDevService/CRMDevService';
import Company from './component/pages/Company/Company';
import Portfolio from './component/pages/Portfolio/Portfolio';
import MobileDev from './component/pages/Service/Mobile Development/MobileDevelopment/MobileDev';
import IosDev from './component/pages/Service/Mobile Development/IosDevelopment/IosDev';
import AndroidDev from './component/pages/Service/Mobile Development/AndroidDevelopment/AndroidDev';
import WebDevelop from './component/pages/Service/Web Development/WebDevelopment/WebDevelop';
import Service from './component/pages/Service/Component/Service';
import FrontEnd from './component/pages/Service/Web Development/Front-End/FrontEnd';
import BackEnd from './component/pages/Service/Web Development/Back-End/BackEnd';
import CrossPlatform from './component/pages/Service/CrossPlatformDevelopment/CrossPlatform/CrossPlatform';
import Flutter from './component/pages/Service/CrossPlatformDevelopment/FlutterDevelopment/Flutter';
import ReactNativeApp from './component/pages/Service/CrossPlatformDevelopment/ReactNativeApp/ReactNativeApp';
import DedicatedDevelopment from './component/pages/Service/DedicatedDevelopment/DedicatedDevelopment';
import CostSavingDev from './component/pages/Service/CostSavingDev/CostSavingDev';
import UiUxDesignService from './component/pages/Service/UiUxDesignService/UiUxDesignService';
import ITConsulting from './component/pages/Expertise/ITConsulting/ITConsulting';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route
            path='/'
            Component={Home}
          />
          <Route
            path='/service'
            Component={Service}
          />
          <Route
            path='mobile-dev'
            element={<MobileDev />}
          />
          <Route
            path='/industries'
            element={<Industries />}
          />
          <Route
            path='/crm'
            element={<CRMDevService />}
          />
          <Route
            path='/it'
            element={<ITConsulting />}
          />
          <Route
            path='/company'
            element={<Company />}
          />
          <Route
            path='/portfolio'
            element={<Portfolio />}
          />
          <Route
            path='/blog'
            element={<Blog />}
          />
          <Route
            path='/ios-dev'
            element={<IosDev />}
          />
          <Route
            path='/android-dev'
            element={<AndroidDev />}
          />
          <Route
            path='/web-dev'
            element={<WebDevelop />}
          />
          <Route
            path='/frontend'
            element={<FrontEnd />}
          />
          <Route
            path='/backend'
            element={<BackEnd />}
          />
          <Route
            path='/crossplatform'
            element={<CrossPlatform />}
          />
          <Route
            path='/flutter'
            element={<Flutter />}
          />
          <Route
            path='/react-native'
            element={<ReactNativeApp />}
          />
          <Route
            path='/dedicate-dev'
            element={<DedicatedDevelopment />}
          />
          <Route
            path='/cost-saving-dev'
            element={<CostSavingDev />}
          />
          <Route
            path='/ui-ux'
            element={<UiUxDesignService />}
          />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
