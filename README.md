# BFHL REST API – Chitkara Qualifier 2026

This repository contains a **production-ready REST API** built for the **Chitkara University BFHL Qualifier 2026** evaluation.

The service exposes two public endpoints and supports **mathematical operations** along with **AI-powered single-word responses** using **Google Gemini**.

---

## APIs Implemented

### 1. GET /health

Used to verify service availability.

**Response format:**

```json
{
  "is_success": true,
  "official_email": "shubh3933.beai23@chitkara.edu.in"
}
```

---

### 2. POST /bfhl

Handles different operations based on the request key.

Each request **must contain exactly one key**.

---

## Supported Operations

| Key       | Input Type    | Output / Description              |
| --------- | ------------- | --------------------------------- |
| fibonacci | Integer       | Fibonacci series (N terms)        |
| prime     | Integer array | Prime numbers only                |
| lcm       | Integer array | Least Common Multiple             |
| hcf       | Integer array | Highest Common Factor             |
| AI        | String        | Single-word AI generated response |

---

## Response Structure

All successful responses follow this format:

```json
{
  "is_success": true,
  "official_email": "shubh3933.beai23@chitkara.edu.in",
  "data": ...
}
```

Invalid or malformed requests return appropriate HTTP status codes with `is_success` set to `false`.

---

## Request & Response Examples

### Fibonacci

**Request:**

```json
{ "fibonacci": 10 }
```

**Response:**

```json
{
  "is_success": true,
  "official_email": "shubh3933.beai23@chitkara.edu.in",
  "data": [0,1,1,2,3,5,8,13,21,34]
}
```

---

### Prime Numbers

**Request:**

```json
{ "prime": [15,17,19,21,23,24] }
```

**Response:**

```json
{
  "is_success": true,
  "official_email": "shubh3933.beai23@chitkara.edu.in",
  "data": [17,19,23]
}
```

---

### LCM

**Request:**

```json
{ "lcm": [8,14,20] }
```

**Response:**

```json
{
  "is_success": true,
  "official_email": "shubh3933.beai23@chitkara.edu.in",
  "data": 280
}
```

---

### HCF

**Request:**

```json
{ "hcf": [45,60,75] }
```

**Response:**

```json
{
  "is_success": true,
  "official_email": "shubh3933.beai23@chitkara.edu.in",
  "data": 15
}
```

---

### AI Query

**Request:**

```json
{ "AI": "What is the tallest mountain in the world?" }
```

**Response:**

```json
{
  "is_success": true,
  "official_email": "shubh3933.beai23@chitkara.edu.in",
  "data": "Everest"
}
```

If the AI service is unavailable, the API safely returns:

```json
"data": "UNKNOWN"
```

This ensures stability during edge-case or network failures.

---

## Validation & Error Handling

* Exactly **one valid key** per request is enforced
* Strict input type validation
* Proper HTTP status codes for errors
* Centralized error handling prevents server crashes

**Error response format:**

```json
{
  "is_success": false,
  "official_email": "shubh3933.beai23@chitkara.edu.in",
  "error": "Error message"
}
```

---

## Tech Stack

* Node.js
* Express.js
* Google Gemini API
* Render (Deployment)

---

## Base URL

```
https://bajaj-api-chitkara-university.onrender.com
```

---

## Environment Variables

Create a `.env` file:

```env
GEMINI_API_KEY=your_api_key_here
```

* API keys are securely injected at runtime
* No secrets are hardcoded or committed

---

## Run Locally

```bash
npm install
npm run dev
```

The server starts on the configured port.

---

## Author

**Shubh Jain**
📧 [shubh3933.beai23@chitkara.edu.in](mailto:shubh3933.beai23@chitkara.edu.in)

---

