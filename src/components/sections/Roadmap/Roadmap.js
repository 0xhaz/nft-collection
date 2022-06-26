import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import DrawSvg from "../../DrawSvg";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

import { Section, Title, Container, SvgContainer, Items, Item, RoadMapItem} from './index'

const Roadmap = () => {
  const revealRefs = useRef([]);
  revealRefs.current = [];
  gsap.registerPlugin(ScrollTrigger);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useLayoutEffect(() => {
    let t1 = gsap.timeline();
    revealRefs.current.forEach((el, index) => {
      t1.fromTo(
        el.childNodes[0],
        {
          y: "0",
        },
        {
          y: "-30%",

          ScrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: "top center+=200px",
            end: "bottom center",
            scrub: true,
            // markers: true,
          },
        }
      );
    });

    return () => {};
  }, []);

  return (
    <Section id="roadmap">
      <Title>Roadmap</Title>
      <Container>
        <SvgContainer>
          <DrawSvg />
        </SvgContainer>
        <Items>
          <Item>&nbsp;</Item>
          <RoadMapItem
            addToRef={addToRefs}
            title="Grand Opening"
            subtext="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat"
          />
          <RoadMapItem
            addToRef={addToRefs}
            title="Great Benefits"
            subtext="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat."
          />
          <RoadMapItem
            addToRef={addToRefs}
            title="Early Access"
            subtext="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat."
          />
          <RoadMapItem
            addToRef={addToRefs}
            title="New Merch"
            subtext="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat."
          />
          <RoadMapItem
            addToRef={addToRefs}
            title="Holders Ranking"
            subtext="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat."
          />
        </Items>
      </Container>
    </Section>
  );
};

export default Roadmap;
