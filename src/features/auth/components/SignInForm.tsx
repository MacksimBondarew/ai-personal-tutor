import authImage from "@/src/public/auth.png";
import Image from "next/image";

const SignInForm = () => {
    return <div className={"grid grid-cols-2"}>
        <div className={"flex justify-center items-center"}>
            <div>
                <h2 className={"font-medium text-3xl mb-1.5"}>Welcome back!</h2>
                <p className={"font-medium text-sm mb-14"}>Enter your Credentials to access your account</p>
            </div>
        </div>
        <Image src={authImage} alt={"authImage"} width={400} height={400} className={"w-full h-screen object-cover rounded-s-4xl"} dir="ltr"  />
    </div>
}

export  default  SignInForm;