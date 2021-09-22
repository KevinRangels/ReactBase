import React from "react";
import { TopFeaturedProducts } from "../../components/Home/TopFeaturedProducts";
import { Categories } from "../../components/UI/Categories";
import { MainBanner } from "../../components/UI/MainBanner";
import { BestValuesOfferts } from "../../components/Home/BestValuesOfferts";
import { AddedNewProducts } from "../../components/Home/AddedNewProducts";

export const HomeScreen = () => {
  return (
    <>
      <MainBanner />
      <Categories />
      <TopFeaturedProducts />
      <BestValuesOfferts />
      <AddedNewProducts />
    </>
  );
};
