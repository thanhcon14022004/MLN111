@echo off
cd /d "%~dp0"
title Deploy to GitHub Pages - MLN111
cls

echo =========================================================================
echo    MLN111 - TRIET HOC TRONG DOI SONG (PHILOSOPHY IN LIFE)
echo    DANG BUILD VA DAY LEN GITHUB DE DEPLOY GITHUB PAGES
echo =========================================================================
echo.

echo [1/3] Kiem tra va build ban production...
call npm.cmd run build

echo.
echo [2/3] Day ma nguon len GitHub (nhanh main)...
git add .
git commit -m "deploy: update project for GitHub Pages" 2>nul
git push -u origin main

echo.
echo [3/3] Hoan tat day code len GitHub!
echo.
echo =========================================================================
echo    GitHub Actions dang tu dong build va phat hanh website tai:
echo    https://thanhcon14022004.github.io/MLN111/
echo.
echo    Ban co the theo doi tien trinh deploy tai:
echo    https://github.com/thanhcon14022004/MLN111/actions
echo =========================================================================
echo.
pause
