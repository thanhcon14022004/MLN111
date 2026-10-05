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
echo    Website dang chay tren GitHub Pages tai:
echo    https://thanhcon14022004.github.io/MLN111/
echo.
echo    Luu y: Trong GitHub Settings ^> Pages, dam bao ban da chon:
echo    - Source: "Deploy from a branch"
echo    - Branch: "main" va Thu muc: "/docs"
echo =========================================================================
echo.
pause
