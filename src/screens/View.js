import React, { useState, useEffect } from "react";
// import axios from "axios";
import { useDispatch } from "react-redux";
import { get_product } from "../redux/actions";

const View = () => {
  const [product, setProduct] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_product("6781"))
      .then((response) => {
        setProduct(response.payload);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch]);

  return (
    <div className="bg-sky-100 p-20">
      {product ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Section name, img, type, description */}
          <section className="bg-white p-6 rounded-lg shadow-2xl">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <img src={product.picture} alt="" className="mb-4 rounded-lg" />
            <h5 className="text-lg font-medium text-gray-600 mb-2">
              {product.type.name}
            </h5>
            <p className="text-base text-gray-700 mb-4">
              {product.description}
            </p>
          </section>

          {/* Details Section: Technologies/Categories, Business Models, TRL, Investment Effort/Cost */}
          <section className="bg-white p-6 rounded-lg shadow-2xl">
            <div>
              <div className="mb-4">
                <p className="text-lg font-medium text-gray-900 mb-2">
                  Category:
                </p>
                {product.categories.map((cat) => {
                  return (
                    <li key={cat.id} className="text-base text-gray-900">
                      {cat.name}
                    </li>
                  );
                })}
              </div>
              <div className="mb-4">
                <p className="text-lg font-medium text-gray-900 mb-2">
                  Business Models:
                </p>
                {product.businessModels.map((cat) => {
                  return (
                    <li key={cat.id} className="text-base text-gray-700">
                      {cat.name}
                    </li>
                  );
                })}
              </div>
              <p className="text-lg font-medium text-gray-900 mb-2">TRL:</p>
              <p className="text-base text-gray-700 mb-4">{product.trl.name}</p>
              <p className="text-lg font-medium text-gray-900 mb-2">
                Investment Effort:
              </p>
              <p className="text-base text-gray-700 mb-0">
                {product.investmentEffort}
              </p>
              {/* Video */}
              <section className="bg-white p-6 rounded-lg ">
                <iframe
                  width="400"
                  height="315"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                  className="rounded-lg"
                ></iframe>
              </section>

              {/* User info */}
              <section className="bg-sky-100 p-6 shadow-2xl rounded-lg">
                <div className="h-full flex items-center   mb-4">
                  <img
                    src={product.user.profilePicture}
                    alt="user-pic"
                    className="rounded-full w-16 h-16 mr-4"
                  />
                  <div>
                    <p className="text-lg font-bold text-gray-800">
                      {product.user.firstName + " " + product.user.lastName}
                    </p>
                    <p className="text-base text-gray-700">
                      {product.user.email}
                    </p>
                    <p className="text-base text-gray-700">
                      {product.user.position}
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </section>

          {/* Map */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default View;
