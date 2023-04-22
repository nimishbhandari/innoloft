import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { get_product, update_product } from "../redux/actions";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const View = () => {
  const [product, setProduct] = useState(null);
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_product("6781"))
      .then((response) => {
        setProduct(response.payload);
        setDescription(response.payload.description);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch]);

  const clickHandler = () => {
    dispatch(update_product("6781"));
    console.log("clicked");
    alert("response accepted. This api wont accept PUT request");
  };

  return (
    <div className="h-screen bg-sky-100 p-20">
      {product ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Section name, img, type, description */}
          <section className="bg-white p-6 rounded-lg shadow-2xl">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <h5 className="text-lg font-medium text-gray-600 mb-2">
              {product.type.name}
            </h5>
            <Editor
              //   editorState={editorState}
              //   onEditorStateChange={setEditorState}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
            />
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
            </div>
          </section>
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={() => {
              clickHandler();
            }}
          >
            Submit
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default View;
