@echo off
call npm install
call npm run dist
echo.
echo Se nao houve erro acima, o executavel esta na pasta "dist".
pause
