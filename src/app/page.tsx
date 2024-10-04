import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default async function Home() {
  return (
    <div className="w-screen, min-h-screen bg-gradient-to-b from-gray-400 via-gray-400 to-blue-800" >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center text-center">
            <div className="flex items-center">
                <h1 className="mr-3 text-5xl font-semibold" >AI PFD Reader</h1>
                <SignedIn>
                  <UserButton />
                </SignedIn>
            </div>
          <SignedIn>
            <div className="flex items-center mt-4">
              <Button>Read a PDF</Button>
            </div>
          </SignedIn>
          <SignedOut>
            <div className="flex items-center mt-4">
              <p className="max-w-xs mt-2 text-lg text-slate-800">
                Join the AI PDF Reader community to start reading PDFs with help of AI.
              </p>
            </div>
            <Button asChild className="mt-5">
              <SignInButton />
            </Button>
          </SignedOut>
        </div>
      </div>
    </div>
  );
}
