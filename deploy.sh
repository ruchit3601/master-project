ssh "ubuntu@15.207.99.17" "cd app/zomato-clone && sudo docker-compose stop && git pull origin master && sudo docker-compose up -d --build && exit"

