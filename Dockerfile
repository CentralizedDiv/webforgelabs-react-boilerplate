FROM node
RUN npm install -g serve && mkdir /app
WORKDIR /app

# The build context is the build dir itself, otherwise Docker has to copy
# all the yarn libs to the context, while it only needs the built package
ADD . .
EXPOSE 5000

CMD serve -s .
