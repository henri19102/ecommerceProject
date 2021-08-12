/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Card, CardContent } from "@material-ui/core";
import { useStyles } from "../styles/styles";
import Highlighted from "./Highlighted";

const Frontpage = () => {
  const classes = useStyles();

  return (
    <div>
      <Highlighted />
      <Card className={classes.card1}>
        <CardContent>
          <h2 style={{ fontWeight: "bold" }}>
            Welcome to my ecommerce test shop!
          </h2>
          <p>
            Thanks for taking the time to consider our proposal. We propose
            building an immersive installation in the Lorem Ipsum Store Front.
            As a Boston-based artist collective we’ve worked to invigorate
            spaces throughout the east coast and want to offer a permanent store
            front installation in our own community.
          </p>
          <p>
            Lorem Ipsum is a community oriented book store in Inman Square
            (Cambridge, MA) that hosts a variety of events from evening in-store
            concerts, free classes and workshops, gallery exhibits, and they
            also offer the largest Zine Libary in the New England. Lorem Ipsum
            asked us for help with their store front display and we would love
            to donate our installation prowess. As a collective we see the
            importance and power of collaboration to make amazing artistic
            endeavors come together. A one-of-a-kind store front installation
            would help bring attention to such a positive community center in
            Inman Square.
          </p>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Frontpage;
