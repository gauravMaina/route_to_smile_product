import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
const ProductModal = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const location = useLocation();
  const [item] = useState(location?.state?.item ?? "");

  useEffect(() => {
    if (item) {
      setValue("title", item?.title);
      setValue("price", item?.price);
      setValue("description", item?.description);
    }
  }, []);
  const navigate = useNavigate();
  return (
    <>
      <div
        className=" m-4"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                New Product
              </h5>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <label for="recipient-name" className="col-form-label">
                    Title:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("title", {
                      required: {
                        value: true,
                        message: "Please enter title."
                      },
                      minLength: {
                        value: 5,
                        message: "Minimum length must be 5."
                      }
                    })}
                  />
                  <small className="text-danger">
                    {errors?.title && errors.title.message}
                  </small>
                </div>
                <div className="form-group">
                  <label for="recipient-name" className="col-form-label">
                    Price:
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    {...register("price", {
                      required: {
                        value: true,
                        message: "Please enter price."
                      },
                      validate: (val) => {
                        if (val < 0) return "Price must be greater than 0.";
                      }
                    })}
                  />
                  <small className="text-danger">
                    {errors?.title && errors.title.message}
                  </small>
                </div>
                <div className="form-group">
                  <label for="message-text" className="col-form-label">
                    Description:
                  </label>
                  <textarea
                    className="form-control"
                    {...register("description", {
                      required: {
                        value: true,
                        message: "Please enter description."
                      },
                      minLength: {
                        value: 10,
                        message: "Minimum length must be 10."
                      }
                    })}
                  ></textarea>
                  <small className="text-danger">
                    {errors?.description && errors.description.message}
                  </small>
                </div>
              </form>
            </div>
            <div className="d-flex p-4">
              <button
                type="button"
                className="btn btn-secondary m-4"
                data-dismiss="modal"
                onClick={() => navigate(-1)}
              >
                Back
              </button>
              <button
                type="submit"
                className="btn btn-primary m-4"
                onClick={handleSubmit(onSubmit)}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductModal;
