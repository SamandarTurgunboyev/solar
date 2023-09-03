import React, { useMemo, useState } from "react";
import Image from "next/image";
import { productsData } from "@/data/products";
import { ProductsFilter } from "@/ui";
import { useTranslation } from "next-i18next";

const Products = () => {
  const { t } = useTranslation("common");
  const [type, setType] = useState("all");
  const [product, setProduct] = useState(productsData);

  const filterProduct = () => {
    if (type == "all") {
      return product;
    }
    return product.filter((e) => e.type == type);
  };

  var filteredProduct = useMemo(filterProduct, [type, product]);

  return (
    <div className="custom-container py-8">
      <ProductsFilter value={type} setValue={setType} />
      <ul className="grid md:grid-cols-4 grid-cols-1 gap-6 mt-6">
        {filteredProduct.map((data) => {
          return (
            <li
              key={data.id}
              className="production-card overflow-hidden cursor-pointer relative w-full"
            >
              <Image
                src={data.photo}
                alt={t(data.name)}
                width={500}
                height={500}
                className="-z-[1] relative transition-all w-full h-full"
              />
              <div className="w-full bg-blue/[0.9] py-[15px] px-[10px] z-[1000] absolute bottom-0">
                <p className="uppercase font-barlowBold text-white text-[14px]">
                  {t(data.name)} {data.version}
                </p>
                <p className="uppercase font-barlowBold text-white text-[14px]">
                  {data.price} SUM
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Products;
