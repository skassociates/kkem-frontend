/* eslint-disable @next/next/no-async-client-component */
"use client";
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import { loginValidationSchema } from "@/schema/validation";
import { auth } from "@/services/api/login";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Page = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      dwmsid: "",
      email: "",
    },
    resolver: yupResolver(loginValidationSchema),
  });
  const router = useRouter();
  const onLogin = (data: any) => {
    const get = toast.loading("Checking Credentials...");
    auth
      .studentLogin(data)
      .then((response) => {
        toast.dismiss(get);
        localStorage.AUTH_TOKEN = response.data.token;
        router.push("/student/instructions");
      })
      .catch((error) => {
        console.log(error);
        toast.update(get, {
          render: error?.response.data.message,
          type: "error",
          isLoading: false,
          autoClose: 1000,
        });
      });
  };

  return (
    <div className="h-screen w-full bg-[#E1E1FF] flex flex-col justify-center items-center">
      <div className="md:w-1/3">
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputField
              label="DWMS ID"
              required
              error={errors?.dwmsid?.message}
              onChange={onChange}
            />
          )}
          name="dwmsid"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputField
              label="Email id"
              required
              error={errors?.email?.message}
              onChange={onChange}
            />
          )}
          name="email"
        />

        <div className="flex justify-center">
          <Button
            label="Login"
            customStyle={"min-w-60"}
            onPress={handleSubmit(onLogin)}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
