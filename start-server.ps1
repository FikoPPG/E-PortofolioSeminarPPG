# ==============================================================================
# THE CREATIVE EDUCATOR ARCHIVE - LOCAL DEV SERVER (ZERO DEPENDENCY)
# Runs via native Windows PowerShell HttpListener. No Node.js required!
# ==============================================================================

$port = 5173
$prefix = "http://localhost:$port/"
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($prefix)

try {
    $listener.Start()
    Write-Host ""
    Write-Host "==========================================================" -ForegroundColor Green
    Write-Host "  THE CREATIVE EDUCATOR ARCHIVE SERVER RUNNING!" -ForegroundColor Cyan
    Write-Host "  URL: $prefix" -ForegroundColor Yellow
    Write-Host "  Tekan Ctrl+C untuk menghentikan server." -ForegroundColor Gray
    Write-Host "==========================================================" -ForegroundColor Green
    Write-Host ""

    $mimeTypes = @{
        ".html" = "text/html; charset=utf-8"
        ".css"  = "text/css; charset=utf-8"
        ".js"   = "application/javascript; charset=utf-8"
        ".json" = "application/json; charset=utf-8"
        ".png"  = "image/png"
        ".jpg"  = "image/jpeg"
        ".jpeg" = "image/jpeg"
        ".svg"  = "image/svg+xml"
        ".ico"  = "image/x-icon"
        ".woff2"= "font/woff2"
        ".mp3"  = "audio/mpeg"
    }

    $baseDir = $PSScriptRoot
    if (-not $baseDir) { $baseDir = (Get-Location).Path }

    while ($listener.IsListening) {
        try {
            $context = $listener.GetContext()
            $request = $context.Request
            $response = $context.Response

            $urlPath = $request.Url.LocalPath
            if ($urlPath -eq "/" -or $urlPath -eq "") {
                $urlPath = "/index.html"
            }

            # Convert URL to local file path
            $cleanPath = $urlPath.TrimStart("/").Replace("/", [IO.Path]::DirectorySeparatorChar)
            $localPath = Join-Path $baseDir $cleanPath

            if (Test-Path $localPath -PathType Leaf) {
                $extension = [IO.Path]::GetExtension($localPath).ToLower()
                $contentType = if ($mimeTypes.ContainsKey($extension)) { $mimeTypes[$extension] } else { "application/octet-stream" }
                $response.ContentType = $contentType
                $response.Headers.Add("Access-Control-Allow-Origin", "*")
                $response.Headers.Add("Cache-Control", "no-cache")

                $bytes = [IO.File]::ReadAllBytes($localPath)
                $response.ContentLength64 = $bytes.Length

                if ($request.HttpMethod -ne "HEAD") {
                    $response.OutputStream.Write($bytes, 0, $bytes.Length)
                }
            } else {
                $response.StatusCode = 404
                $msg = [System.Text.Encoding]::UTF8.GetBytes("404 - File Not Found: $urlPath")
                $response.ContentLength64 = $msg.Length
                if ($request.HttpMethod -ne "HEAD") {
                    $response.OutputStream.Write($msg, 0, $msg.Length)
                }
            }

            $response.OutputStream.Close()
        }
        catch {
            # Log and keep listening
            Write-Host "Request error: $_" -ForegroundColor DarkGray
        }
    }
}
finally {
    $listener.Stop()
    $listener.Close()
}
