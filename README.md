# InstaTrack – Instagram Followers & Unfollowers Analytics Dashboard

**InstaTrack** is a private, modern web application that analyzes Instagram followers and following lists to identify accounts that do not follow you back, mutual followers, fans, and historical unfollowers.

> **Privacy & Security Guarantee:**
> InstaTrack requires **NO** Instagram passwords, login credentials, session cookies, or unofficial API scraping. All processing is performed **100% locally in your web browser**. Your personal data never leaves your device.

---

## Features

### 1. Dashboard Overview
- **Key Statistics Cards**:
  - Total Followers (with % change vs baseline)
  - Total Following (with % change vs baseline)
  - Not Following Me Back (count & % of following)
  - Mutual Followers (count & mutual connection rate %)
  - I Don't Follow Back (Fans & inbound audience)
  - New Followers (gained since previous export)
  - Lost Followers (accounts that unfollowed you)
- **Visual Analytics**:
  - **Audience Trajectory Chart**: Interactive area chart showing follower and following growth over time.
  - **Relationship Distribution Chart**: Donut chart breaking down mutual friends, non-followers, and fans with center metric.
  - **Follower-to-Following Ratio**: Health score & ratio calculation (e.g., 1.5:1).
  - **Unfollowers Alert Banner**: Instant notification when lost followers are detected.

### 2. Not Following Me Back ($G \setminus F$)
- Mathematical set difference of Following ($G$) minus Followers ($F$).
- Displays username, profile URL, initial-avatar badge, and follow status.
- Single-click username copy (`@username`).
- Batch "Copy All Usernames" to clipboard.
- CSV export for non-followers.
- Instant search filter & sorting (Alphabetical A–Z, Z–A, Date Added).
- Grid Card View & Clean Table Rows View.

### 3. Mutual Followers ($G \cap F$)
- Accounts you follow that follow you back.
- Full search, sort, copy, and CSV export capabilities.

### 4. I Don't Follow Back ($F \setminus G$)
- Fans and inbound followers whom you haven't followed back.
- Full search, sort, copy, and CSV export capabilities.

### 5. Historical Unfollowers Tracker
- **Snapshot Comparator**: Compare any past baseline snapshot ($A$) with a recent snapshot ($B$).
- **Unfollowed Me**: Accounts present in $A$ but missing in $B$.
- **New Followers**: Accounts present in $B$ but missing in $A$.
- **I Unfollowed**: Accounts you stopped following.
- **I Recently Followed**: Accounts you started following.
- Export unfollowers report to CSV.

### 6. Official Instagram Data Import
- Drag-and-drop file upload.
- Supports Instagram's official **Download Your Information** format:
  - Direct **.ZIP** archive upload (automatically extracted in-browser).
  - Multiple JSON files (`followers_1.json`, `followers_2.json`, `following.json`).
  - HTML format exports (`followers_1.html`, `following.html`).
- Automatic username normalization (case-insensitive lowercase, stripping URLs and `@`).
- Deduplication and malformed entry resilience.
- Step-by-step visual tutorial on downloading data from Instagram.

### 7. Settings, Backup & Privacy
- **Audit Information**: Explanation of zero-server architecture and memory safety.
- **Snapshot Manager**: Rename, activate, or delete individual snapshots.
- **Full JSON Backup**: Export and restore entire snapshot databases.
- **Sample Demo Data**: Toggle built-in realistic multi-snapshot demo data for testing.
- **Danger Zone**: Wipe all stored data from browser with confirmation dialog.

### 8. Downloadable PDF & Print Report
- One-click executive summary report ready for saving as PDF or printing.
- Clean high-contrast styling with metrics summary and non-follower breakdown table.

---

## Technical Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS (Linear/Vercel charcoal dark mode theme)
- **Icons**: Lucide React
- **Data Visualization**: Recharts
- **Archive Extraction**: JSZip (client-side unzipping)
- **Effects**: canvas-confetti
- **Storage**: LocalStorage / IndexedDB

---

## How to Get Your Instagram Data

1. Open Instagram (App or Web) &rarr; **Settings** &rarr; **Accounts Center**.
2. Select **Your information and permissions** &rarr; **Download your information**.
3. Choose **Download or transfer information** &rarr; **Some of your information**.
4. Check **Followers and following**.
5. Choose **JSON** (or HTML) format, Quality: High/Medium, Date range: **All time**.
6. When Instagram notifies you that the export is ready, download the `.zip` file.
7. Drop the `.zip` file (or extract `followers_1.json` and `following.json`) directly into **InstaTrack**.

---

## Running Locally

```bash
# Navigate to project directory
cd instatrack

# Install dependencies
npm install

# Start development server
npm run dev

# Build production bundle
npm run build
```
