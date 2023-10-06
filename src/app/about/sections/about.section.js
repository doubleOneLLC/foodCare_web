import React from "react";
import AboutItem from "../components/about-item";
import AboutHeader from "../components/about-header";

function AboutSection() {
  return (
    <>
      <AboutHeader />
      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-8">
          <AboutItem
            img="/assets/images/wallet_ill.png"
            title="Donasi dengan Mudah"
            summary="Anda dapat dengan mudah melakukan donasi dengan berbagai metode yang Anda inginkan. Dapat dilakukan dimana saja dan kapan saja"
          />
          <AboutItem
            img="/assets/images/bag_ill.png"
            title="Bantu Atasi Kelaparan Dunia"
            summary="Krisis pangan yang melanda berbagai belahan dunia dapat diatasi dengan cara yang cukup sederhana, dengan berdonasi makanan berlebih kepada yang membutuhkan"
          />
          <AboutItem
            img="/assets/images/maps_ill.png"
            title="Peduli Dengan Berbagi"
            summary="Indahnya berbagi untuk membantu mereka yang terdampak krisis pangan sebagai bentuk rasa kepedulian kepada sesama"
          />
        </div>
      </div>
    </>
  );
}

export default AboutSection;
