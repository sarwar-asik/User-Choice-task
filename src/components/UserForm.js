import React from "react";
import { useForm } from "react-hook-form";

const UserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-[500px] shadow-2xl bg-blue-100 bg-opacity-[0.1] text-slate-200 py-10 px-10 rounded-[10px]  mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label
          for="name"
          className="block  mb-2 text-3xl font-mono font-semibold  dark:text-white"
        >
          Your Name
        </label>

        <input
          type="text"
          placeholder="Your Name"
          {...register("name", { required: true, maxLength: 30 })}
          className=" border text-slate-500 border-gray-300 w-full my-2 rounded-[3px]"
        />
        {errors.name?.type === "required" && (
          <p role="alert" className="text-red-500">
            Name is required
          </p>
        )}

        <label
          for="sector"
          className="block mb-2 mt-5 text-3xl font-semibold font-serif dark:text-white"
        >
          Select a sector
        </label>

        <select
          {...register("sector", { required: true })}
          className="overflow-aut text-slate-500 w-full appearance-none mt-2 h-[100px] "
        >
          <option value="Manufacturing">Manufacturing</option>
          <option value="Furniture">Furniture</option>
          <option value="Machinery">Machinery</option>
          <option value="Other">Other</option>
        </select>
        <div className="mt-5 flex items-center  gap-3">
          <input
            type="checkbox"
            value="agree to terms"
            {...register("terms", { required: true })}
            className=""
          />
          <label
            for="name"
            class=" text-lg font-semibold font-mono dark:text-white"
          >
            Agree to Terms and Condition
          </label>
        </div>

        <input
          type="submit"
          className="bg-blue-500 block py-3  px-3 rounded-[5px] mt-5 font-bold text-xl"
        />
      </form>
    </div>
  );
};

export default UserForm;
