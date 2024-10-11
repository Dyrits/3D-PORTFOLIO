#!/bin/bash

# Load environment variables from .env file
source .env

# Build the project
npm run build

# Copy files from local system to remote server
scp -r "${LOCAL_DIR}"* "$REMOTE_USER@$REMOTE_HOST:$REMOTE_DIR"