import { dbConnect, sendEmail } from "@/lib";
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

    await sendEmail({
      toEmail: "rajdilkhush0987654321@gmail.com",
      subject: "New Contact Added",
      emailBody: `
      <p>
        ${name} has added you to their contact list.
      </p>
        `,
    });

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
