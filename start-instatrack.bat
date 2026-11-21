@echo off
title InstaTrack Server
cd /d "%~dp0"
echo Starting InstaTrack 24/7 Server...
start "" http://localhost:3000
node server.js
pause
