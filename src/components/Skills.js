import React from "react";
import CardTransition from "./card/CardTransition";
import { frontend, backend, ci, databases, others } from "../utils/techno";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <>
      <CardTransition title={t("about.front-end")} data={frontend} />

      <CardTransition title={t("about.back-end")} data={backend} />

      <CardTransition title={t("about.databases")} data={databases} />

      <CardTransition title={t("about.test")} data={ci} />

      <CardTransition title={t("about.others")} data={others} />
    </>
  );
};

export default Skills;
