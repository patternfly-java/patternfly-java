---
name: pf-dev-env
description: This skill should be used when the user asks to "start dev environment", "start local dev", "start showcase", "launch dev env", "stop dev environment", "stop showcase", "restart dev environment", "dev env status", "check dev environment", "is the dev server running", "start j2cl watch", "start vite", or invokes /pf-dev-env. Starts, stops, and checks the status of the local PFJ showcase development environment (J2CL watch + Vite dev server).
metadata:
  version: "0.1.0"
---

# /pf-dev-env — Local Development Environment

Manages the local development environment for the PatternFly Java showcase. The dev environment consists of two processes:

1. **J2CL watch** — `mvn j2cl:watch -P showcase` (compiles Java to JavaScript on file changes)
2. **Vite dev server** — `cd showcase && pnpm run watch` (serves HTML/CSS/JS with hot reload)

All operations are idempotent. Detects externally-started processes — if you already started `mvn j2cl:watch` or `pnpm run watch` in another terminal, the skill recognizes them.

## Tools

- **Bash** — Execute shell commands for process management, health checks, and browser launch

## Arguments

```
/pf-dev-env [start|stop|status] [--port <port>]
```

- **No argument or `start`** — Verify build, start both processes, wait for readiness, open browser
- **`stop`** — Kill both processes
- **`status`** — Check running state and report URLs
- **`--port <port>`** (optional) — Vite dev server port (default: `1234`)

## Input / Output

**Input:** Subcommand (`start`, `stop`, `status`) and optional port

**Output:** Running J2CL watch + Vite dev server

**Feeds into:** `pf-compare` and `pf-align` require a running showcase dev server

**Depends on:** Nothing — this is standalone

## Constants

```
DEFAULT_PORT        = 1234
J2CL_PROCESS_MATCH  = "j2cl:watch"
VITE_PROCESS_MATCH   = "vite"
BUILD_TIMEOUT        = 300   (seconds, for mvn verify)
READINESS_TIMEOUT    = 60    (seconds, for Vite server)
READINESS_INTERVAL   = 2     (seconds between polls)
PROJECT_ROOT         = (git repository root)
```

## Process Detection

Detect running processes using port and process name matching. This works regardless of how the processes were started (manually, by this skill, or by another tool).

### Vite Dev Server

```bash
VITE_PID=$(lsof -ti :$PORT 2>/dev/null)
```

If `VITE_PID` is non-empty, Vite is running on the configured port.

### J2CL Watch

```bash
J2CL_PID=$(pgrep -f "$J2CL_PROCESS_MATCH" 2>/dev/null | head -1)
```

If `J2CL_PID` is non-empty, J2CL watch is running.

## Subcommand: `start` (default)

Start the development environment. Idempotent — if processes are already running, report their state without restarting.

### Step 1: Parse Arguments

Extract from the user's prompt:
- **SUBCOMMAND** — one of `start` (default), `stop`, or `status`
- **PORT** — from `--port <number>` (default: `1234`)
- **Restart** — treat as `stop` followed by `start`

### Step 2: Check If Already Running

```bash
VITE_PID=$(lsof -ti :$PORT 2>/dev/null)
J2CL_PID=$(pgrep -f "j2cl:watch" 2>/dev/null | head -1)

if [ -n "$VITE_PID" ] && [ -n "$J2CL_PID" ]; then
  echo "Dev environment already running"
  echo ""
  echo "Showcase: http://localhost:$PORT/"
  echo "J2CL:     PID $J2CL_PID"
  echo "Vite:     PID $VITE_PID (port $PORT)"
  exit 0
fi
```

If only one process is running, continue to start the missing one (skip its start step).

### Step 3: Pre-flight Build

Only run if J2CL watch is not already running (the build ensures a clean state for J2CL).

```bash
if [ -z "$J2CL_PID" ]; then
  echo "Running pre-flight build..."
  mvn verify -Dquickly -P showcase
  if [ $? -ne 0 ]; then
    echo "ERROR: Pre-flight build failed. Fix build errors before starting the dev environment."
    exit 1
  fi
  echo "Pre-flight build passed"
fi
```

Run this using the **Bash** tool with a **timeout of 300000** (5 minutes).

### Step 4: Start J2CL Watch

Skip if J2CL is already running (detected in Step 2).

```bash
echo "Starting J2CL watch..."
```

Run `mvn j2cl:watch -P showcase` using the **Bash** tool with **`run_in_background: true`**. This process runs indefinitely.

### Step 5: Start Vite Dev Server

Skip if Vite is already running (detected in Step 2).

```bash
echo "Starting Vite dev server..."
```

Run `cd showcase && pnpm run watch -- --port $PORT` using the **Bash** tool with **`run_in_background: true`**. This process runs indefinitely.

### Step 6: Wait for Readiness

