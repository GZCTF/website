import { LogoHeader } from "@Components/LogoHeader";
import { Layout as BasicLayout } from "@rspress/core/theme-original";
import ReactGA from "react-ga4";
import { clarity } from "react-microsoft-clarity";

const setup = () => {
  ReactGA.initialize("G-PYCMS8KGPL");
  clarity.init("oossz1i1h3");
};

const Layout = () => <BasicLayout navTitle={<LogoHeader />} />;

export { Layout, setup };

export * from "@rspress/core/theme-original";
