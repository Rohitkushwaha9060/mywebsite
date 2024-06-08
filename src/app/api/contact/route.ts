import { dbConnect } from "@/lib";
import { Contact } from "@/model";

export async function POST(req: Request) {
  await dbConnect();
  const { name, email, phone, message } = await req.json();

  if (!name || !email || !phone || !message)
    return Response.json(
      { success: false, message: "Missing required fields" },
      { status: 400 }
    );

  try {
    const contact = new Contact({
      name: name,
      email: email,
      phone: phone,
      message: message,
    });
    await contact.save();
    return Response.json(
      { success: true, message: "Contact added" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return Response.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}
