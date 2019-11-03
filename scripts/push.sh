docker tag strider/protector/user-client-react:`cat ./src/VERSION` 984868136916.dkr.ecr.us-east-1.amazonaws.com/strider/protector/user-client-react:`cat ./src/VERSION`
$(aws ecr get-login --no-include-email --region us-east-1)
docker push 984868136916.dkr.ecr.us-east-1.amazonaws.com/strider/protector/user-client-react:`cat ./src/VERSION`
