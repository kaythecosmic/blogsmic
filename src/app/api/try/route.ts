import prismadb from "@/lib/prismadb";

export const GET = async (req: Request, res: Response) => {
  try {
    const prompts = await prismadb.blog.find();
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    console.log("Error: ", error);
    return new Response(
      JSON.stringify({ message: "Failed to fetch all prompts" }),
      { status: 500 }
    );
  }
};
