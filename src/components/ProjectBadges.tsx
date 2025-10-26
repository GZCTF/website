import { FC } from "react";
import { useLang } from "@rspress/core/runtime";
import { Link } from "@rspress/core/theme";
import classes from "@Styles/Badges.module.css";

export const ProjectBadges: FC = () => {
  const lang = useLang();

  return (
    <div className={classes.container}>
      <div className={classes.row}>
        <Link href="https://telegram.dog/gzctf">
          <img
            src="https://img.shields.io/endpoint?color=blue&url=https%3A%2F%2Ftg.sumanjay.workers.dev%2Fgzctf"
            alt="Telegram Group"
          />
        </Link>
        <Link href="https://discord.gg/dV9A6ZjVhC">
          <img
            src="https://img.shields.io/discord/1239476909033656320?label=Discord"
            alt="Discord"
          />
        </Link>
        {lang === "zh" && (
          <Link href="https://jq.qq.com/?_wv=1027&k=muSqhF9x">
            <img
              src="https://img.shields.io/badge/QQ%20Group-903244818-blue"
              alt="QQ Group"
            />
          </Link>
        )}
      </div>
      <div className={classes.row}>
        <Link href="https://github.com/GZTimeWalker/GZCTF/actions/workflows/ci.yml">
          <img
            src="https://github.com/GZTimeWalker/GZCTF/actions/workflows/ci.yml/badge.svg"
            alt="publish"
          />
        </Link>
        <img
          src="https://img.shields.io/github/v/release/GZTimeWalker/GZCTF?include_prereleases&label=version"
          alt="version"
        />
        <img
          src="https://img.shields.io/github/license/GZTimeWalker/GZCTF?color=FF5531"
          alt="license"
        />
        <Link href="https://crowdin.com/project/gzctf">
          <img
            src="https://badges.crowdin.net/gzctf/localized.svg"
            alt="Crowdin"
          />
        </Link>
      </div>
    </div>
  );
};
