# 📱 Campus Safety App (Prototype)

## 🎯 Track 2: Campus Management

---

## 🔹 Overview
Campus safety is a growing concern for students, staff, and faculty, especially during late hours or in isolated campus areas.  
This project proposes a **Campus Safety Mobile Application** that provides a one-stop platform for emergencies, real-time alerts, and safety resources.

This repository contains the **prototype design** built using [Figma](https://decal-bliss-20129420.figma.site/).

---

## 🔹 Problem Statement
Current campus safety infrastructure lacks:

- Comprehensive **real-time response**
- Easy ways for students to **report and share emergencies**
- Centralized **safety resources** in one app

This app aims to fill these gaps by offering a mobile-first safety solution.

---

## 🔹 Features (Prototype Phase)
- **Home Page**  
  - SOS Emergency Button  
  - Campus Map (search & share location)  

- **Report Page**  
  - Report incidents with details/photos  
  - Track incident status updates  

- **First Aid**  
  - Quick step-by-step first aid guides  

- **Sensor / Campus Status Overview**  
  - Live campus-wide alerts (e.g., flood, haze, power outage)  

- **Settings**  
  - Manage personal information & emergency contacts  

---

## 🔹 Future Enhancements
- **AI Call** → Pretend call simulation for safety (e.g., when walking alone)
  -> Tech Idea: AI voice generation (e.g., Google Cloud Text-to-Speech, OpenAI TTS) + scripted dialogues to simulate a real phone call.
- **Auto Call** → Automatic robotic call to campus security with GPS location
  -> Tech Idea: Telephony API (e.g., Twilio, Vonage) to send automated voice calls/SMS with real-time GPS data from the app.

---

## 🔹 Tech Stack

### 🟢 Current Prototype (Built in Figma)
- **Design & Prototyping** → Figma (UI/UX, clickable prototype)  
- **Hosting (Prototype)** → Figma site link for presentation/demo  

---

### 🟢 Planned Implementation (Feasible Build)
- **Frontend** → React Native (cross-platform mobile app)  
- **Backend** → Supabase (authentication, user database, incident reports storage)  
- **Maps** → Google Maps API (location search, location sharing, GPS tracking)  
- **Push Notifications** → Firebase Cloud Messaging (free)  

---

### 🟢 Future Enhancements (AI Call & Auto Call)

**AI Call (Fake Conversation for Safety)**  
- Google Cloud Text-to-Speech → free tier (4M characters/month for 12 months)  
- Alternative: OpenAI TTS or Coqui TTS (open-source, free, local)  

**Auto Call (Emergency Voice Call & SMS Alerts)**  
- Twilio → free trial + pay-per-use (~$0.01/min for calls, ~$0.0075 per SMS)  
- Alternative: Vonage API (similar pricing)  
- Backup for notifications: Firebase Cloud Messaging (free for push alerts)  


---

## 🔹 Impact
- Faster response in emergencies  
- Improved feeling of safety on campus  
- Helps authorities monitor and respond proactively  

---

## 🔹 How to View Prototype
🔗 [Figma Prototype Link](https://decal-bliss-20129420.figma.site/)

1. Click the link above  
2. Navigate through the interactive screens  
3. Explore **Home, Report, First Aid, Sensor, and Settings** pages  

---

