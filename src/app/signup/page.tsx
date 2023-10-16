/* eslint-disable @next/next/no-img-element */
// import loginImage from "@/assets/images/login-image.jpg";
"use client";
import Link from "next/link";
import { Oswald } from "next/font/google";
import SignupForm from "@/components/signup/SignupForm";
import { useRouter } from "next/navigation";
import { useUserSignupMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/services/auth.service";

const oswald = Oswald({ style: "normal", weight: "600", subsets: ["latin"] });

const SignupPage = () => {
  const [userSignup] = useUserSignupMutation();
  const router = useRouter();

  const handleSignupSubmit = async (data: any) => {
    try {
      const res = await userSignup({ ...data }).unwrap();
      // console.log(res);
      if (res?.accessToken) {
        router.push("/profile");
        // message.success("User logged in successfully!");
        storeUserInfo({ accessToken: res?.accessToken });
      }
      // console.log(res);
    } catch (err: any) {
      console.error(err.message);
    }
  };
  return (
    <div className="flex flex-row justify-center items-center h-screen gap-10 overflow-hidden">
      <div className="w-1/2 hidden lg:block">
        <img src="" className="h-screen w-full object-cover" alt="" />
      </div>
      <div className="lg:w-1/2 flex flex-col justify-center items-center h-full px-5 lg:px-0">
        <section className="pb-10 text-center">
          {/* <div>Logo</div> */}
          <Link
            href="/"
            className={`text-3xl font-semibold cursor-pointer text-primary ${oswald.className}`}
          >
            Lorry Lagbe
          </Link>
        </section>
        <section className="mb-10">
          <div className="bg-white p-6 rounded shadow">
            <SignupForm isLoading={false} onSubmit={handleSignupSubmit} />
            <p className="text-center mt-5 text-sm text-slate-700">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-primary_dark underline focus:outline-none ml-2"
              >
                Login
              </Link>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SignupPage;