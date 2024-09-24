"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LoginPage = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  const router = useRouter();

  useEffect(() => {
    const role = user?.publicMetadata.role;

    if (role) {
      router.push(`/${role}`);
    }
  }, [user, router]);

  return (
    <>
    <div className="flex h-full content-center items-center justify-center p-6 bg-blue-400 my-auto">
      <div className="">
      {/* <Image src="/building.jpg" alt="" width={360} height={360} className="rounded-md" /> */}
      </div>
      <div className="flex items-center justify-center bg-lamaSkyLight w-[100px]">
      {/* <div className="h-screen flex items-center justify-center bg-lamaSkyLight"> */}
        <SignIn.Root>
          <SignIn.Step
            name="start"
            className="bg-white p-12 rounded-md shadow-2xl flex flex-col gap-2"
          >
            <h1 className="text-xl text-[#003B65] font-bold flex items-center gap-2">
              <Image src="/highkclass_logo.png" alt="" width={24} height={24} className="rounded-md" />
                HighKlass Schools
            </h1>
            <h2 className="">Sign in to your account</h2>
            <Clerk.GlobalError className="text-sm text-red-400" />
            <Clerk.Field name="identifier" className="flex flex-col gap-2">
              <Clerk.Label className="text-xs text-gray-500">
                Username
              </Clerk.Label>
              <Clerk.Input
                type="text"
                required
                className="p-2 bg-transparent outline-none rounded-md ring-1 ring-gray-300"
              />
              <Clerk.FieldError className="text-xs text-red-400" />
            </Clerk.Field>
            <Clerk.Field name="password" className="flex flex-col gap-2">
              <Clerk.Label className="text-xs text-gray-500">
                Password
              </Clerk.Label>
              <Clerk.Input
                type="password"
                required
                className="p-2 outline-none rounded-md ring-1 ring-gray-300"
              />
              <Clerk.FieldError className="text-xs text-red-400" />
            </Clerk.Field>
            <SignIn.Action
              submit
              className="bg-blue-500 text-white my-1 rounded-md text-sm p-[10px]"
            >
              Sign In
            </SignIn.Action>
          </SignIn.Step>
        </SignIn.Root>
      </div>
    </div>
    </>
  );
};

export default LoginPage;
