import Link from "next/link";
import Image from "next/image";
import { SignUpForm } from "./components/signup-form";

export default function SignUpPage() {
  return (
    <>
      <div className="container relative h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-screen flex-col bg-muted p-[62px] text-white lg:flex">
          <div className="absolute inset-0 bg-black">
            <Image
              className="object-cover w-full h-full"
              src="/assets/images/auth_ill.png"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative z-20 flex items-center text-lg font-medium">
            <p className="self-center text-[36px] font-extrabold whitespace-nowrap">
              foodCare
            </p>
          </div>
          <div className="relative z-20 mt-auto mr-32">
            <h1 className="text-[36px] font-semibold leading-none mb-[8px]">
              Log in untuk membantu mereka
            </h1>
            <p className="text-[20px]">
              kamu cukup masukkan nomor ponsel atau email aja, kok.
            </p>
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-[20sp] font-semibold">
                &ldquo;Berbagi Makanan, Berbagi Harapan, Satu Hati&rdquo;
              </p>
              <footer className="text-sm">xyzuan</footer>
            </blockquote>
          </div>
        </div>
        <div className="flex h-[100%] bg-white rounded-[32px] z-10 md:ml-[-32px] px-[32px] lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[550px]">
            <div className="flex flex-col space-y-2 text-start ">
              <h1 className="text-primary text-[32px] font-bold">Buat akun</h1>
              <p>Masukkan email dan password untuk membuat akun</p>
            </div>
            <SignUpForm />
            <p className="text-center">
              Dengan login kamu menyetujui{" "}
              <Link href="/terms" className="text-primary">
                Syarat & Ketentuan
              </Link>{" "}
              dan{" "}
              <Link href="/privacy" className="text-primary">
                Kebijakan Privasi{" "}
              </Link>
              foodCare.
            </p>
            <p className="text-center">
              Sudah punya akun?{" "}
              <Link href="/auth/login" className="text-primary">
                Login aja
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
