export const sendToDiscord = async (formData: { name: string; email: string; company: string; phone: string; message: string; budget: string }) => {
  const webhookUrl = 'https://discord.com/api/webhooks/1303081155511451658/G9iKeZQApLmtZGoTWQvfvV7bvpEeYzxIlpMHbZM3qTwXwiJW5nvgM3FT2kpATpFE5XFM';

  const content = `
    **Name:** ${formData.name}
    **Email:** ${formData.email}
    **Company:** ${formData.company}
    **Phone:** ${formData.phone}
    **Message:** ${formData.message}
    **Budget:** ${formData.budget}
  `;

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ content }),
  });

  if (response.status !== 200 && response.status !== 204) {
    const errorText = await response.text();
    console.error('Failed to send message to Discord:', response.status, errorText);
    throw new Error('Failed to send message to Discord');
  }

  return response.status === 204 ? {} : response.json();
};