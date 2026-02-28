Add-Type @'
using System;
using System.Runtime.InteropServices;
public class Win32 {
    [DllImport("user32.dll")]
    public static extern bool SetForegroundWindow(IntPtr hWnd);
}
'@

$proc = Get-Process | Where-Object { $_.MainWindowTitle -like '*localhost*' -or $_.MainWindowTitle -like '*LearnAI*' -or $_.MainWindowTitle -like '*Chrome*' -or $_.MainWindowTitle -like '*Edge*' } | Select-Object -First 1
if ($proc) {
    [Win32]::SetForegroundWindow($proc.MainWindowHandle)
}

Start-Sleep -Seconds 2

Add-Type -AssemblyName System.Windows.Forms
Add-Type -AssemblyName System.Drawing
$screen = [System.Windows.Forms.Screen]::PrimaryScreen.Bounds
$bitmap = New-Object System.Drawing.Bitmap($screen.Width, $screen.Height)
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)
$graphics.CopyFromScreen($screen.Location, [System.Drawing.Point]::Empty, $screen.Size)
$bitmap.Save('C:\Users\milan\learnai\screenshot-v2.png', [System.Drawing.Imaging.ImageFormat]::Png)
$graphics.Dispose()
$bitmap.Dispose()
Write-Host "Screenshot saved"
