import React from "react";
import { cssStyle } from "./about.css";
import { client } from "@/libs/client";
import { aboutType } from "@/types";

const getContents = async () => {
  const response = await client.get<aboutType>({
    endpoint: "shopinfo",
    contentId: "wf7x4le9bp3m",
  });
  return response;
};

export const About: React.FC = async () => {
  const data = await getContents();
  return (
    <section className={cssStyle.section} id="about">
      <div className={cssStyle.inner}>
        <h2 className={cssStyle.title}>{data.title}</h2>
        <div className={cssStyle.aboutContent}>
          <div
            className="richEditor"
            dangerouslySetInnerHTML={{
              __html: data.contentBlock[0].aboutText,
            }}
          />
          <div className={cssStyle.photoContent}>
            {/* <div className={cssStyle.photo}>
              <img
                className={cssStyle.photoImg}
                src={data.contentBlock[0].photoLeft.url}
                alt=""
              />
              <div
                className="richEditor"
                dangerouslySetInnerHTML={{
                  __html: data.contentBlock[0].captionLeft,
                }}
              />
            </div> */}
            <div className={cssStyle.photo}>
              <img
                className={cssStyle.photoImg}
                src={data.contentBlock[0].photoRight.url}
                alt=""
              />
              <div
                className="richEditor"
                dangerouslySetInnerHTML={{
                  __html: data.contentBlock[0].captionRight,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
