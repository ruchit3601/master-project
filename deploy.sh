ssh "ubuntu@3.110.46.66" "cd app/zomato-clone && sudo docker-compose stop && git pull origin master && sudo docker-compose up -d --build && exit"
