"use server"

export async function submitDemoRequest(prevState: any, formData: FormData) {
  const name = formData.get("name")
  const email = formData.get("email")
  const company = formData.get("company")

  // Basic server-side validation
  if (!name || !email || !company) {
    return { message: "Please fill out all required fields.", success: false }
  }

  console.log("New Demo Request:")
  console.log({
    name,
    email,
    company,
    message: formData.get("message"),
  })

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // In a real application, you would integrate with your CRM or email service here.
  // For example: await sendEmail(...) or await addToCRM(...)

  return { message: "Request submitted successfully!", success: true }
}

export async function submitEarlyAccessRequest(prevState: any, formData: FormData) {
  const email = formData.get("email") as string

  // Basic email validation
  if (!email || !email.includes("@")) {
    return { message: "Please enter a valid email address.", success: false }
  }

  console.log("New Early Access Request:")
  console.log({ email })

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // In a real app, you'd add this email to a waitlist in your database or email service.
  // e.g., await addToWaitlist(email);

  return { message: "You're on the list! We'll be in touch.", success: true }
}
