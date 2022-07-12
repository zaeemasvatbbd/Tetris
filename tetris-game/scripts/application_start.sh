#!/bin/bash

cd /home/ec2-user/app

# start app
npm start 
pm2 start npm --name "tetris" -- start
pm2 startup
pm2 save
pm2 restart all