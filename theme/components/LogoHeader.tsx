import MainIcon from "@Components/icon/MainIcon";
import { usePageData } from "rspress/runtime";
import { FC } from "react";
import { Link } from "rspress/theme";
import classes from "@Styles/Icon.module.css";

export const LogoHeader: FC = () => {
  const pageData = usePageData();
  const defaultLang = pageData.siteData.lang ?? "";
  const lang = pageData.page.lang;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
      <Link
        href={lang === defaultLang ? "/" : lang}
        className="flex items-center w-full h-full text-base font-semibold transition-opacity duration-300 hover:opacity-60"
      >
        <MainIcon width={40} height={40} />
        <span
          style={{ fontWeight: 800, fontSize: "30px" }}
          className={classes.icon}
        >
          GZ<span className={classes.highlight}>::</span>CTF
        </span>
      </Link>
    </div>
  );
};

export default LogoHeader;
