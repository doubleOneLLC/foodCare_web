"use client";

// MaterialUI
import { Container } from "@mui/material";

// React
import React from "react";

// Utils
import useIsMobile from "@/app/utils/isMobile.hook";

function HomePage() {
  const isMobile = useIsMobile();
  React.useEffect(() => {
    console.log("isMobile: ", isMobile);
  }, [isMobile]);

  return (
    <Container>
      <div>Home</div>
    </Container>
  );
}

export default HomePage;
