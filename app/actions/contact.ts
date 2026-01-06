"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface ContactFormState {
  success: boolean;
  error: string | null;
  message: string | null;
}

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const company = formData.get("company") as string;
  const message = formData.get("message") as string;

  // Validation
  if (!name || name.trim().length < 2) {
    return {
      success: false,
      error: "name",
      message: null,
    };
  }

  if (!email || !email.includes("@")) {
    return {
      success: false,
      error: "email",
      message: null,
    };
  }

  if (!message || message.trim().length < 10) {
    return {
      success: false,
      error: "message",
      message: null,
    };
  }

  // Check if API key is configured
  if (!process.env.RESEND_API_KEY) {
    console.log("Contact form submission (Resend not configured):", {
      name,
      email,
      company,
      message,
    });
    // Still return success for demo purposes
    return {
      success: true,
      error: null,
      message: "received",
    };
  }

  try {
    await resend.emails.send({
      from: "Pi-North Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL || "contact@pi-north.com",
      replyTo: email,
      subject: `New Contact from ${name}${company ? ` (${company})` : ""}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    return {
      success: true,
      error: null,
      message: "sent",
    };
  } catch (error) {
    console.error("Failed to send email:", error);
    return {
      success: false,
      error: "server",
      message: null,
    };
  }
}
