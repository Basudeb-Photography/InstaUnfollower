Set WshShell = CreateObject("WScript.Shell")
WshShell.CurrentDirectory = "C:\Users\ADMIN\.gemini\antigravity\scratch\instatrack"
WshShell.Run "node server.js", 0, False
WScript.Sleep 1000
WshShell.Run "cmd /c start http://localhost:3000", 0, False
