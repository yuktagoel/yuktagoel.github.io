import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Box = styled(motion.li)`
  width: 16rem;
  height: 40vh;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  padding: 1.5rem 2rem;
  margin-right: 8rem;
  border-radius: 0 50px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.body};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    border: 1px solid ${(props) => props.theme.text};
  }
`;
const Title2 = styled.h3`
  color: ${"grey"};
`;

const Title = styled.h2`
  font-size: calc(1em + 0.5vw);
`;

const Description = styled.h2`
  font-size: calc(0.8em + 0.3vw);
  font-family: "Karla", sans-serif;
  font-weight: 500;
`;

const Date = styled.span`
  padding: 0.5rem 0;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
`;

// Framer motion configuration
const Item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

const Card = (props) => {
  const { id, name, name2, date, description1, description2 } = props.data;

  return (
    <Box key={id} variants={Item}>
      <Title>{name}</Title>
      <Title2>{name2}</Title2>
      <Description>{description1}</Description>
      <Description>{description2}</Description>
      {/* <Tags>
        {tags.map((t, id) => {
          return <Tag key={id}>{t}</Tag>;
        })}
      </Tags> */}
      <Footer>
        {/* <Link to={{pathname: `${demo}`}} target="_blank">
                    Visit
                </Link>
                <Git to={{pathname: `${github}`}} target="_blank">
                    <Github width={30} height={30} />
                </Git> */}
        <Date>{date}</Date>
      </Footer>
    </Box>
  );
};

export default Card;
