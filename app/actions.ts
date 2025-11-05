"use server"

// Helper function for demo request
export async function submitDemoRequest(prevState: any, formData: FormData) {
  const name = formData.get("name")
  const email = formData.get("email")
  const company = formData.get("company")
  const message = formData.get("message")

  // Server-side validation
  if (!name || !email || !company) {
    return { message: "Please fill out all required fields.", success: false }
  }

  // --- START OF CHANGES ---

  // 1. Get your Formspree endpoint URL from your Formspree dashboard.
  // BEST PRACTICE: Store this in an environment variable.
  const formspreeEndpoint = process.env.FORMSPREE_DEMO_ENDPOINT

  if (!formspreeEndpoint) {
    // This will help you debug if you forget to set the variable
    return { 
      message: "Server configuration error. Form endpoint is missing.", 
      success: false 
    }
  }

  try {
    // 2. Send the data to Formspree
    const response = await fetch(formspreeEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json", // Formspree recommends this
      },
      body: JSON.stringify({
        name,
        email,
        company,
        message,
      }),
    })

    // 3. Check if Formspree accepted the submission
    if (response.ok) {
      return { message: "Request submitted successfully!", success: true }
    } else {
      // If Formspree returned an error
      return { message: "Form submission failed. Please try again.", success: false }
    }
  } catch (error) {
    // 4. Catch any network or other errors
    console.error("Error submitting to Formspree:", error)
    return { message: "An error occurred. Please try again later.", success: false }
  }
  
  // --- END OF CHANGES ---
}

// Helper function for early access request
export async function submitEarlyAccessRequest(prevState: any, formData: FormData) {
  const email = formData.get("email") as string

  if (!email || !email.includes("@")) {
    return { message: "Please enter a valid email address.", success: false }
  }
  
  // --- APPLY SIMILAR CHANGES HERE ---
  
  // 1. Get your *other* Formspree endpoint URL (for the early access form)
  const formspreeEndpoint = process.env.FORMSPREE_EARLY_ACCESS_ENDPOINT

  if (!formspreeEndpoint) {
    return { 
      message: "Server configuration error. Form endpoint is missing.", 
      success: false 
    }
  }

  try {
    // 2. Send the data to Formspree
    const response = await fetch(formspreeEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    })

    // 3. Check if Formspree accepted the submission
    if (response.ok) {
      return { message: "You're on the list! We'll be in touch.", success: true }
    } else {
      return { message: "Form submission failed. Please try again.", success: false }
    }
  } catch (error) {
    // 4. Catch any network or other errors
    console.error("Error submitting to Formspree:", error)
    return { message: "An error occurred. Please try again later.", success: false }
  }
}