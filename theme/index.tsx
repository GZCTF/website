import { LogoHeader } from "@Components/LogoHeader";
import Theme from "rspress/theme";
import ReactGA from "react-ga4";
import { clarity } from "react-microsoft-clarity";

const setup = () => {
  ReactGA.initialize("G-PYCMS8KGPL");
  clarity.init("oossz1i1h3");
};

const Layout = () => <Theme.Layout navTitle={<LogoHeader />} />;

export default {
  ...Theme,
  setup,
  Layout,
};

export * from "rspress/theme";
