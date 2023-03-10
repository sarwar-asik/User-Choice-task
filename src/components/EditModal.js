import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../loader/Loader";

const EditModal = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [loading, setLoader] = useState(true);

  //   console.log("user Data", state);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [update, setUpdate] = useState(null);

  const onSubmit = (user) => {
    // console.log(user);
    fetch(
      `     https://task-server-ebon.vercel.app/EditUser?id=${state?._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast(` Edited ${user.sector}`);
        reset();
        setUpdate(data);
        navigate("/user");
      });
  };

  const [sectors, setSectors] = useState([]);
  useEffect(() => {
    axios
      .get(`     https://task-server-ebon.vercel.app/sectors`)
      .then((data) => {
        //   console.log(data.data);
        setSectors(data.data);
        setLoader(false);
      });
  }, [update]);

  return (
    <div className="sm:max-w-full md:max-w-[80%] lg:max-w-[60%] shadow-2xl bg-slate-400 bg-opacity-[0.4] text-blue-300 py-10 px-10 rounded-[10px]  mx-auto card">
      {loading && <Loader />}
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="block  mb-2 lg:text-3xl sm:text-xl md:text-2xl font-mono font-semibold  dark:text-white">
          Your Name
        </label>
        <input
          type="text"
          placeholder="Your Name"
          defaultValue={state?.name}
          {...register("name", { required: true, maxLength: 30 })}
          className=" border text-slate-500 border-gray-300 w-full my-2 rounded-[3px]"
        />
        {errors.name?.type === "required" && (
          <p role="alert" className="text-red-500 font-mono">
            Name is required
          </p>
        )}

        <label className="block mb-2 mt-5 lg:text-3xl sm:text-xl md:text-2xl font-semibold font-mono dark:text-white">
          Select a sector
        </label>

        <select
          {...register("sector", { required: true })}
          className="overflow-a text-slate-500 w-full appearance-none mt-2  "
          multiple=""
          size="15"
        >
          <option
            value={state?.sector}
            className="bg-blue-400 text-white text-center"
          >
            Selected &nbsp; {state?.sector}
          </option>
          <option value={sectors?.[0]?.sector}> {sectors?.[0]?.sector}</option>
          {sectors[0]?.options?.map((child) => {
            const { name } = child;

            return <option value={name}> &nbsp; &nbsp; {name} </option>;
          })}

          <option value={sectors?.[1]?.sector}> {sectors?.[1]?.sector}</option>
          {sectors[1]?.options?.map((child) => {
            const { name } = child;

            return <option value={name}> &nbsp; {name} </option>;
          })}

          <option value={sectors?.[2]?.sector}> {sectors?.[2]?.sector}</option>
          {sectors[2]?.options?.map((child) => {
            const { name } = child;

            return <option value={name}> &nbsp; {name} </option>;
          })}
        </select>

        <div className="mt-5 flex items-center  gap-3">
          <input
            type="checkbox"
            value="agree to terms"
            {...register("terms", { required: true })}
            className=""
          />
          <label className=" text-lg font-semibold font-mono dark:text-white">
            Agree to Terms and Condition
          </label>
        </div>

        <input
          type="submit"
          className="bg-blue-500 block py-3  px-3 rounded-[5px] mt-5 font-bold text-xl text-white"
          value={"Update"}
        />
      </form>
    </div>
  );
};

export default EditModal;
