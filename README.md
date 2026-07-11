
# WhatsApp Inbox Viewer

<div align="center">

[![GitHub](https://img.shields.io/badge/GitHub-mhhridoy7907-blue?logo=github)](https://github.com/mhhridoy7907)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)
[![Version](https://img.shields.io/badge/Version-2.0-blue)](https://github.com/mhhridoy7907)
![Status](https://img.shields.io/badge/Status-Active-brightgreen)

A modern, lightweight WhatsApp chat viewer that transforms exported `.txt` chat files into an elegant, native WhatsApp-style interface. Built with vanilla HTML, CSS, and JavaScript for instant, browser-based chat visualization.

[Live Demo](https://chatviewer-2d185.web.app/) • [GitHub](https://github.com/mhhridoy7907) • [Report Bug](https://github.com/mhhridoy7907/issues)

</div>

---

## 📸 Screenshots

### Main Interface
![WhatsApp Chat Viewer Preview](Code/wp.png)
*WhatsApp-style chat interface with message bubbles*

### Recent Features
![Dark Mode & Filters](Code/up1.png)
*Dark/Light mode toggle and message filtering*

![Search & Statistics](Code/up2.png)
*Advanced search highlighting and chat statistics*

---

## ✨ Features

### Core Features
- 📤 **Easy Upload** - Drag-and-drop or click to upload WhatsApp exported `.txt` files
- 💬 **Chat Bubbles** - Native WhatsApp-style message bubbles with proper styling
- 🟢 **User Differentiation** - Green bubbles for your messages, dark for others
- 🕒 **Message Metadata** - Timestamp and sender name for each message
- ⚡ **Instant Rendering** - Zero backend required, everything happens in your browser

### Advanced Features
- 🌙 **Dark/Light Mode** - Toggle between themes for comfortable viewing
- 🔍 **Search & Highlight** - Find messages with yellow highlighting
- 🏷️ **Message Filtering** - Filter by All messages, User only, or Others only
- ✔✔ **Read Receipts** - Seen/double-tick indicators for sent messages
- 📊 **Chat Statistics** - View total, user, and other message counts
- 🖼️ **Media Detection** - Identify media-omitted messages
- 1️⃣ **Navigation** - Jump to first message with quick navigation button
- 📱 **Responsive Design** - Fully optimized for desktop and mobile devices
- ⚡ **Smooth Scrolling** - Auto-scroll to latest messages on load

---

## 🚀 Quick Start

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- An exported WhatsApp chat file (`.txt` format)

### How to Export WhatsApp Chat

1. Open **WhatsApp** on your device
2. Navigate to the chat you want to export
3. Tap **Menu** (three dots) → **More** → **Export Chat**
4. Select **Without Media** (recommended for faster processing)
5. Save the `.txt` file to your device

### Using the App

1. Visit [WhatsApp Inbox Viewer](https://chatviewer-2d185.web.app/)
2. Click **"Upload Chat (.txt)"** or drag-and-drop your file
3. The chat will instantly render in WhatsApp-style format
4. Use the controls to search, filter, and navigate

---

## 💻 Installation (Local Setup)

### Clone the Repository
```bash
git clone https://github.com/mhhridoy7907/whatsapp-inbox-viewer.git
cd whatsapp-inbox-viewer/Code
```

### Run Locally
Simply open `index.html` in your web browser:

**Option 1: Direct File**
```bash
# On Windows
start index.html

# On macOS
open index.html

# On Linux
xdg-open index.html
```

**Option 2: Local Server (Recommended)**
```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js
npx http-server
```

Then visit `http://localhost:8000` in your browser.

---

## 📁 Project Structure

```
whatsapp-inbox-viewer/
├── Code/
│   ├── index.html        # Main HTML structure
│   ├── function.js       # Core functionality and logic
│   ├── style.css         # Styling and responsive design
│   ├── wp.png            # Preview screenshot
│   ├── wpp.png           # Preview screenshot
│   ├── up.png            # Feature preview
│   ├── up1.png           # Feature preview
│   ├── up2.png           # Feature preview
│   ├── up3.png           # Feature preview
│   └── README.md         # Project documentation
├── LICENSE               # MIT License
└── .gitignore           # Git ignore rules
```

---

## 🛠️ Technology Stack

| Technology | Purpose |
|-----------|---------|
| **HTML5** | Semantic markup and structure |
| **CSS3** | Styling, animations, and responsive layout |
| **JavaScript (Vanilla)** | File parsing, DOM manipulation, interactivity |

### Key Advantages
- ✅ No external dependencies or frameworks
- ✅ Lightweight and fast (< 50KB total)
- ✅ Works completely offline
- ✅ Privacy-focused (no data sent to servers)
- ✅ Cross-browser compatible

---

## 📖 Usage Guide

### Basic Chat Viewing
1. Upload your WhatsApp `.txt` file
2. Messages automatically display in chat bubble format
3. Scroll through the conversation naturally

### Search Messages
- Use the search bar to find specific keywords
- Matching messages highlight in yellow
- Navigate through results with arrow buttons

### Filter Messages
- **All**: Display all messages in the chat
- **User**: Show only your sent messages (green bubbles)
- **Other**: Show only received messages (dark bubbles)

### Toggle Themes
- Click the moon/sun icon to switch between dark and light modes
- Your preference is remembered for future sessions

### View Statistics
- Access the statistics panel to see:
  - Total message count
  - Messages sent by you
  - Messages received from others

---

## 🎯 Supported Chat File Format

WhatsApp exports `.txt` files in the following format:

```
[12/3/26, 10:30:45 AM] Your Name: Hey there!
[12/3/26, 10:31:12 AM] Their Name: Hi! How are you?
[12/3/26, 10:32:00 AM] Your Name: <Media omitted>
```

**File Requirements:**
- ✅ Standard WhatsApp export format (.txt)
- ✅ Any chat language supported
- ✅ Supports both group and private chats
- ✅ Any file size (tested up to 100MB+)

---

## 🔐 Privacy & Security

- 🔒 **100% Client-Side Processing** - Your chat data never leaves your device
- 🛡️ **No Backend Server** - No data collection or logging
- 🚫 **No Cookies or Tracking** - Complete privacy guaranteed
- ✅ **Open Source** - Full transparency, audit the code yourself

---

## 🔮 Roadmap & Future Improvements

### Planned Features
- 📅 Date separators between different dates
- 🖼️ Media support (images, videos, documents)
- 👤 Profile avatars and user identification
- 📊 Advanced statistics and analytics
- 🎨 Custom themes and color schemes
- 📥 Export chat as PDF or image
- 🔔 Message notifications/indicators
- 📱 Progressive Web App (PWA) support

---

## 📝 Update History

### Version 2.0 - March 24, 2026
**Major Update - Advanced Features Release**

#### New Features
- ✅ **Seen Indicators** - Double tick (✔✔) for read messages
- ✅ **Navigation Button** - Jump to first message instantly
- ✅ **Search Highlighting** - Yellow highlighting for search results
- ✅ **Message Filtering** - View All/User/Other messages separately
- ✅ **Theme Toggle** - Dark and Light mode support
- ✅ **Media Detection** - Identify `<Media omitted>` messages
- ✅ **Statistics Panel** - Message count breakdown
- ✅ **Smooth Scrolling** - Enhanced UX on navigation

#### Improvements
- 🎨 Enhanced responsive layout for all devices
- ⚡ Optimized performance and loading speed
- 🐛 Bug fixes and stability improvements
- 📱 Better mobile experience

### Version 1.0 - March 12, 2026
**Initial Release**

- Basic WhatsApp-style chat viewer
- File upload and `.txt` parsing
- Message bubble styling (User & Other)
- Auto-scroll to latest message
- Responsive design for desktop and mobile

---



## 🐛 Bug Reports & Feature Requests

Found a bug or have a great idea? Let us know!

- **Bug Report**: [Open an Issue](https://github.com/mhhridoy7907/issues)
- **Feature Request**: [Suggest an Enhancement](https://github.com/mhhridoy7907/issues)

Please include:
- Detailed description of the issue
- Steps to reproduce (for bugs)
- Screenshots or examples
- Your browser and OS information

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### What This Means
- ✅ Free for personal and commercial use
- ✅ You can modify and distribute
- ⚠️ Must include original license and copyright notice

---

## 🙏 Acknowledgments

- **Inspiration**: WhatsApp's beautiful UI/UX design
- **Community**: Thanks to everyone who provides feedback and suggestions
- **Contributors**: All who help improve this project

---

## 📞 Support & Contact

- **Author**: Murad Hasan Hridoy
- **GitHub**: [@mhhridoy7907](https://github.com/mhhridoy7907)
- **Live Demo**: [WhatsApp Inbox Viewer](https://chatviewer-2d185.web.app/)

---

## ⭐ Show Your Support

If you find this project helpful, please consider:
- ⭐ Starring the repository
- 🐦 Sharing with friends
- 📢 Spreading the word on social media
- 💬 Providing feedback and suggestions

---

<div align="center">

**Made with ❤️ by [Murad Hasan Hridoy](https://github.com/mhhridoy7907)**

*Last Updated: March 24, 2026*

</div>
