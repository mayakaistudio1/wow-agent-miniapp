import type { Express, Request, Response } from "express";
import { z } from "zod";

const tokenRequestSchema = z.object({
  language: z.string().default("ru"),
  context: z.string().optional(),
});

const startRequestSchema = z.object({
  session_token: z.string().min(1, "session_token is required"),
});

const stopRequestSchema = z.object({
  session_id: z.string().min(1, "session_id is required"),
  session_token: z.string().min(1, "session_token is required"),
});

const eventRequestSchema = z.object({
  session_token: z.string().min(1, "session_token is required"),
  event_type: z.string().min(1, "event_type is required"),
  data: z.any().optional(),
});

const transcriptParamsSchema = z.object({
  sessionId: z.string().min(1, "sessionId is required"),
});

const endSessionParamsSchema = z.object({
  id: z.string().min(1, "session id is required"),
});

const endSessionBodySchema = z.object({
  session_token: z.string().optional(),
});

const LIVEAVATAR_API_KEY = process.env.LIVEAVATAR_API_KEY;
const LIVEAVATAR_AVATAR_ID = process.env.LIVEAVATAR_AVATAR_ID || "9650a758-1085-4d49-8bf3-f347565ec229";
const LIVEAVATAR_VOICE_ID = process.env.LIVEAVATAR_VOICE_ID || "c23719ef-d070-42ee-9cd9-4b867c621671";
const LIVEAVATAR_CONTEXT_ID = process.env.LIVEAVATAR_CONTEXT_ID || "0af664ad-8b66-4f6e-91ab-3b3245d4d72d";
const LIVEAVATAR_BASE_URL = "https://api.liveavatar.com/v1";

export async function getSessionToken(language: string = "ru"): Promise<any> {
  if (!LIVEAVATAR_API_KEY) {
    throw new Error("Missing LIVEAVATAR_API_KEY in environment");
  }

  const payload = {
    mode: "FULL",
    avatar_id: LIVEAVATAR_AVATAR_ID,
    avatar_persona: {
      voice_id: LIVEAVATAR_VOICE_ID,
      context_id: LIVEAVATAR_CONTEXT_ID,
      language
    }
  };

  const response = await fetch(`${LIVEAVATAR_BASE_URL}/sessions/token`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-API-KEY": LIVEAVATAR_API_KEY
    },
    body: JSON.stringify(payload)
  });

  const text = await response.text();
  if (!response.ok) {
    throw new Error(`Token generation failed: ${response.status} - ${text}`);
  }

  const json = JSON.parse(text);
  return {
    session_id: json?.data?.session_id,
    session_token: json?.data?.session_token,
    raw: json
  };
}

export async function startSession(sessionToken: string): Promise<any> {
  const response = await fetch(`${LIVEAVATAR_BASE_URL}/sessions/start`, {
    method: "POST",
    headers: {
      "accept": "application/json",
      "authorization": `Bearer ${sessionToken}`
    }
  });

  const text = await response.text();
  if (!response.ok) {
    throw new Error(`Session start failed: ${response.status} - ${text}`);
  }

  return JSON.parse(text);
}

export async function stopSession(sessionId: string, sessionToken: string): Promise<any> {
  const response = await fetch(`${LIVEAVATAR_BASE_URL}/sessions/stop`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "accept": "application/json",
      "authorization": `Bearer ${sessionToken}`
    },
    body: JSON.stringify({ session_id: sessionId })
  });

  const text = await response.text();
  if (!response.ok) {
    throw new Error(`Session stop failed: ${response.status} - ${text}`);
  }

  return JSON.parse(text);
}

