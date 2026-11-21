@echo off
title Install InstaTrack Auto-Start on Windows
echo Installing InstaTrack to start automatically with Windows...

set "TARGET_DIR=%APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup"
set "SHORTCUT=%TARGET_DIR%\InstaTrackAutoStart.vbs"

copy /y "%~dp0start-hidden.vbs" "%SHORTCUT%"

if exist "%SHORTCUT%" (
    echo.
    echo =========================================================
    echo SUCCESS: InstaTrack is now set to start with Windows 24/7!
    echo Every time you turn on your PC, it will run automatically
    echo in the background at http://localhost:3000
    echo =========================================================
) else (
    echo Error installing startup shortcut.
)

pause
