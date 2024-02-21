import { Dashboard, SignIn } from "@/components";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

const page = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  if (!session?.user) {
    // If there's no session, render the sign-in page
    return <SignIn />;
  } else if (session.user.roles === "ADMIN") {
    // If the user is an admin, render the dashboard
    return <Dashboard />;
  } else {
    // If the user is not an admin, render a message or a restricted access page
    return (
      <p className="flex justify-center items-center text-5xl h-screen font-semibold text-black-100">
        You do not have sufficient privileges to access the dashboard.
      </p>
    );
  }
};

export default page;
