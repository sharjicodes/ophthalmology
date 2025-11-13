"use client";

import ChatMessages from "../EyeIsTheWindow/ChatMessages";
import SystemDetailBox from "../EyeIsTheWindow/SystemDetailBox";
import BodyDesktop from "../EyeIsTheWindow/BodyDesktop";
import BodyMobile from "../EyeIsTheWindow/BodyMobile";
import MobileSystemDetailBox from "../EyeIsTheWindow/MobileSystemDetailBox";

import Image from "next/image";
import { useEffect } from "react";



export default function ChatAndBody(props) {
  const {
    visibleMessages,
    activeBody,
    setActiveBody,
    setIsManual,
    isMobile,
    isTablet,
  } = props;
const systemButtons = [
    {
      id: "endo",
      label: "Endocrinology",
      position: "-left-[5%] top-[25%]",
      img: "/assets/nav/Frame 13059.png",
    },
    {
      id: "gastro",
      label: "Gastroenterology",
      position: "-left-[13%] top-[34%]",
      img: "/assets/nav/Frame 13059 (1).png",
    },
    {
      id: "geria",
      label: "Geriatrics",
      position: "-left-[5%] top-[42%]",
      img: "/assets/nav/geriatrics.png",
    },
    {
      id: "Hepa",
      label: "Hepatology",
      position: "-left-[15%] top-[49%]",
      img: "/assets/nav/Frame 13059 (2).png",
    },
    {
      id: "infla",
      label: "Inflammation",
      position: "-left-[13%] top-[57%]",
      img: "/assets/nav/Frame 13059 (3).png",
    },
    {
      id: "uro",
      label: "Urology",
      position: "-left-[6%] top-[66%]",
      img: "/assets/nav/Frame 13059 (11).png",
    },
    {
      id: "viru",
      label: "Virology",
      position: "left-[2%] top-[76%]",
      img: "/assets/nav/Viruses.png",
    },
    {
      id: "neuro",
      label: "Neurology",
      position: "right-[4%] top-[18%]",
      img: "/assets/nav/Frame 13059 (5).png",
    },
    {
      id: "cardio",
      label: "Cardiovascular",
      position: "-right-[4%] top-[29%]",
      img: "/assets/nav/Frame 13059 (6).png",
    },
    {
      id: "derma",
      label: "Dermatology",
      position: "-right-[5%] top-[38%]",
      img: "/assets/nav/Frame 13059 (7).png",
    },
    {
      id: "rad",
      label: "Radiation Oncology",
      position: "-right-[19%] top-[48%]",
      img: "/assets/nav/Frame 13059 (8).png",
    },
    {
      id: "skel",
      label: "Skeletal System",
      position: "-right-[9%] top-[58%]",
      img: "/assets/nav/Frame 13059 (9).png",
    },
    {
      id: "woman",
      label: "Women's Health",
      position: "-right-[4%] top-[66%]",
      img: "/assets/nav/Frame 13059 (10).png",
    },
    {
      id: "emer",
      label: "Emerging Viruses",
      position: "-right-[3%] top-[74%]",
      img: "/assets/nav/Rareviruses.png",
    },
    {
      id: "gen",
      label: "Genetics",
      position: "right-[13%] top-[82%]",
      img: "/assets/nav/DNA.png",
    },
  ];

  const bodyImageMap = {
    endo: "/assets/nav/Endocrine.png",
    gastro: "/assets/nav/Full-Body 1 (1).png",
    geria: "/assets/nav/Full-Body 1 (2).png",
    Hepa: "/assets/nav/Full-Body 1 (3).png",
    infla: "/assets/nav/Full-Body 1 (4).png",
    viru: "/assets/nav/Full-Body 1 (14).png",
    neuro: "/assets/nav/Full-Body 1 (6).png",
    cardio: "/assets/nav/Full-Body 1 (7).png",
    derma: "/assets/nav/Full-Body 1 (8).png",
    rad: "/assets/nav/Full-Body 1 (9).png",
    skel: "/assets/nav/Full-Body 1 (10).png",
    woman: "/assets/nav/Full-Body 1 (11).png",
    emer: "/assets/nav/Full-Body 1 (12).png",
    gen: "/assets/nav/Full-Body 1 (13).png",
    uro: "/assets/nav/Full-Body 1 (5).png",
    default: "/assets/nav/Full-Body 1.png",
  };

  const bodySystemsIds = [
    "endo",
    "gastro",
    "geria",
    "Hepa",
    "infla",
    "viru",
    "neuro",
    "cardio",
    "derma",
    "rad",
    "skel",
    "woman",
    "emer",
    "gen",
    "uro",
    "default",
  ];

  const systemDetails = {
    woman: {
      title: "Women's Health",
      description:
        "Female-specific health conditions, including reproductive health, and various female-specific treatments and therapies.",
      icon: "/assets/nav/womans.png",
    },
    neuro: {
      title: "Neurology",
      description:
        "The brain and nervous system focused on neurologic disorders, treatments, and outcomes.",
      icon: "/assets/nav/neurology.png",
    },
    cardio: {
      title: "Cardiovascular",
      description:
        "The cardiovascular system to analyze and measure various treatments and conditions of the heart and vasculature.",
      icon: "/assets/nav/heart.png",
    },
    derma: {
      title: "Dermatology",
      description:
        "Evaluation of the safety and effectiveness of medical interventions and therapeutics of the skin.",
      icon: "/assets/nav/skin.png",
    },
    rad: {
      title: "Radiation Oncology",
      description:
        "The precise delivery techniques, tumor response, encompassing various techniques and treatments to treat cancer.",
      icon: "/assets/nav/radiation.png",
    },
    skel: {
      title: "Skeletal System",
      description:
        "The skeletal system, osteology, bones and bone health or conditions.",
      icon: "/assets/nav/skeleton.png",
    },

    emer: {
      title: "Emerging Viruses",
      description: "Novel or newly recognized viral infections in humans.",
      icon: "/assets/nav/virus.png",
    },
    gen: {
      title: "Genetics",
      description:
        "Research involving DNA analysis to investigate the effectiveness and safety of new treatments or interventions.",
      icon: "/assets/nav/genetics.png",
    },
    uro: {
      title: "Urology",
      description:
        "The urologic system consisting of kidneys, ureters, bladder and urethra.",
      icon: "/assets/nav/urology.png",
    },
    viru: {
      title: "Virology",
      description:
        "The effectiveness of a vaccine or medical intervention in humans to treat viral infections.",
      icon: "/assets/nav/virology.png",
    },
    infla: {
      title: "Inflammation",
      description:
        "Inflammation of the human body caused by chronic illness and diseases.",
      icon: "/assets/nav/inflammation.png",
    },
    Hepa: {
      title: "Hepatology",
      description:
        "Liver, gallbladder, biliary tree, and pancreas aiming to evaluate medical, surgical, or behavioral interventions.",
      icon: "/assets/nav/hepatology.png",
    },
    geria: {
      title: "Geriatrics",
      description:
        "A focus on older adults and changes that are related to the aging process.",
      icon: "/assets/nav/geriatrics1.png",
    },
    gastro: {
      title: "Gastreoenterogy",
      description:
        "The gastrointestinal tract (GI tract) diseases, procedures or treatment outcomes.",
      icon: "/assets/nav/gastroenterology.png",
    },
    endo: {
      title: "Endocrinology",
      description:
        "Hormones, endocrine glands, and specific endocrine disorders like diabetes, Graves’ disease, and other autoimmune disorders.",
      icon: "/assets/nav/endocrinolgy.png",
    },
  };



  

  return (
    <div
      id="chat-section"
      className={`relative mt-16 w-screen  flex ${
        isTablet ? "flex-col" : "flex-col lg:flex-row "
      } justify-center lg:justify-start items-center lg:items-start px-4 sm:px-8 md:px-12 gap-8 lg:gap-45 `}
    >
      {/* LEFT SIDE CHAT */}
      <div className="flex flex-col gap-5 max-w-lg w-full md:translate-y-[-40px]">
        <ChatMessages visibleMessages={visibleMessages} />

        {/* DESKTOP DETAILS BOX */}
        {!isMobile && (
          <SystemDetailBox
            activeBody={activeBody}
            systemDetails={systemDetails}
          />
        )}
      </div>

      {/* BODY DESKTOP */}
      <BodyDesktop
        isMobile={isMobile}
        activeBody={activeBody}
        bodySystemsIds={bodySystemsIds}
        bodyImageMap={bodyImageMap}
        systemButtons={systemButtons}
        setActiveBody={setActiveBody}
        setIsManual={setIsManual}
      />

      {/* BODY MOBILE */}
      <BodyMobile
        isMobile={isMobile}
        activeBody={activeBody}
        setActiveBody={setActiveBody}
        setIsManual={setIsManual}
        systemButtons={systemButtons}
        bodySystemsIds={bodySystemsIds}
        bodyImageMap={bodyImageMap}
      />

      {/* MOBILE DETAILS BOX */}
      <MobileSystemDetailBox
        isMobile={isMobile}
        activeBody={activeBody}
        systemDetails={systemDetails}
      />

      <div className="pb-[120px] md:pb-[60px]"></div>
    </div>
  );
}