export async function getSessionTranscript(sessionId: string): Promise<any> {
  if (!LIVEAVATAR_API_KEY) {
    throw new Error("Missing LIVEAVATAR_API_KEY in environment");
  }

  const response = await fetch(`${LIVEAVATAR_BASE_URL}/sessions/${sessionId}/transcript`, {
    method: "GET",
    headers: {
      "accept": "application/json",
      "X-API-KEY": LIVEAVATAR_API_KEY
    }
  });

  const text = await response.text();
  if (!response.ok) {
    throw new Error(`Get transcript failed: ${response.status} - ${text}`);
  }

  return JSON.parse(text);
}

export async function sendEvent(sessionToken: string, eventType: string, data?: any): Promise<any> {
  const payload = {
    type: eventType,
    ...(data && { data })
  };

  const response = await fetch(`${LIVEAVATAR_BASE_URL}/sessions/event`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "accept": "application/json",
      "authorization": `Bearer ${sessionToken}`
    },
    body: JSON.stringify(payload)
  });

  const text = await response.text();
  if (!response.ok) {
    throw new Error(`Send event failed: ${response.status} - ${text}`);
  }

  return JSON.parse(text);
}

export function registerLiveAvatarRoutes(app: Express): void {
  app.post("/api/liveavatar/token", async (req: Request, res: Response) => {
    try {
      const validatedData = tokenRequestSchema.parse(req.body || {});
      const result = await getSessionToken(validatedData.language);
      res.status(200).json(result);
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid request data", details: error.errors });
      }
      console.error("Token generation error:", error);
      res.status(500).json({
        error: "Token generation failed",
        details: error?.message || String(error)
      });
    }
  });

  app.post("/api/liveavatar/start", async (req: Request, res: Response) => {
    try {
      const validatedData = startRequestSchema.parse(req.body || {});
      const result = await startSession(validatedData.session_token);
      res.status(200).json(result);
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid request data", details: error.errors });
      }
      console.error("Start session error:", error);
      res.status(500).json({
        error: "Session start failed",
        details: error?.message || String(error)
      });
    }
  });

  app.post("/api/liveavatar/stop", async (req: Request, res: Response) => {
    try {
      const validatedData = stopRequestSchema.parse(req.body || {});
      const result = await stopSession(validatedData.session_id, validatedData.session_token);
      res.status(200).json(result);
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid request data", details: error.errors });
      }
      console.error("Stop session error:", error);
      res.status(500).json({
        error: "Session stop failed",
        details: error?.message || String(error)
      });
    }
  });

  app.post("/api/liveavatar/event", async (req: Request, res: Response) => {
    try {
      const validatedData = eventRequestSchema.parse(req.body || {});
      const result = await sendEvent(validatedData.session_token, validatedData.event_type, validatedData.data);
      res.status(200).json(result);
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid request data", details: error.errors });
      }
      console.error("Send event error:", error);
      res.status(500).json({
        error: "Send event failed",
        details: error?.message || String(error)
      });
    }
  });

  app.get("/api/liveavatar/transcript/:sessionId", async (req: Request, res: Response) => {
    try {
      const validatedParams = transcriptParamsSchema.parse(req.params);
      const result = await getSessionTranscript(validatedParams.sessionId);
      res.status(200).json(result);
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid request data", details: error.errors });
      }
      console.error("Get transcript error:", error);
      res.status(500).json({
        error: "Get transcript failed",
        details: error?.message || String(error)
      });
    }
  });

  app.post("/api/liveavatar/sessions/:id/end", async (req: Request, res: Response) => {
    try {
      const validatedParams = endSessionParamsSchema.parse(req.params);
      const validatedBody = endSessionBodySchema.parse(req.body || {});
      
      let transcript = null;
      if (validatedBody.session_token) {
        try {
          transcript = await getSessionTranscript(validatedParams.id);
        } catch (e) {
          console.error("Failed to get transcript:", e);
        }
      }

      res.status(200).json({ ok: true, transcript });
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid request data", details: error.errors });
      }
      console.error("End session error:", error);
      res.status(500).json({
        error: "End session failed",
        details: error?.message || String(error)
      });
    }
  });
}
