import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "../shared/schema";
import { z } from "zod";

// Function to send message to Telegram
async function sendToTelegram(name: string, email: string, message: string) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    throw new Error('Telegram credentials not configured');
  }

  const telegramMessage = `
🌟 *New Portfolio Contact Message*

👤 *Name:* ${name}
📧 *Email:* ${email}

💬 *Message:*
${message}

---
_Sent from Yashwanth's Portfolio Website_
  `;

  const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: telegramMessage,
      parse_mode: 'Markdown',
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to send Telegram message: ${error}`);
  }

  return await response.json();
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body
      const result = contactFormSchema.safeParse(req.body);
      
      if (!result.success) {
        return res.status(400).json({
          error: "Validation failed",
          details: result.error.errors
        });
      }

      const { name, email, message } = result.data;

      // Send message to Telegram
      await sendToTelegram(name, email, message);

      res.json({ 
        success: true, 
        message: "Your message has been sent successfully!" 
      });

    } catch (error) {
      console.error('Contact form error:', error);
      res.status(500).json({ 
        error: "Failed to send message. Please try again later." 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
