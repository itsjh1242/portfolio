"use client";
import React, { useState } from "react";
import Image from "next/image";

// UI Components
import * as Wrapper from "../../ui/Wrapper";
import Badge from "../../ui/Badge";

// Data Import
import { WorkAllDesc } from "../../../db/WorkAllDesc";

// Icons
import { VscChevronLeft, VscChevronRight, VscCode, VscBracketDot, VscCircle, VscCircleFilled } from "react-icons/vsc";

export interface WorkDetailInterface {
  params: {
    identifier: string;
  };
}

export const WorkDetailPage = (props: WorkDetailInterface) => {
  const { params } = props;
  const data = WorkAllDesc[params.identifier];

  const [uicurrentUIIndex, setUIUIIndex] = useState(0);
  const func = data.detail.func;
  const func_index = Object.keys(data.detail.func);

  const handleBannerIndex = (direction: string) => {
    let index;
    if (direction === "left") {
      index = uicurrentUIIndex - 1;
      setUIUIIndex(index < 0 ? func_index.length - 1 : index);
    } else if (direction === "right") {
      index = (uicurrentUIIndex + 1) % func_index.length;
      setUIUIIndex(index);
    } else {
      setUIUIIndex(parseInt(direction));
    }
  };

  const handleOnClickMove = (url: string | null) => {
    if (url === null) {
      return alert("준비되지 않았거나 실행할 수 없습니다.");
    }
    window.open(url, "_blank");
  };

  return (
    <>
      {/* 대표 이미지 */}
      <div className="flex justify-center items-center w-screen h-580 overflow-hidden mb-8">
        <Image src={`workall/detail_main/${data.pid}_detail_main.svg`} alt={data.pid} width={0} height={0} className="w-full h-full object-cover" />
      </div>
      <Wrapper.Center className="flex-col w-full p-6 max-sm:p-3 text-gray-800">
        {/* 프로젝트 제목 */}
        <Wrapper.MaxWidth>
          <Wrapper.TitleText className="text-4xl font-bold mb-4">{data.title}</Wrapper.TitleText>
          <HorizontalDivider />

          {/* 프로젝트 설명 및 헤더 */}
          <Wrapper.FlexRow className="gap-6 max-sm:flex-col">
            {/* 헤더 부분 */}
            <Wrapper.HalfWidthWrapper className="max-sm:w-full">
              <table className="w-full text-left">
                <tbody>
                  {Object.keys(data.detail.header).map((header_key, index) => (
                    <tr key={index} className="align-top">
                      <th className="pr-4 pb-2 font-medium break-keep">{data.detail.header[header_key].title}</th>
                      <td className="pb-2">
                        {data.detail.header[header_key].content.map((content_item, index) => (
                          <p key={index}>{content_item}</p>
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Wrapper.HalfWidthWrapper>

            {/* 요약 부분 */}
            <Wrapper.HalfWidthWrapper className="max-sm:w-full">
              <p className="text-xl font-semibold mb-2">개요</p>
              {data.detail.long_summary.map((summary, index) => (
                <p key={index} className="mb-2">
                  {summary}
                </p>
              ))}
            </Wrapper.HalfWidthWrapper>
          </Wrapper.FlexRow>
        </Wrapper.MaxWidth>

        {/* 구현 기능 */}
        <Wrapper.MaxWidth className="mt-8">
          <Wrapper.TitleText className="text-3xl font-bold mb-4">구현 기능</Wrapper.TitleText>
          <HorizontalDivider />
          <table className="w-full text-left mb-4">
            <tbody>
              <tr className="align-top">
                <th className="pr-2 pb-2 font-medium w-12">명칭</th>
                <td className="pb-2">{func[func_index[uicurrentUIIndex]].name}</td>
              </tr>
              <tr className="align-top">
                <th className="pr-2 pb-2 font-medium">설명</th>
                <td className="pb-2">
                  <p className="select-text">{func[func_index[uicurrentUIIndex]].desc}</p>
                </td>
              </tr>
              {func[func_index[uicurrentUIIndex]].func ? (
                <tr className="align-top">
                  <th className="pr-2 pb-2 font-medium">기능</th>
                  <td className="pb-2">
                    {func[func_index[uicurrentUIIndex]]?.func?.map((func_item, index) => (
                      <p key={index}>{"· " + func_item}</p>
                    ))}
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </Wrapper.MaxWidth>
        {/* UI Image Slider */}
        <div className="relative flex justify-center items-center mb-6 max-w-screen-xl h-full">
          <div className="absolute top-1/2 left-4 max-sm:left-0 transform -translate-y-1/2 cursor-pointer" onClick={() => handleBannerIndex("left")}>
            <VscChevronLeft size={40} className="text-white bg-black rounded-full hover:scale-110 transition opacity-50 hover:opacity-100" />
          </div>
          <Image
            src={func[func_index[uicurrentUIIndex]].ui ? `/workall/${data.pid}/${func_index[uicurrentUIIndex]}.png` : ""}
            alt={data.pid}
            width={1280}
            height={658}
            className="rounded-xl shadow-lg"
          />
          <div className="absolute top-1/2 right-4 max-sm:right-0 transform -translate-y-1/2 cursor-pointer" onClick={() => handleBannerIndex("right")}>
            <VscChevronRight size={40} className="text-white bg-black rounded-full hover:scale-110 transition opacity-50 hover:opacity-100" />
          </div>
        </div>

        <div className="flex justify-center items-center gap-2">
          {func_index.map((func_item, index) => (
            <div key={index} className="cursor-pointer" onClick={() => handleBannerIndex(index.toString())}>
              {index === uicurrentUIIndex ? <VscCircleFilled size={15} className="text-gray-600" /> : <VscCircle size={15} className="text-gray-400" />}
            </div>
          ))}
        </div>

        {/* 트러블 슈팅 */}
        {Object.keys(data.detail.trouble).length !== 0 && (
          <Wrapper.MaxWidth className="mt-8">
            <Wrapper.TitleText className="text-3xl font-bold mb-4">트러블 슈팅</Wrapper.TitleText>
            <HorizontalDivider />
            {Object.keys(data.detail.trouble).map((trouble_key, index) => (
              <div key={index} className="flex flex-col gap-2 mb-4">
                <p className="text-xl font-bold">{trouble_key}</p>
                <div className="flex flex-col">
                  <p className="text-lg font-medium">문제점</p>
                  {data.detail.trouble[trouble_key].problem.map((trouble_item, index) => (
                    <p key={index} className="pl-4">
                      · {trouble_item}
                    </p>
                  ))}
                </div>
                <div className="flex flex-col">
                  <p className="text-lg font-medium">{data.detail.trouble[trouble_key]?.solve !== null && "해결 방안"}</p>
                  {data.detail.trouble[trouble_key]?.solve?.map((trouble_item, index) => (
                    <p key={index} className="pl-4">
                      · {trouble_item}
                    </p>
                  ))}
                </div>
                <div className="flex flex-col">
                  <p className="text-lg font-medium">{data.detail.trouble[trouble_key]?.result !== null && "결과"}</p>
                  {data.detail.trouble[trouble_key]?.result?.map((trouble_item, index) => (
                    <p key={index} className="pl-4">
                      · {trouble_item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </Wrapper.MaxWidth>
        )}

        {/* 회고 */}
        <Wrapper.MaxWidth className="mt-8">
          <Wrapper.TitleText className="text-3xl font-bold mb-4">회고</Wrapper.TitleText>
          <HorizontalDivider />
          {data.detail.review.map((review_item, index) => (
            <p key={index} className="mb-4">
              {review_item}
            </p>
          ))}
        </Wrapper.MaxWidth>

        {/* 링크 */}
        <Wrapper.MaxWidth className="mt-8 mb-6">
          <Wrapper.TitleText className="text-3xl font-bold mb-4">링크</Wrapper.TitleText>
          <HorizontalDivider />
          <Wrapper.FlexRow className="gap-4">
            {/* Github Repository */}
            <div
              className={` ${data.detail.github ? "cursor-pointer" : "cursor-not-allowed"}`}
              onClick={() => handleOnClickMove(data.detail.github ? data.detail.github : null)}
            >
              <Badge icon={VscCode} iconSize="50" bgColor="bg-black" fontColor="text-white" fontSize="text-base" context="Github 레포지토리 " />
            </div>
            {/* Demo Link */}
            <div
              className={` ${data.detail.demo ? "cursor-pointer" : "cursor-not-allowed"}`}
              onClick={() => handleOnClickMove(data.detail.demo ? data.detail.demo : null)}
            >
              <Badge icon={VscBracketDot} iconSize="50" bgColor="bg-blue-500" fontColor="text-white" fontSize="text-base" context="Demo 사이트 " />
            </div>
          </Wrapper.FlexRow>
        </Wrapper.MaxWidth>
      </Wrapper.Center>
    </>
  );
};

const HorizontalDivider = () => {
  return <div className="w-full border-b-2 border-gray-300 my-6" />;
};
