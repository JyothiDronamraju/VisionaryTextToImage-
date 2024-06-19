#!/bin/bash

# Setup Backend
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# Setup Frontend
cd ../frontend
npm install

echo "Setup Complete!"
