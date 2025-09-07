# 📱 Campus Safety App (Prototype)

## 🎯 Track 2: Campus Management

---

## 🔹 Overview
Campus safety is a critical concern for students, staff, and faculty, especially during late hours or in isolated areas.  
This project proposes a **Campus Safety Mobile Application** — a one-stop platform for emergencies, real-time alerts, and safety resources.

This repository contains the **prototype design** built using [Figma](https://decal-bliss-20129420.figma.site/).

---

## 🔹 Problem Statement
Current campus safety systems face challenges such as:
- Limited **real-time response**
- Few options for students to **report or share emergencies quickly**
- Lack of **centralized safety resources** in one place

This app addresses these gaps with a mobile-first solution.

---

## 🔹 Features (Prototype Phase)
- **Home Page**: SOS emergency button, campus map (search & share location)  
- **Report Page**: Report incidents with details/photos, track status updates  
- **First Aid**: Quick step-by-step first aid guides  
- **Campus Status**: Live campus-wide alerts (e.g., flood, haze, power outage)  
- **Settings**: Manage personal info & emergency contacts  

---

## 🔹 Future Enhancements
- **AI Call** – Pretend call simulation for safety (e.g., when walking alone)  
  - *Idea*: AI-generated voices + scripted dialogues to simulate real phone calls.  
- **Auto Call** – Automated call to campus security with GPS location  
  - *Idea*: Telephony APIs (e.g., Twilio, Vonage) to send voice calls/SMS alerts.  

---

## 🔹 Tech Stack

### 🟢 Current Prototype (Built in Figma)
- **Design & Prototyping** → Figma (UI/UX, clickable prototype)  
- **Hosting (Prototype)** → Figma site link for presentation/demo  

---

### 🟢 Planned Implementation
- **Frontend** → React Native (cross-platform mobile app)  
- **Backend** → Supabase (authentication, user database, incident reports)  
- **Maps** → Google Maps API (search, sharing, GPS tracking)  
- **Push Notifications** → Firebase Cloud Messaging (free)  

---

### 🟢 Future Enhancements (AI Call & Auto Call)
**AI Call (Fake Conversation for Safety)**  
- Google Cloud Text-to-Speech (free tier: 4M chars/month for 12 months)  
- Alternatives: OpenAI TTS, Coqui TTS (open-source, local, free)  

**Auto Call (Emergency Voice Call & SMS Alerts)**  
- Twilio (trial + pay-per-use: ~$0.01/min calls, ~$0.0075/SMS)  
- Alternative: Vonage API (similar pricing)  
- Backup: Firebase Cloud Messaging (push alerts, free)  

---

## 🔹 Impact
- Faster emergency response  
- Increased student confidence and safety  
- Enables authorities to monitor and act proactively  

---

## 🔹 How to View Prototype
🔗 [Figma Prototype Link](https://decal-bliss-20129420.figma.site/)

1. Open the link above  
2. Navigate through interactive screens  
3. Explore **Home, Report, First Aid, Status, and Settings** pages  

---


