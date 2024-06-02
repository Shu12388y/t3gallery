"use client"

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { UploadButton } from "../util/uploadthing";
import { useRouter } from "next/navigation";

function NavBar() {
    const Router = useRouter()
    return (
        <>
            <nav className="flex flex-1 items-center justify-between text-xl p-10">
                <div>Gallery</div>
                <div>
                    <SignedOut>
                        <SignInButton />

                    </SignedOut>

                    <SignedIn>
                        <UploadButton endpoint="imageUploader" onClientUploadComplete={()=>{
                            Router.refresh();
                        }}/>
                        <UserButton />
                    </SignedIn>
                </div>
            </nav>
        </>
    )
}


export default NavBar