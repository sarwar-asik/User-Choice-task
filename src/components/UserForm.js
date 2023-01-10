import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (user) => {
    console.log(user);
    fetch(`http://localhost:7000/userInfo`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast(` Added ${user.sector}`);
        reset();
      });
  };

  const [sectors, setSectors] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:7000/sectors`).then((data) => {
      console.log(data.data);
      setSectors(data.data);
    });
  }, []);

  return (
    <div className="max-w-[500px] shadow-2xl bg-slate-400 bg-opacity-[0.4] text-blue-300 py-10 px-10 rounded-[10px]  mx-auto card">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="block  mb-2 text-3xl font-mono font-semibold  dark:text-white">
          Your Name
        </label>
        <input
          type="text"
          placeholder="Your Name"
          {...register("name", { required: true, maxLength: 30 })}
          className=" border text-slate-500 border-gray-300 w-full my-2 rounded-[3px]"
        />
        {errors.name?.type === "required" && (
          <p role="alert" className="text-red-500 font-mono">
            Name is required
          </p>
        )}

        <label className="block mb-2 mt-5 text-3xl font-semibold font-mono dark:text-white">
          Select a sector
        </label>

        <select
          {...register("sector", { required: true })}
          className="overflow-a text-slate-500 w-full appearance-none mt-2  "
          multiple=""
          size="15"
        >
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
        />
      </form>
    </div>
  );
};

export default UserForm;
