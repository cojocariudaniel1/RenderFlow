#!/bin/bash
# start-dev.sh

echo START Django beckend
(cd backend && poetry run python manage.py runserver) &


echo "Start Next.js frontend"
(cd frontend && npm run dev) &

wait
https://preview.redd.it/wholesome-chet-throwback-v0-bxd1frb4kwsf1.png?width=320&crop=smart&auto=webp&s=6bbe627d5b9ceba0c94905350592bbc59342e43f