Poll the Vite dev server until it responds.

```bash
echo "Waiting for dev server..."
for i in $(seq 1 30); do
  if curl -sf http://localhost:$PORT/ >/dev/null 2>&1; then
    echo "Dev server ready"
    break
  fi
  sleep 2
  if [ $i -eq 30 ]; then
    echo "ERROR: Dev server not ready after 60s"
    echo "Check Vite output for errors"
    exit 1
  fi
done
```

### Step 7: Open Browser

```bash
if [[ "$OSTYPE" == "darwin"* ]]; then
  open "http://localhost:$PORT/"
elif command -v xdg-open >/dev/null 2>&1; then
  xdg-open "http://localhost:$PORT/"
fi
```

### Step 8: Report Success

```bash
echo ""
echo "Development environment started"
echo ""
echo "Showcase: http://localhost:$PORT/"
echo ""
echo "To stop: /pf-dev-env stop"
```

## Subcommand: `stop`

Stop both processes. Works regardless of how they were started.

```bash
VITE_PID=$(lsof -ti :$PORT 2>/dev/null)
J2CL_PID=$(pgrep -f "j2cl:watch" 2>/dev/null | head -1)

if [ -z "$VITE_PID" ] && [ -z "$J2CL_PID" ]; then
  echo "No dev environment processes running"
  exit 0
fi

if [ -n "$J2CL_PID" ]; then
  echo "Stopping J2CL watch (PID $J2CL_PID)..."
  kill $J2CL_PID 2>/dev/null
  # Also kill child processes (Maven spawns child JVM)
  pkill -P $J2CL_PID 2>/dev/null || true
fi

if [ -n "$VITE_PID" ]; then
  echo "Stopping Vite dev server (PID $VITE_PID)..."
  kill $VITE_PID 2>/dev/null
fi

sleep 1

# Verify they stopped
VITE_PID=$(lsof -ti :$PORT 2>/dev/null)
J2CL_PID=$(pgrep -f "j2cl:watch" 2>/dev/null | head -1)
if [ -n "$VITE_PID" ] || [ -n "$J2CL_PID" ]; then
  echo "Force-killing remaining processes..."
  [ -n "$VITE_PID" ] && kill -9 $VITE_PID 2>/dev/null
  [ -n "$J2CL_PID" ] && kill -9 $J2CL_PID 2>/dev/null
  pkill -9 -f "j2cl:watch" 2>/dev/null || true
fi

echo "Development environment stopped"
```

## Subcommand: `status`

Check running state and report.

```bash
VITE_PID=$(lsof -ti :$PORT 2>/dev/null)
J2CL_PID=$(pgrep -f "j2cl:watch" 2>/dev/null | head -1)

if [ -n "$VITE_PID" ] && [ -n "$J2CL_PID" ]; then
  echo "Dev environment running"
  echo ""
  echo "Showcase: http://localhost:$PORT/"
  echo "J2CL:     PID $J2CL_PID"
  echo "Vite:     PID $VITE_PID (port $PORT)"
elif [ -n "$J2CL_PID" ]; then
  echo "Partial: Only J2CL watch running (PID $J2CL_PID)"
  echo "Vite dev server is NOT running"
  echo ""
  echo "To start fully: /pf-dev-env start"
elif [ -n "$VITE_PID" ]; then
  echo "Partial: Only Vite running (PID $VITE_PID, port $PORT)"
  echo "J2CL watch is NOT running"
  echo ""
  echo "To start fully: /pf-dev-env start"
else
  echo "Dev environment not running"
  echo ""
  echo "To start: /pf-dev-env start"
fi
```

## Error Handling

| Error | Action |
|-------|--------|
| Pre-flight build fails | Print build output and exit. Do not start any processes. |
| Port already in use (not Vite) | Report: "Port $PORT is in use by another process. Check with: `lsof -i :$PORT`". Exit. |
| J2CL watch fails to start | Report error. Vite may still start — report partial state. |
| Vite fails to start | Report error and check if `pnpm install` is needed (`node_modules` missing). |
| Readiness timeout | Report: "Dev server not ready after 60s. Check Vite output for errors." |
| `pnpm` not found | Report: "pnpm is required but not found. Install with: `npm install -g pnpm`" |
| `mvn` not found | Report: "Maven is required but not found." |

## Anti-Patterns

**Never:**

- Start processes if both are already running (check first, report state)
- Run `mvn j2cl:watch` without the `-P showcase` profile
- Kill processes without checking if they exist first
- Use fixed PIDs or PID files (always detect dynamically)
- Auto-invoke this skill from other skills (user must trigger explicitly)
- Skip the pre-flight build on `start` (unless J2CL is already running)
- Block the Claude session waiting for `j2cl:watch` or `pnpm run watch` to finish (they run indefinitely — always use `run_in_background`)
