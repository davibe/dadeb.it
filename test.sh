#!/bin/bash
set -e

echo "=== dadeb.it test script ==="
echo ""

# Load nvm if available
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Use project's Node version
if [ -f ".nvmrc" ]; then
  nvm use 2>/dev/null || nvm install
fi

# 1. Check dependencies are installed
echo "[1/4] Checking node_modules..."
if [ ! -d "node_modules" ]; then
  echo "  Installing dependencies..."
  npm install
fi
echo "  ✓ Dependencies OK"

# 2. Build the project
echo "[2/4] Building project..."
npm run build > /dev/null 2>&1
echo "  ✓ Build successful"

# 3. Start server and test pages
echo "[3/4] Testing pages..."
npm run start &
SERVER_PID=$!
sleep 3

# Test homepage
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/)
if [ "$HTTP_CODE" != "200" ]; then
  echo "  ✗ Homepage failed (HTTP $HTTP_CODE)"
  kill $SERVER_PID 2>/dev/null
  exit 1
fi
echo "  ✓ Homepage (/) returns 200"

# Test CV page
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/cv)
if [ "$HTTP_CODE" != "200" ]; then
  echo "  ✗ CV page failed (HTTP $HTTP_CODE)"
  kill $SERVER_PID 2>/dev/null
  exit 1
fi
echo "  ✓ CV page (/cv) returns 200"

# Test CV page contains expected content
CV_CONTENT=$(curl -s http://localhost:3000/cv)
if ! echo "$CV_CONTENT" | grep -q "Davide Bertola"; then
  echo "  ✗ CV page missing 'Davide Bertola'"
  kill $SERVER_PID 2>/dev/null
  exit 1
fi
echo "  ✓ CV page contains 'Davide Bertola'"

if ! echo "$CV_CONTENT" | grep -q "IT Software Engineer"; then
  echo "  ✗ CV page missing 'IT Software Engineer'"
  kill $SERVER_PID 2>/dev/null
  exit 1
fi
echo "  ✓ CV page contains 'IT Software Engineer'"

# 4. Test static assets
echo "[4/4] Testing static assets..."
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/avatar.png)
if [ "$HTTP_CODE" != "200" ]; then
  echo "  ✗ Avatar image failed (HTTP $HTTP_CODE)"
  kill $SERVER_PID 2>/dev/null
  exit 1
fi
echo "  ✓ Public avatar.png accessible"

# Cleanup
kill $SERVER_PID 2>/dev/null

echo ""
echo "=== All tests passed ✓ ==="
